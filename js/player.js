function Player(ctx) {
    this.x = 500;
    this.y = 600;
    this.image = new Image();
    this.image.src = 'images/player.png';
    this.ctx = ctx;
}

Player.prototype.update = function () {
    this.x += this.speed;
}

Player.prototype.drawPlayer = function () {
    this.ctx.drawImage(this.image, this.x, this.y, 50, 60);
}