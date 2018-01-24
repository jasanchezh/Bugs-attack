function game(level, x, y, width, heigth){
    this.level = level;
    this.x = 0;
    this.y = y;
    this.width = width;
    this.heigth = heigth;
}

game.prototype.generatePosition = function() {
        var positions = [0,200,400,600,800,1000];
        var ruta = Math.floor(Math.random() * (5 - 1) + 1);
        return positions[ruta];}
        