var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//adding ball to main canvas
var ball = new Image();
ball.src = "images/ball.png";
ball.onload = drawBall;

function drawBall() {
  ctx.drawImage(ball, 50, 400, 100, 100);
}

var id;
var keyPressed = false;
var ypos = 400;
var xpos = 50;
var yacc = 0.2;
var yvel = 12;
var xvel = 10;

//moving ball on space press
function spacePress(event) {
  if (event.keyCode == 32 && keyPressed == false) {
    keyPressed = true;
    id = setInterval(function () {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.drawImage(ball, xpos, ypos, 100, 100);
      yvel = yvel - yacc;
      ypos -= yvel;
      xpos += xvel;
    }, 15);
  }
  // console.log("start");
}

//stopping ball on space realse
function spaceRelease(event) {
  clearInterval(id);
  keyPressed = false;
  // console.log("clear");
}
