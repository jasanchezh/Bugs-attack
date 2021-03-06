function Game() {
    var canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.bugs = [];
    var that = this;
    this.player1 = new Player(this.ctx);
    setInterval(function () {
        that.createBug();
    }, 3000);
}

Game.prototype.createBug = function () {
    var x_pos = Math.floor(Math.random() * 922);
    this.bugs.push(new Bug(this.ctx, x_pos, 10));
}


Game.prototype.update = function () {
    this.ctx.clearRect(0, 0, 1000, 920);

    this.image2 = new Image();
    this.image2.src = 'images/bg.png';
    this.ctx.drawImage(this.image2,0,0);
    this.bugs.forEach(function (bug) {
        bug.update();
        bug.draw();
    })
    this.player1.drawPlayer();
}

Game.prototype.checkCollision = function (player, bug) {
    if (bug.x > player1.x + player1.width && bug.y < player1.y + player1.height) { player1.lives--; }
    if (player1.lives < 1) { prompt("Game Over") }
    return player1.lives;
}