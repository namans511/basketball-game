var canvas = document.getElementById("back");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.translate(canvas.width / 2, (2 * canvas.height) / 3);
ctx.arc(0, 0, 100, 0, 2 * Math.PI);
ctx.stroke();
