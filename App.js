const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// Draw a red circle
ctx.beginPath();
ctx.arc(100, 100, 45, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();
//draw eyes
ctx.beginPath();
ctx.arc(85, 80, 10, 0, 2 * Math.PI);
ctx.arc(120, 80, 10, 0, 2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();
//draw iris 
ctx.beginPath();
ctx.arc(85, 80, 5, 0, 2 * Math.PI);
ctx.arc(120, 80, 5, 0, 2 * Math.PI);
ctx.fillStyle = 'black';
ctx.fill();
ctx.beginPath();
ctx.arc(83, 78, 1.5, 0, 2 * Math.PI);
ctx.arc(118, 78, 1.5, 0, 2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();
//draw mouth
ctx.beginPath();
ctx.moveTo(75, 125);
ctx.quadraticCurveTo(100, 155, 125, 125);
ctx.quadraticCurveTo(100, 130, 75, 125);
ctx.fillStyle = 'black';
ctx.fill();
ctx.beginPath();
ctx.moveTo(75, 125);
ctx.quadraticCurveTo(90, 115, 70, 128);
ctx.moveTo(125, 125);
ctx.quadraticCurveTo(110, 115, 130, 128);
ctx.strokeStyle = 'black';
ctx.stroke();
// draw teeth
ctx.fillStyle = 'white';
ctx.fillRect(95, 128, 5, 5);
ctx.fillRect(100, 128, 5, 5);