// dust-mouse.js - 灰尘鼠标动画（不破坏背景）
(function() {
    let particles = [];

    function setup() {
        let canvas = createCanvas(windowWidth, windowHeight);
        canvas.style('position', 'fixed');
        canvas.style('top', '0');
        canvas.style('left', '0');
        canvas.style('z-index', '9999');
        canvas.style('pointer-events', 'none');
        
        clear();
    }

    function draw() {
        
        clear();

        
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].show();
            if (particles[i].isDead()) {
                particles.splice(i, 1);
            }
        }

       
    }

    function mouseMoved() {
        addDust(mouseX, mouseY);
        return false;
    }

    function addDust(x, y) {
        // 每次产生粒子
        let count = floor(random(1, 2));
        for (let i = 0; i < count; i++) {
            particles.push(new DustParticle(x, y));
        }
    }

    class DustParticle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = random(-1, 1);
            this.vy = random(-1, 1);
            this.size = random(15, 23);
            let gray = random(120, 200);
            this.color = color(gray, gray, gray);
            this.life = 255;
            
            this.decay = random(10, 20);
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.size *= 0.94;
            this.life -= this.decay;
        }

        show() {
            noStroke();
            fill(red(this.color), green(this.color), blue(this.color), this.life);
            ellipse(this.x, this.y, this.size);
        }

        isDead() {
            return this.life <= 0 || this.size < 0.5;
        }
    }

    window.setup = setup;
    window.draw = draw;
    window.mouseMoved = mouseMoved;
    window.windowResized = function() {
        resizeCanvas(windowWidth, windowHeight);
        clear();
    };
})();