var game
$(document).ready(function () {
  $("#start").on("click", function () {
    game = new Game()
    start();
  })

  setInterval(function () {
    game.bug1.update();
  }, 10);
});


