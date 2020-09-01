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
  power = 0;
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
  // power = 0;
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
  if (event.keyCode == 32 && keyPressed == true) {
    clearInterval(angleid);
    clearInterval(powerMeter);
    var tan = ((6 * canvas.height) / 8 + 70 - y) / (x - 90);
    xvel = power * Math.cos(Math.atan(tan));
    yvel = power * Math.sin(Math.atan(tan));

    document.getElementById("xy").innerHTML =
      "x=" + x + " y=" + y + " tan=" + tan + " xvel=" + xvel + " yvel=" + yvel;
    // keyPressed = false;
    id = setInterval(function () {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (xpos > canvas.width || ypos > canvas.height) {
        angleid = setInterval(angleDraw, 80);
        drawBall();
        clearInterval(id);
      }
      ctx.drawImage(ball, xpos, ypos, 100, 100);
      yvel = yvel - yacc;
      ypos -= yvel;
      xpos += xvel;
    }, 15);
  }
  // keyPressed = false;
  // console.log("clear");
}
//angle bar
var x = 90;
var y = (6 * canvas.height) / 8;
var f = 1;
var limity = (6 * canvas.height) / 8 + 60;
var limitx = x + 60;

var angleid = setInterval(angleDraw, 80);

function angleDraw() {
  ctx.clearRect(20, (6 * canvas.height) / 8, 140, 110);

  ctx.beginPath();
  ctx.fillStyle = "green";

  ctx.fillRect(20, (6 * canvas.height) / 8, 140, 110);

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2.5;
  ctx.moveTo(x, y + 10);
  ctx.lineTo(90, (6 * canvas.height) / 8 + 70);
  ctx.stroke();
  if (x < limitx && f == 1) {
    x++;
    y++;
  }
  if (x > limitx - 10) {
    f = 2;
  }
  if (f == 2) {
    x--;
    y--;
  }
  if (x < 90) {
    f = 1;
  }
}

//backctx.closePath();
