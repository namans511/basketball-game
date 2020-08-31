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

var id;
var keyPressed = false;
var ypos = 2;
var xpos = 2;

//moving ball on space press
function spacePress(event) {
  if (event.keyCode == 32 && keyPressed == false) {
    keyPressed = true;
    id = setInterval(function () {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.drawImage(ball, 50 + xpos, 400 - ypos, 100, 100);
      ypos += 2;
      xpos += 2;
    }, 20);
  }
  // console.log("start");
}

//stopping ball on space realse
function spaceRelease(event) {
  clearInterval(id);
  keyPressed = false;
  // console.log("clear");
}
