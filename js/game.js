/*window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

function startGame(){
var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');
var background = new Image();
  background.src = 'images/background.png';
  ctx.drawImage(bg, 0, 0,1000,800);
  var bug = new Image();
  bug.src = 'images/bug.png';
  ctx.drawImage(bg, 0, 0,1000,800);
    }

function draw() {
  ctx.beginPath();
  ctx.bug(50, 50, 10, 0, Math.PI*2);
  ctx.closePath();
}
setInterval(draw, 10);
};*/

	$(document).ready(function(){
		$("#mostrar").on( "click", function() {
			$('.butterfly').show(); //muestro mediante clase
		 });
		$("#ocultar").on( "click", function() {
			$('.butterfly').hide(); //muestro mediante clase
		});
	});