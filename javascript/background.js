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
backctx.fillStyle = "#c87941";
backctx.fillRect(0, innerHeight/2, innerWidth, innerHeight);
backctx.translate(backCanvas.width / 1.8, (2 * backCanvas.height) / 2.8);
backctx.beginPath();
backctx.fillStyle="#87431d";
backctx.arc(0, 0, 100, 0, 2 * Math.PI);
backctx.fill();
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
backctx.fillStyle="#87431d";
backctx.arc(0, 0, 100, 0, 2 * Math.PI);
backctx.fill();
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
backctx.strokeStyle = "#290001";
backctx.stroke();

backctx.beginPath();
backctx.moveTo(733, -360);
backctx.lineTo(690, -360);
backctx.lineCap = "round";
backctx.lineWidth = 8;
backctx.strokeStyle = "#290001";
backctx.stroke();

backctx.beginPath();
backctx.moveTo(733, -300);
backctx.lineTo(690, -300);
backctx.lineCap = "round";
backctx.lineWidth = 8;
backctx.strokeStyle = "#290001";
backctx.stroke();

backctx.beginPath();
backctx.moveTo(690, -400);
backctx.lineTo(690, -250);
backctx.lineCap = "round";
backctx.lineWidth = 8;
backctx.strokeStyle = "#290001";
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

//angle bar

// var x = -416;
// var y = 120;
// var f = 1;
// var angleid = setInterval(angleDraw, 80);

// function angleDraw() {
//   //  requestAnimationFrame(animate);
//   // backctx.clearRect(0,0,innerWidth,innerHeight);

//   //this.direction = -1; // Starts out moving left
//   //start
//   backctx.clearRect(-486, 100, 140, 100);

//   backctx.beginPath();
//   backctx.fillStyle = "green";
//   backctx.fillRect(-486, 100, 140, 110);

//   backctx.beginPath();
//   backctx.strokeStyle = "white";
//   backctx.lineWidth = 2.5;
//   backctx.moveTo(x, y);
//   backctx.lineTo(-416, 180);
//   backctx.stroke();
//   if (x < -370 && f == 1) {
//     x++;
//     y++;
//   }
//   if (x > -375) {
//     f = 2;
//   }
//   if (f == 2) {
//     x--;
//     y--;
//   }
//   if (x < -416) {
//     f = 1;
//   }
// }
//backctx.closePath();
