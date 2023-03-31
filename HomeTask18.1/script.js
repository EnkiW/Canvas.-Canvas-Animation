const canvas = document.createElement('canvas');
canvas.width = 1200;
canvas.height = 900;
document.body.appendChild(canvas);


const ctx = canvas.getContext('2d');


ctx.fillStyle = 'green';
ctx.fillRect(0, 700, canvas.width, canvas.height);


ctx.fillStyle = 'blue';
ctx.fillRect(0, 100, canvas.width, canvas.height * 0.8);


ctx.fillStyle = 'white';
ctx.fillRect(500, 630, 200, 200);


ctx.beginPath();
ctx.moveTo(480, 640);
ctx.lineTo(600, 560);
ctx.lineTo(720, 640);
ctx.closePath();
ctx.fillStyle = 'red';
ctx.fill();


ctx.fillStyle = 'black';
ctx.fillRect(520, 700, 80, 120);


ctx.fillStyle = 'brown';
ctx.fillRect(610, 710, 30, 30);
ctx.fillStyle = 'brown';
ctx.fillRect(610, 745, 30, 30);
ctx.fillStyle = 'brown';
ctx.fillRect(645, 710, 30, 30);
ctx.fillStyle = 'brown';
ctx.fillRect(645, 745, 30, 30);


ctx.beginPath();
ctx.arc(120, 300, 45, 0, Math.PI * 2);
ctx.closePath();
ctx.arc(190, 300, 45, 0, Math.PI * 2);
ctx.closePath();
ctx.arc(155, 275, 45, 0, Math.PI * 2);
ctx.closePath();

ctx.arc(620, 200, 45, 0, Math.PI * 2);
ctx.closePath();
ctx.arc(690, 200, 45, 0, Math.PI * 2);
ctx.closePath();
ctx.arc(655, 175, 45, 0, Math.PI * 2);
ctx.closePath();

ctx.arc(420, 400, 45, 0, Math.PI * 2);
ctx.closePath();
ctx.arc(490, 400, 45, 0, Math.PI * 2);
ctx.closePath();
ctx.arc(455, 375, 45, 0, Math.PI * 2);
ctx.closePath();

ctx.fillStyle = 'white';
ctx.fill();


ctx.beginPath();
ctx.arc(1000, 200, 50, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();
