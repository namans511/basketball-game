var backCanvas = document.getElementById("backCanvas");
var backctx = backCanvas.getContext("2d");
backCanvas.width = window.innerWidth;
backCanvas.height = window.innerHeight;
//backCanvax.width = window.innerWidth;
//ckCanvax.height = window.innerHeight;

//draw circle
backctx.translate(backCanvas.width / 1.6, (2 * backCanvas.height) / 3);
backctx.arc(0, 0, 100, 0, 2 * Math.PI);
backctx.stroke();

//draw line through circle
backctx.moveTo(0, 100);
backctx.lineTo(0, -100);
backctx.lineWidth=2.5;
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
 backctx.translate(-300, 0);
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
