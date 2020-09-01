var backCanvas = document.getElementById("backCanvas");
var backctx = backCanvas.getContext("2d");
backCanvas.width = window.innerWidth;
backCanvas.height = window.innerHeight;
//backCanvax.width = window.innerWidth;
//ckCanvax.height = window.innerHeight;

//draw circle
backctx.beginPath();
backctx.fillStyle = "07689f";
backctx.fill();
backctx.translate(backCanvas.width / 1.8, (2 * backCanvas.height) / 3);
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
backctx.lineWidth = 8;
backctx.strokeStyle = "#2d4059";
backctx.stroke();

backctx.beginPath();
backctx.moveTo(733, -300);
backctx.lineTo(690, -300);
backctx.lineWidth = 8;
backctx.strokeStyle = "#2d4059";
backctx.stroke();

backctx.beginPath();
backctx.moveTo(690, -400);
backctx.lineTo(690, -250);
backctx.lineWidth = 8;
backctx.strokeStyle = "#2d4059";
backctx.stroke();

backctx.beginPath();
backctx.moveTo(688, -300);
backctx.lineTo(570, -300);
backctx.lineWidth = 9;
backctx.strokeStyle = "orange";
backctx.stroke();
