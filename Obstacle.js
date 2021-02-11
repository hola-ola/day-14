class Obstacle {
    constructor(xPosition, yPosition) {
        this.x = xPosition;
        this.y = yPosition;
        this.width = WIDTH / 10;
        this.height = HEIGHT / 10;
    }

    draw() {
        push();
        fill("blue");
        image(otherPicture, this.x, this.y, this.width, this.height);
        pop();
    }

    setRandomPosition() {
        this.x = Math.floor(Math.random() * (WIDTH - this.width));
        this.y = Math.floor(Math.random() * (HEIGHT - this.height));
    }
}