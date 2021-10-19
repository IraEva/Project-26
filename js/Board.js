class Board {
    constructor(x, y, width, height) {
    var opitions = {
        isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, opitions);

    this.width = width;
    this.heigth = heigth;
    this.image = loadImage ("./assets/board.png");

    World.add (world, this.body);
}

display(){
    var pos = this.body.podition;
    push();
    imageMode(CENTRE);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
    }
















