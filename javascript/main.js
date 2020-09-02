screen.setup();

var angle = new Angle(90, (3 / 4) * height);
angle.draw();
var angleid = setInterval(function () {
  angle.update();
}, 50);

<<<<<<< HEAD
function drawBall() {
  ctx.drawImage(ball, 50, 360, 100, 100);
  keyPressed = false;
  ypos = 360;
  xpos = 50;
  yacc = 1;
  yvel = 12;
  xvel = 10;
  power = 0;
}
=======
var ball = new Ball(40, (3 / 4) * height - 100);
ball.draw();

// var canvas = document.getElementById("mainCanvas");
// var ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// //adding ball to main canvas
// var ball = new Image();
// ball.src = "images/ball.png";
// // var ball = document.getElementById("basketball");
// ball.onload = drawBall;

// function drawBall() {
//   ctx.drawImage(ball, 40, (6 * canvas.height) / 8 - 100, 100, 100);
//   keyPressed = false;
//   ypos = 360;
//   xpos = 50;
//   yacc = 0.2;
//   yvel = 12;
//   xvel = 10;
//   power = 0;
// }
>>>>>>> origin/code-refactor

// var id;
var keyPressed = false;
// var ypos = 360;
// var xpos = 50;
// var yacc = 1;
// var yvel = 12;
// var xvel = 10;
var powertext = document.getElementById("power");
var powerMeter;
var power;

function spacePress(event) {
  if (event.keyCode == 32 && keyPressed == false) {
    keyPressed = true;
    power = 8;
    powerMeter = setInterval(function () {
      powertext.innerHTML = "power is " + power;
      power += 2;
    }, 200);
  }
}

var velocityinfo = document.getElementById("xy");
var shotid;

function spaceRelease(event) {
  if (event.keyCode == 32 && keyPressed == true) {
    clearInterval(powerMeter);
    clearInterval(angleid);
    var tan = (angle.yCenter - angle.y) / (angle.x - angle.xCenter);
    ball.xVel = power * Math.cos(Math.atan(tan));
    ball.yVel = power * Math.sin(Math.atan(tan));
    velocityinfo.innerHTML = "xvel=" + ball.xVel + " yvel=" + ball.yVel;
    shotid = setInterval(function () {
      screen.clear();
      if (ball.x > width || ball.y > height) {
        angle.draw();
        var angleid = setInterval(function () {
          angle.update();
        }, 50);
        ball.reset();
        console.log("pehele");
        clearInterval(shotid);
        console.log("baad me");
        keyPressed = false;
      } else {
        ball.move();
      }
    }, 20);
  }
}

// //stopping ball on space realse
// function spaceRelease(event) {
//   // clearInterval(id);
//   if (event.keyCode == 32 && keyPressed == true) {
//     clearInterval(angleid);
//     clearInterval(powerMeter);
//     var tan = ((6 * canvas.height) / 8 + 70 - y) / (x - 90);
//     xvel = power * Math.cos(Math.atan(tan));
//     yvel = power * Math.sin(Math.atan(tan));

//     document.getElementById("xy").innerHTML =
//       "x=" + x + " y=" + y + " tan=" + tan + " xvel=" + xvel + " yvel=" + yvel;
//     // keyPressed = false;
//     id = setInterval(function () {
//       ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//       if (xpos > canvas.width || ypos > canvas.height) {
//         angleid = setInterval(angleDraw, 20);
//         drawBall();
//         clearInterval(id);
//       }
//       ctx.drawImage(ball, xpos, ypos, 100, 100);
//       yvel = yvel - yacc;
//       ypos -= yvel;
//       xpos += xvel;
//     }, 15);
//   }
// keyPressed = false;
// console.log("clear");
// }
// //angle bar
// var x = 90;
// var y = (6 * canvas.height) / 8;
// var f = 1;
// var limity = (6 * canvas.height) / 8 + 60;
// var limitx = x + 60;
// var dir = 1;
// var angleid = setInterval(angleDraw, 80);

// function angleDraw() {
//   ctx.clearRect(20, (6 * canvas.height) / 8, 140, 110);

//   ctx.beginPath();
//   ctx.fillStyle = "green";

//   // ctx.fillRect(20, (6 * canvas.height) / 8, 140, 110);
//   ctx.beginPath();
//   ctx.arc(90, (6 * canvas.height) / 8 + 70, 70, 0, Math.PI, true);
//   ctx.closePath();
//   var grd = ctx.createLinearGradient(0, 0, 200, 0);
//   grd.addColorStop(0.3, "orange");
//   grd.addColorStop(1, "yellow");
//   ctx.lineWidth = 5;
//   ctx.fillStyle = grd;
//   ctx.fill();
//   ctx.strokeStyle = "black";
//   ctx.stroke();
//   ctx.beginPath();
//   ctx.strokeStyle = "white";
//   ctx.lineWidth = 2.5;
//   ctx.moveTo(x, y + 10);
//   ctx.lineTo(90, (6 * canvas.height) / 8 + 70);
//   ctx.stroke();
//   x += dir;
//   y += dir;
//   if (y > (3 / 4) * canvas.height + 50) {
//     dir = -1;
//   } else if (x < 90) {
//     dir = 1;
//   }
// }

// //backctx.closePath();
