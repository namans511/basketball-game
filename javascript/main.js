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
  keyPressed = false;
  ypos = 400;
  xpos = 50;
  yacc = 0.2;
  yvel = 12;
  xvel = 10;
}

var id;
var keyPressed = false;
var ypos = 400;
var xpos = 50;
var yacc = 0.2;
var yvel = 12;
var xvel = 10;
var powertext = document.getElementById("power");
var powerMeter;
var power = 0;
//moving ball on space press
function spacePress(event) {
  // console.log("start");
  if (event.keyCode == 32 && keyPressed == false) {
    keyPressed = true;
    powerMeter = setInterval(function () {
      powertext.innerHTML = "the power is " + power;
      power += 1;
    }, 100);
  }
}

//stopping ball on space realse
function spaceRelease(event) {
  // clearInterval(id);
  clearInterval(powerMeter);
  if (event.keyCode == 32 && keyPressed == true) {
    keyPressed = false;
    id = setInterval(function () {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (xpos > canvas.width || ypos > canvas.height) {
        drawBall();
        clearInterval(id);
      }
      ctx.drawImage(ball, xpos, ypos, 100, 100);
      yvel = yvel - yacc;
      ypos -= yvel;
      xpos += xvel;
    }, 15);
  }
  keyPressed = false;
  // console.log("clear");
}

function setPower() {}
