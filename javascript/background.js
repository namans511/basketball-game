var backCanvas = document.getElementById("backCanvas");
var backctx = backCanvas.getContext("2d");
backCanvas.width = window.innerWidth;
backCanvas.height = window.innerHeight;
//backCanvax.width = window.innerWidth;
//ckCanvax.height = window.innerHeight;

//draw circle
backctx.beginPath();
//backctx.fillStyle='#a4b494';
//backctx.fill();

/////////////////////////////////
//BACKGROUND FILL
backctx.fillStyle = "#838383";
backctx.fillRect(1, 280, innerWidth, innerHeight);
///////////////////////////////

//anglebackground
backctx.beginPath();
angleBackgroundDraw(backctx);
// backctx.beginPath();
// backctx.arc(90, (6 * window.height) / 8 + 70, 70, 0, Math.PI, true);
// backctx.closePath();
// var grd = backctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0.3, "orange");
// grd.addColorStop(1, "yellow");
// backctx.lineWidth = 5;
// backctx.fillStyle = grd;
// backctx.fill();
// backctx.strokeStyle = "black";
// backctx.stroke();

backctx.beginPath();
backctx.translate(backCanvas.width / 1.8, (2 * backCanvas.height) / 2.8);
backctx.arc(0, 0, 100, 0, 2 * Math.PI);
backctx.stroke();

//draw line through circle
backctx.moveTo(0, 100);
backctx.lineTo(0, -100);
backctx.lineWidth = 2.5;
backctx.stroke();

//draw horizontal lines
backctx.moveTo(0, 100);
backctx.lineTo(350, 100);
backctx.stroke();
backctx.moveTo(0, -100);
backctx.lineTo(350, -100);
backctx.stroke();

//another symmetrical

//draw circle
backctx.beginPath();
backctx.translate(-240, 0);
backctx.arc(0, 0, 100, 0, 2 * Math.PI);
backctx.stroke();

//draw line through circle
backctx.moveTo(0, 100);
backctx.lineTo(0, -100);
backctx.stroke();

//draw horizontal lines
backctx.moveTo(0, 100);
backctx.lineTo(-350, 100);
backctx.stroke();
backctx.moveTo(0, -100);
backctx.lineTo(-350, -100);
backctx.stroke();

//pole
backctx.beginPath();
backctx.fillStyle = "red";
backctx.fillRect(660, 0, 150, 200);
backctx.fillStyle = "gray";
backctx.moveTo(733, 0);
backctx.lineTo(733, -400);
backctx.lineWidth = 15;
backctx.strokeStyle = "#2d4059";
backctx.stroke();

backctx.beginPath();
backctx.moveTo(733, -360);
backctx.lineTo(690, -360);
backctx.lineCap = "round";
backctx.lineWidth = 8;
backctx.strokeStyle = "#2d4059";
backctx.stroke();

backctx.beginPath();
backctx.moveTo(733, -300);
backctx.lineTo(690, -300);
backctx.lineCap = "round";
backctx.lineWidth = 8;
backctx.strokeStyle = "#2d4059";
backctx.stroke();

backctx.beginPath();
backctx.moveTo(690, -400);
backctx.lineTo(690, -250);
backctx.lineCap = "round";
backctx.lineWidth = 8;
backctx.strokeStyle = "#2d4059";
backctx.stroke();

backctx.beginPath();
backctx.moveTo(688, -300);
backctx.lineTo(555, -300);
backctx.lineCap = "round";
backctx.lineWidth = 9;
backctx.strokeStyle = "orange";
backctx.stroke();

//net making
var x = 557;
var x1 = 567;
for (var i = 0; i < 5; i++) {
  backctx.beginPath();
  backctx.lineCap = "round";
  backctx.moveTo(x, -300);
  backctx.lineTo(x1, -200);
  backctx.lineWidth = 3;
  backctx.strokeStyle = "white";
  backctx.stroke();
  x = x + 25;
  x1 = x1 + 25;
}

var y = 567;
var y1 = 577;
for (var i = 0; i < 5; i++) {
  backctx.beginPath();
  backctx.lineCap = "round";
  backctx.moveTo(y, -200);
  backctx.lineTo(y1, -300);
  backctx.lineWidth = 3;
  backctx.strokeStyle = "white";
  backctx.stroke();
  y = y + 25;
  y1 = y1 + 25;
}

var x_back = window.width / 1.8 - 240 + 690;
var y_back = (2 / 2.8) * window.height - 400;
var x_hoop = window.width / 1.8 - 240 + 688;
var y_hoop = (2 / 2.8) * window.height - 300;
