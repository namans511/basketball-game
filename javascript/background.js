var backCanvas = document.getElementById("backCanvas");
var backctx = backCanvas.getContext("2d");
backCanvas.width = window.innerWidth;
backCanvas.height = window.innerHeight;

//draw circle
backctx.translate(backCanvas.width / 2, (2 * backCanvas.height) / 3);
backctx.arc(0, 0, 100, 0, 2 * Math.PI);
backctx.stroke();

//draw line through circle
backctx.moveTo(0, 100);
backctx.lineTo(0, -100);
backctx.stroke();

//draw horizontal lines
backctx.moveTo(0, 100);
backctx.lineTo(400, 100);
backctx.stroke();
backctx.moveTo(0, -100);
backctx.lineTo(400, -100);
backctx.stroke();
