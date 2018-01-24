function Game() {
    this.level = 1;
    this.bug1 = new Bug("bug1", this.generatePath(), 0, 50, 50);
}

Game.prototype.generatePath = function () {
    var positions = [0, 200, 400, 600, 800, 1000];
    var path = Math.floor(Math.random() * (5 - 1) + 1);
    
    return positions[path];
}
