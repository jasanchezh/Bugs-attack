function Bug(type, x, y, width, heigth) {
    this.type = type;
    this.x = 0;
    this.y = y;
    this.width = width;
    this.heigth = heigth;
    
    // Add random image to dom 
    var bugClass = ["butterfly", "bug", "cockroach"]
    var value = Math.floor(Math.random()*3);
    this.el = $('<img>').attr('src','images/' + bugClass[value] + '.png');
    $('#game').append(this.el);
}
