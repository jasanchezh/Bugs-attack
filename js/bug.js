function Bug(type, x, y, width, heigth) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = heigth;
    this.speedY = 1
    
    // Add random image to dom 
    var bugClass = ["butterfly", "bug", "cockroach"]
    var value = Math.floor(Math.random()*3);
    this.el = $('<img>').attr('src','images/' + bugClass[value] + '.png');
    $('#game').append(this.el);
}

Bug.prototype.update = function(){
    this.y += (this.speedY * 10);
    // if(this.x >= $("#board").width() || this.x <= 0){
    //   this.speedX *= -1;
    // }
    /*if(this.y >= $("#game").height() || this.y <= 0){
      this.speedY *= -1;
    };*/
  }