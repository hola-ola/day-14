
const game = new Game();

function draw() {
    game.draw();
}

function preload() {
    pictureVariable = loadImage("./pizza.png")
    otherPicture = loadImage("./plate.png")
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
}




function keyPressed() {
    game.keyPressed();
}