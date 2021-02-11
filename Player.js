class Player {
    constructor(startingX, startingY) {
        this.x = startingY;
        this.y = startingY;
        this.width = WIDTH / 10;
        this.height = HEIGHT / 10;
    }

    draw() {
        image(pictureVariable, this.x, this.y, this.width, this.height);
    }

    moveUp() {
        this.y -= HEIGHT / 20;
        if (this.y < 0) {
            this.y = 0;
        }
    }

    moveLeft() {
        this.x -= WIDTH/ 20;
        if (this.x < 0) {
            this.x = 0;
        }
    }

    moveDown() {
        this.y += HEIGHT / 20;
        if (this.y > HEIGHT - this.height) {
            this.y = HEIGHT - this.height;
        }
    }

    moveRight() {
        this.x += WIDTH / 20;
        if (this.x > WIDTH - this.width) {
            this.x = WIDTH - this.width;
        }
    }
}