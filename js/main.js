$(document).ready(function(){
    var game = new Game();
    window.requestAnimationFrame(update);
    function update(){
        game.update();
        window.requestAnimationFrame(update);
    }
});