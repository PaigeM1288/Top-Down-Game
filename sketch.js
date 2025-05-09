let movingNpc;
let enemy;
let player;

function setup() {
    createCanvas(windowWidth, windowHeight);
    movingNpc = new Movingnpc();
    enemy = new Enemy(5); // Create an enemy with a speed of 5
    player = new Player(width/2, height/2, 75, 75, 5, 5, color(0, 0, 255)); // Create player with a 75x 75 size, a speed of 5 and in the colour blue
}

function draw() {
    background(255);
    enemy.draw(); 
    movingNpc.show();
    movingNpc.step();
    player.draw();
    movePlayer();
}

function movePlayer() {
    if (keyIsPressed) {
        switch(key.toLowerCase()) {
            case 'w':
                player.moveUp();
                break;
            case 'a':
                player.moveLeft();
                break;
            case 's':
                player.moveDown();
                break;
            case 'd':
                player.moveRight();
                break;
        }
    }

    if (keyIsDown(SHIFT)){
        player.setXSpeed(10);
        player.setYSpeed(10);
    }
    else {
        player.setXSpeed(5);
        player.setYSpeed(5);
    }
}
