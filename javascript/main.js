screen.setup();

//drawing angle
var angle = new Angle(90, (3 / 4) * height, backctx);
angle.draw();
var angleid = setInterval(function () {
  angle.update();
}, 35);

//making hoop
//values defined in background.js
var hoop = new Hoop(x_hoop, y_hoop, 133, x_back, y_back, 200);

//making ball
var ball = new Ball(40, (3 / 4) * height - 100);
ball.draw();

//powerpower
var powertext = document.getElementById("power");
var powerMeter;
var power;
var powerbar = document.getElementById("pbarspan");

var keycode = document.getElementById("keycode");
var keyy = 1;
function spacePress(event) {
  keycode.innerHTML = "keycode=" + event.keyCode + " freq=" + keyy;
  keyy += 1;
  if (event.keyCode == 32 && keyPressed == false && ball.x == ball.xpos) {
    keyPressed = true;
    power = 35;
    powerMeter = setInterval(function () {
      powerbar.innerHTML = power + "%";
      powerbar.style.width = power + "%";
      powertext.innerHTML = "power is " + power;
      power += 1;
    }, 200);
  }
}

var velocityinfo = document.getElementById("xy");
var shotid;

function spaceRelease(event) {
  if (event.keyCode == 32 && keyPressed == true) {
    keyPressed = false;
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
      } else {
        ball.move();
        var collsion = hoop.collide(ball.x, ball.y);
        if (collsion == 2) {
          // window.alert("score");
          score += 1;
          updateScore();
          ball.scoreAnimation();
        }
        if (collsion == 1) {
          ball.xVel *= -1;
          // window.alert("collide");
        }
      }
    }, 20);
  }
}

function movemouse(event) {
  let posx = event.clientX;
  let posy = event.clientY;
  var pos = document.getElementById("mousemove");
  pos.innerHTML = "x=" + posx + " y=" + posy;
}

var scoretext = document.getElementById("score");
var score = 0;
function updateScore() {
  scoretext.innerHTML = "score=" + score;
}

keycode.innerHTML =
  "x=" +
  hoop.x +
  " y=" +
  hoop.y +
  " len=" +
  hoop.hooplen +
  " ballx" +
  ball.x +
  " bally=" +
  ball.y;
keycode.style.color = "white";
