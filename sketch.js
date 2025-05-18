let movingNpc;
let enemy;
let player;
let bushes;
let grid;
let treasures;
let exit;

const START = 0;
const PLAYING = 1;
const WIN = 2;
const DIED = 3;
let state = START;

let amulet;
let bg;
let collected;

function preload(){
    bg = loadImage("assets/background.png");
    amulet = loadImage("assets/Amulet.png");
    collected = loadSound("assets/short-success-sound-glockenspiel-treasure-video-game-6346.mp3");
}

function setup() {
    createCanvas(1000, 1000);
    movingNpc = new Movingnpc();
    enemy = new Enemy(5); // Create an enemy with a speed of 5
    player = new Player(width/2, height/2, 40, 40, 5, 5, color(0, 0, 255)); // Create player with a 40x 40 size, a speed of 5 and in the colour blue
    createBushes();
    grid = new Grid(100);
    addBushes();
    createTreasures();
    addTreasures();
    createExit();
    addExit();
}

function draw() {
    background(255);
    image(bg, 0, 0, 1000, 1000);
    switch(state){
        case START:
            drawStart();
            break;
        case PLAYING:
            enemy.draw(); 
            movingNpc.show();
            movingNpc.step();
            drawTreasure();
            drawExit();
            player.draw();
            drawBushes();
            switch(movePlayer()){
                case Player.ESCAPED:
                    state = WIN;
                    break;
                case Player.DIED:
                    state = DIED;
                    break;
            }
        break;
    case WIN:
        drawWin();
        break
    case DIED:
        drawDied();
        break;
    }

}

    function movePlayer(){
    let newX, newY;
    switch(key.toLowerCase()) {
        case 'w':
            newY = player.getY() - player.getYSpeed();
            if(!grid.isOccupied(player.getX(), newY) && !grid.isOccupied(player.getX() + player.getWidth(), newY)){
                player.moveUp();
            }
            break;
        case 'a':
            newX = player.getX() - player.getXSpeed();
            if(!grid.isOccupied(newX, player.getY()) && !grid.isOccupied(newX, player.getY() + player.getHeight())){
                player.moveLeft();
            }
            break;
        case 's':
            newY = player.getY() + player.getYSpeed() + player.getHeight();
            if(!grid.isOccupied(player.getX(), newY) && !grid.isOccupied(player.getX() + player.getWidth(), newY)){
                player.moveDown();
            }
            break;
        case 'd':
            newX = player.getX() + player.getXSpeed() + player.getWidth();
            if(!grid.isOccupied(newX, player.getY()) && !grid.isOccupied(newX, player.getY() + player.getHeight())){
                player.moveRight();
            }
            break;
    }

    // Check for treasure collection
    for(let i = treasures.length - 1; i >= 0; i--) {
        const treasure = treasures[i];
        if(player.getX() < treasure.getX() + treasure.getWidth() && player.getX() + player.getWidth() > treasure.getX() &&
           player.getY() < treasure.getY() + treasure.getHeight() &&
           player.getY() + player.getHeight() > treasure.getY()) {
            treasures.splice(i, 1);
            collected.play();
        }
    }

    // Check for collision with exit
    if(player.getX() + player.getWidth() > exit.getX() && player.getY() + player.getHeight() > exit.getY()){
        return Player.ESCAPED;
    }

}

function keyPressed(){
    switch(keyCode){
    case SHIFT:
        player.setXSpeed(10);
        player.setYSpeed(10);
        break;

    case ENTER:
        case START:
        case WIN:
        case DIED:
            player.reset();
            state = PLAYING;
            break;
    }
}

function keyReleased(){
    switch(keyCode){
        case SHIFT:
            player.setXSpeed(5);
            player.setYSpeed(5);
            break;
    }
}


function drawSceneBackground(){
    fill(205, 104, 210);
    textSize(32);
    textAlign(CENTER, CENTER);
}

function drawStart(){
    drawSceneBackground();
    textSize(20);
    text("Collect all the amulets to open the exit", 500, 450);
    text("Press Enter to start", 500, 500);
}

function drawWin(){
    drawSceneBackground();
    text("You win!", 500, 450);
    text("Press Enter to play again", 500, 500);
}

function drawDied() {
    drawSceneBackground();
    text("You died", 500, 450);
    text("Press Enter to play again", 500, 500);
}

function createBushes(){
    bushes = [
        // Top left section
        new Bush(50, 50, 100, 50),
        new Bush(150, 0, 50, 300),
        new Bush(0, 150, 100, 50),
        new Bush(0, 250, 50, 50),
        new Bush(100, 250, 50, 100),
        // Top right section
        new Bush(750, 50, 100, 50),
        new Bush(850, 0, 50, 300),
        new Bush(700, 150, 100, 50),
        new Bush(700, 250, 50, 50),
        new Bush(800, 250, 50, 100),
        // Bottom left section
        new Bush(50, 750, 100, 50),
        new Bush(150, 700, 50, 300),
        new Bush(0, 850, 100, 50),
        new Bush(0, 950, 50, 50),
        // Bottom right section
        new Bush(750, 750, 100, 50),
        new Bush(850, 700, 50, 300),
        new Bush(700, 850, 100, 50),
        new Bush(700, 950, 50, 50),
        new Bush(800, 850, 50, 100),
        new Bush(650, 700, 50, 50),
        // Center obstacles
        new Bush(400, 400, 200, 50),
        new Bush(400, 500, 50, 100),
        new Bush(550, 400, 50, 200)
    ];
}

function createTreasures(){
    treasures =[
        // Top section
        new Treasure(200, 100, 50, 50),
        new Treasure(800, 100, 50, 50),
        // Middle section
        new Treasure(400, 400, 50, 50),
        new Treasure(600, 400, 50, 50),
        // Bottom section
        new Treasure(200, 800, 50, 50),
        new Treasure(800, 800, 50, 50),
        // Side treasures
        new Treasure(100, 500, 50, 50),
        new Treasure(900, 500, 50, 50)
    ];
}

function createExit() {
    exit = new Exit(900, 950, 50, 50); // Create exit in bottom right corner
}

function addBushes(){
    for(const bush of bushes){
        grid.addToGrid(bush);
    }
}

function addTreasures(){
    for(const treasure of treasures){
        grid.addToGrid(treasure);
    }
}

function addExit() {
    grid.addToGrid(exit);
}

function drawBushes(){
    for(const bush of bushes){
        bush.draw();
    }
}

function drawTreasure(){
    for(const treasure of treasures){
        treasure.draw();
    }
}

function drawExit() {
    exit.draw();
}