function Bug(ctx, x, y) {
    this.x = x;
    this.y = y;
    this.speed = 3 + Math.floor(Math.random() * 3);
    this.ctx = ctx;

    var bugClass = ["ant", "butterfly", "cockroach"];
    var value = Math.floor(Math.random() * bugClass.length);
    this.image = new Image();
    this.image.src = 'images/' + bugClass[value] + '.png';
}

Bug.prototype.update = function () {
    this.y += this.speed;
}


Bug.prototype.draw = function () {
    this.ctx.drawImage(this.image, this.x, this.y, 50, 60);
}
