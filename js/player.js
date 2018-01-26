function Player(ctx) {
    this.x = 400;
    this.y = 700;
    this.image = new Image();
    this.image.src = 'images/player.png';
    this.ctx = ctx;
    this.lives = 5;
}

Player.prototype.update = function () {
    this.x += this.speed;
}

Player.prototype.drawPlayer = function () {
    this.ctx.drawImage(this.image, this.x, this.y, 50, 60);
}

Player.prototype.moveLeft = function () { this.x -= 25 };
Player.prototype.moveRight = function () { this.x += 25 };
