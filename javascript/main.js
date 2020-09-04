//setting up the screen, initialising the canvas context
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

//drawing ball
var ball;
var imgball = new Image();
imgball.src = "images/ball.png";
imgball.onload = function () {
  ball = new Ball(imgball, 40, (3 / 4) * height - 100);
  ball.draw();
};

//powerpower
//TODO: detele powertext and subsequent references
var powertext = document.getElementById("power");
var powerMeter;
var power;
var powerbar = document.getElementById("pbarspan");

//TODO: DELETE these keys
var keycode = document.getElementById("keycode");
var keyy = 1;

function spacePress(event) {
  keycode.innerHTML = "keycode=" + event.keyCode + " freq=" + keyy;
  keyy += 1;
  if (event.keyCode == 16) {
    console.log(fire.src);
  }
  if (event.keyCode == 32 && keyPressed == false && ball.x == ball.xpos) {
    keyPressed = true;
    power = 35;
    powerMeter = setInterval(function () {
      powerbar.innerHTML = power - 34 + "%";
      powerbar.style.width = power - 34 + "%";
      powertext.innerHTML = "power is " + power;
      if (power != 100) power += 1;
    }, 200);
  }
}

//TODO: delete velinfo
var velocityinfo = document.getElementById("xy");

var shotid;

function spaceRelease(event) {
  if (event.keyCode == 32 && keyPressed == true) {
    keyPressed = false;
    clearInterval(powerMeter);
    // clearInterval(angleid);

    //calculating component x and y velocity
    var tan = (angle.yCenter - angle.y) / (angle.x - angle.xCenter);
    ball.xVel = power * Math.cos(Math.atan(tan));
    ball.yVel = power * Math.sin(Math.atan(tan));
    //TODO: delete this
    velocityinfo.innerHTML = "xvel=" + ball.xVel + " yvel=" + ball.yVel;

    shotid = setInterval(function () {
      screen.clear();
      if (ball.x > width || ball.y > height) {
        // angle.draw();
        // var angleid = setInterval(function () {
        //   angle.update();
        // }, 50);
        ball.reset();
        clearInterval(shotid);
        // window.alert("baad me");
      } else {
        ball.move();
        var collsionStatus = hoop.collide(ball.x, ball.y);
        //score
        if (collsionStatus == 2) {
          // window.alert("score");
          score += 1;
          updateScore();
          ball.scoreAnimation();
        }
        if (collsionStatus == 1) {
          ball.xVel *= -1;
          // window.alert("collide");
        }
      }
    }, 20);
  }
}

var scoretext = document.getElementById("score");
var message = document.getElementById("text");
var score = 0;
function updateScore() {
  scoretext.innerHTML = "score=" + score;
  if (score == 3) {
    message.style.visibility = "visible";
    message.innerHTML = "Amazing!";
  } else if (score == 5) {
    message.innerHTML = "You're on fire";
  } else if (score == 8) {
    message.innerHTML = "You are OP";
  } else if (score == 10) {
    message.innerHTML = "GG";
    levelchange();
  }
}

var level = document.getElementById("level");
function levelchange() {
  level.innerHTML = "LEVEL-2";
  level.style.color = "rgb(17, 5, 0)";
  backCanvas.style.background = "url(../images/tree.jpg)";
  backCanvas.style.backgroundSize = "100% 50%";
  score = 0;
  score.innerHTML = "score";
}

//TODO: DELETE THIS TOO
function movemouse(event) {
  let posx = event.clientX;
  let posy = event.clientY;
  var pos = document.getElementById("mousemove");
  pos.innerHTML = "x=" + posx + " y=" + posy;
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

// var background = document.getElementById("background")
