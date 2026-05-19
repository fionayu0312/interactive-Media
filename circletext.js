let angle = 0;
const canvas = document.getElementById('circle-text-canvas');
const ctx = canvas.getContext('2d');
const text = 'PROCESS PART 2';
const radius = 50;

canvas.width = 150;
canvas.height = 150;

canvas.addEventListener('click', () => {
    window.location.href = 'process2.html';
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 30px sans-serif';
    ctx.fillStyle = 'rgb(21, 253, 241)';

    for (let i = 0; i < text.length; i++) {
        const charAngle = angle + (i / text.length) * Math.PI * 2;
        const x = canvas.width / 2 + radius * Math.cos(charAngle);
        const y = canvas.height / 2 + radius * Math.sin(charAngle);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(charAngle + Math.PI / 2);
        ctx.fillText(text[i], 0, 0);
        ctx.restore();
    }

    angle += 0.02;
    requestAnimationFrame(draw);
}

draw();