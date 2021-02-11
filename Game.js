class Game {
    constructor() {
        this.player = new Player(250, 250);
        this.obstacle = new Obstacle(50, 400);
        this.score = 0;
    }
    
    draw() {
        clear();
        background("brown");
        this.player.draw();
        this.obstacle.draw();
        this.collisionCheck(this.player, this.obstacle);
        if (this.collisionCheck(this.player, this.obstacle)) {
            noLoop();
        const button = document.createElement("button");
        button.innerText = "Yeah, you won! Let's play again!";
        button.style.background = "blue";
        document.body.appendChild(button);
        button.addEventListener("click", () => {
            console.log("Yay! Let's play again!")
            this.obstacle.setRandomPosition();
            button.parentNode.removeChild(button);
            this.score++;
            score.innerText = this.score;
            loop();
        }); 
        }
    }

    collisionCheck(player, obstacle) {
        const playerTopArea = player.y;
        const playerLeftArea = player.x;
        const playerRightArea = player.x + player.width; 
        const playerBottomArea = player.y + player.height;

        const obstacleTopArea = obstacle.y;
        const obstacleLeftArea = obstacle.x;
        const obstacleRightArea = obstacle.x + obstacle.width; 
        const obstacleBottomArea = obstacle.y + obstacle.height;

        const isTouchingOnLeft = obstacleRightArea > playerLeftArea;
        const isTouchingOnBottom = obstacleTopArea < playerBottomArea;
        const isTouchingOnRight = obstacleLeftArea < playerRightArea;
        const isTouchingOnTop = obstacleBottomArea > playerTopArea;
        return (
            isTouchingOnLeft &&
            isTouchingOnBottom &&
            isTouchingOnRight &&
            isTouchingOnTop
        );
    }

    keyPressed() {
        console.log("KEY PRESSED, keyCode");
        if (keyCode === 38) {
            this.player.moveUp();
        }
        if (keyCode === 37) {
            this.player.moveLeft();
        }
        if (keyCode === 40) {
            this.player.moveDown();
        }
        if (keyCode === 39) {
            this.player.moveRight();
        }
    };
};

