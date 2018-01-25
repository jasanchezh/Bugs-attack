$(document).ready(function(){
    var game = new Game();
    window.requestAnimationFrame(update);
    function update(){
        game.update();
        window.requestAnimationFrame(update);
    }

    document.onkeydown = function(e) {
        switch (e.keyCode) {
          case 37: game.player1.moveLeft();  console.log('left',  player); break;
          case 39: game.player1.moveRight(); console.log('right', player); break;
        }
      }
});