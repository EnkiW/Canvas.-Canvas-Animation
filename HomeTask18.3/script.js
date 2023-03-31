const canvas = document.createElement('canvas');
canvas.width = 1200;
canvas.height = 900;
document.body.appendChild(canvas);


const ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.arc(600, 400, 300, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();


ctx.beginPath();
ctx.arc(530, 270, 35, 0, Math.PI * 2);
ctx.arc(670, 270, 35, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();


ctx.beginPath();
ctx.arc(600, 410, 120, 0.2 * Math.PI, 0.8 * Math.PI);
ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.stroke();
