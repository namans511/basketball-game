screen.setup();

var angle = new Angle(90, (3 / 4) * height);
angle.draw();
var angleid = setInterval(function () {
  angle.update();
}, 50);

//making hoop
var x_back = window.width / 1.8 - 240 + 690;
var y_back = (2 / 2.8) * window.height - 400;
var x_hoop = window.width / 1.8 - 240 + 688;
var y_hoop = (2 / 2.8) * window.height - 300;
var hoop = new Hoop(x_hoop, y_hoop, x_back, y_back, 200);

//making ball
var ball = new Ball(40, (3 / 4) * height - 100);
ball.draw();

var keyPressed = false;

//powerpower
var powertext = document.getElementById("power");
var powerMeter;
var power;

var keycode = document.getElementById("keycode");
var keyy = 1;
function spacePress(event) {
  keycode.innerHTML = "keycode=" + event.keyCode + " freq=" + keyy;
  keyy += 1;
  if (event.keyCode == 16 && keyPressed == false) {
    keyPressed = true;
    power = 35;
    powerMeter = setInterval(function () {
      powertext.innerHTML = "power is " + power;
      power += 2;
    }, 200);
  }
}

var velocityinfo = document.getElementById("xy");
var shotid;

function spaceRelease(event) {
  if (event.keyCode == 16 && keyPressed == true) {
    clearInterval(powerMeter);
    // clearInterval(angleid);
    var tan = (angle.yCenter - angle.y) / (angle.x - angle.xCenter);
    ball.xVel = power * Math.cos(Math.atan(tan));
    ball.yVel = power * Math.sin(Math.atan(tan));
    velocityinfo.innerHTML = "xvel=" + ball.xVel + " yvel=" + ball.yVel;
    shotid = setInterval(function () {
      screen.clear();
      if (ball.x > width || ball.y > height) {
        // angle.draw();
        // var angleid = setInterval(function () {
        //   angle.update();
        // }, 50);
        ball.reset();
        console.log("pehele");
        clearInterval(shotid);
        console.log("baad me");
        keyPressed = false;
      } else {
        ball.move();
        if (hoop.collide(ball.x, ball.y) == 1) {
          ball.xVel *= -1;
        }
      }
    }, 20);
  }
}
