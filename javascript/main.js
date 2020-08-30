var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//adding ball to main canvas
var ball = new Image();
ball.src = "images/ball.png";
ball.onload = function () {
  ctx.drawImage(ball, 50, 400, 100, 100);
};
