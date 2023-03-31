const canvas = document.createElement('canvas');
canvas.width = 1200;
canvas.height = 900;
document.body.appendChild(canvas);


const ctx = canvas.getContext('2d');


ctx.fillStyle = 'lightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);


ctx.beginPath();
ctx.lineTo(450, 490);
ctx.lineTo(750, 490);
ctx.lineTo(750, 500);
ctx.lineTo(650, 550);
ctx.lineTo(550, 550);
ctx.lineTo(450, 500);
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.lineTo(600, 350);
ctx.lineTo(675, 490);
ctx.lineTo(525, 490);
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();
ctx.stroke();



ctx.beginPath();
ctx.moveTo(600, 250);
ctx.lineTo(600, 350);
ctx.lineTo(720, 350);
ctx.lineTo(650, 300);
ctx.lineTo(720, 250);
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();