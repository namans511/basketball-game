var width = window.innerWidth;
var height = window.innerHeight;

//setting up the screen
var screen = {
  canvas: document.getElementById("mainCanvas"),
  setup: function () {
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext("2d");
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

//setting up the basketball
function Ball(x, y) {
  this.ballimg = document.getElementById("basketball");
  this.x = x;
  this.y = y;
  this.xVel = 0;
  this.yVel = 0;
  this.yAcc = 1;
}

Ball.prototype.draw = function () {
  screen.context.drawImage(this.ballimg, this.x, this.y, 100, 100);
};

Ball.prototype.move = function () {
  this.draw();
  this.x += this.xVel;
  this.y += this.yVel;
  this.yVel -= this.yAcc;
};

Ball.prototype.reset = function () {
  this.x = 40;
  this.y = (3 / 4) * canvas.height - 100;
  this.draw();
};

//setting up the angle pointer
//x=90
//y=3/4 * canvas.height
function Angle(x, y) {
  this.x = x;
  this.y = y;
  this.direction = 1;
}

Angle.prototype.draw = function () {
  ctx = screen.context;
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(90, (6 * canvas.height) / 8 + 70, 70, 0, Math.PI, true);
  ctx.closePath();
  var grd = ctx.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0.3, "orange");
  grd.addColorStop(1, "yellow");
  ctx.lineWidth = 5;
  ctx.fillStyle = grd;
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2.5;
  ctx.moveTo(x, y + 10);
  ctx.lineTo(90, (6 * canvas.height) / 8 + 70);
  ctx.stroke();
};

Angle.prototype.update = function () {
  this.draw();
  if (y > (3 / 4) * height + 50) {
    dir = -1;
  } else if (x < 90) {
    dir = 1;
  }
};
