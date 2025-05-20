let movingNpc;
let enemy;
let player;
let bushes;
let grid;
let treasures;
let exit;
let rocks;

const START = 0;
const PLAYING = 1;
const CAVE = 2;
const DIED = 3;
const SCREEN_TWO = 4;
const WIN = 5;
let state = START;

let amulet;
let grass;
let collected;
let boulder;
let diamondObj;
let shrub;
let caveBg;
let startBg;
let caveCollected;

function preload(){
    grass = loadImage("assets/grass.png");
    amulet = loadImage("assets/Amulet.png");
    collected = loadSound("assets/short-success-sound-glockenspiel-treasure-video-game-6346.mp3");
    boulder = loadImage("assets/rocks.png");
    shrub = loadImage("assets/Bush.png");
    diamondObj = loadImage("assets/diamond.png");
    caveBg = loadImage("assets/Cave.png");
    startBg = loadImage("assets/background.png");
    caveCollected = loadSound("assets/diamond-found-190255_02.mp3");

}

function setup() {
    createCanvas(1000, 1000);
    movingNpc = new Movingnpc(); //creates moving npc
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
    image(grass, 0, 0, 1000, 1000);
    switch(state) {
        case START:
            drawStart();
            break;
        case PLAYING: 
            movingNpc.show();
            movingNpc.step();
            drawTreasure();
            drawExit();
            player.draw();
            drawBushes();
            switch(movePlayer()) {
                case Player.ESCAPED:
                    state = CAVE;
                    break;
                case Player.DIED:
                    state = DIED;
                    break;
            }
            break;
        case CAVE:
            drawCaveScreen();
            break;
        case DIED:
            drawDied();
            break;
        case SCREEN_TWO:
            drawScreenTwo();
            break;
        case WIN:
            drawWin();
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
        if(state === START) {
            state = PLAYING;
        }else{
            player.reset();
        }
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


function drawTextBg(){
    fill(205, 104, 210);
    image(startBg, 0, 0, 1000, 1000)
    textSize(32);
    textAlign(CENTER, CENTER);
}

function drawStart(){
    drawTextBg();
    textSize(20);
    text("Collect all the amulets to open the exit", 500, 450);
    text("Use WASD to move and if you get stuck press Enter", 500, 500);
    text("Hold Shift to go quicker", 500, 550);
    text("Press Enter to start", 500, 600);
}

function drawCaveScreen(){
    drawTextBg();
    text("You have entered the cave, collect the diamonds", 500, 450);
    text("Press C to continue", 500, 500);
    if(key.toLowerCase() === 'c') {
        state = SCREEN_TWO;
        player.reset();
        createRocks();
        addRocks();
        createDiamonds();
        addDiamonds();
    }
}

function createBushes(){
    bushes = [
        // Top left section
        new Bush(50, 50, 50, 50),
        new Bush(150, 0, 50, 50),
        new Bush(0, 150, 50, 50),
        new Bush(0, 250, 50, 50),
        new Bush(100, 250, 50, 50),
        // Top right section
        new Bush(750, 50, 50, 50),
        new Bush(850, 0, 50, 50),
        new Bush(700, 150, 50, 50),
        new Bush(700, 250, 50, 50),
        new Bush(800, 250, 50, 50),
        // Bottom left section
        new Bush(50, 750, 50, 50),
        new Bush(150, 700, 50, 50),
        new Bush(0, 850, 50, 50),
        new Bush(0, 950, 50, 50),
        new Bush(500, 950, 50, 50),
        // Bottom right section
        new Bush(750, 750, 50, 50),
        new Bush(850, 700, 50, 50),
        new Bush(700, 850, 50, 50),
        new Bush(700, 950, 50, 50),
        new Bush(800, 850, 50, 50),
        new Bush(650, 700, 50, 50),
        // Center obstacles
        new Bush(400, 300, 50, 50),
        new Bush(400, 550, 50, 50),
        new Bush(550, 400, 50, 50)
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
        new Treasure(500, 600, 50, 50),
        // Bottom section
        new Treasure(200, 800, 50, 50),
        new Treasure(800, 800, 50, 50),
        new Treasure(500, 850, 50, 50),
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

function drawScreenTwo() {
    background(210);
    image(caveBg, 0, 0, 1000, 1000)
    movePlayerTwo();
    drawDiamonds();
    enemy.draw();
    player.draw();
    drawRocks();
    
}

function movePlayerTwo() {
    let newX, newY;
    switch(key.toLowerCase()) {
        case 'w':
            newY = player.getY() - player.getYSpeed();
            if(!grid.isOccupied(player.getX(), newY) && !grid.isOccupied(player.getX() + player.getWidth(), newY)) {
                player.moveUp();
            }
            break;
        case 'a':
            newX = player.getX() - player.getXSpeed();
            if(!grid.isOccupied(newX, player.getY()) && !grid.isOccupied(newX, player.getY() + player.getHeight())) {
                player.moveLeft();
            }
            break;
        case 's':
            newY = player.getY() + player.getYSpeed() + player.getHeight();
            if(!grid.isOccupied(player.getX(), newY) && !grid.isOccupied(player.getX() + player.getWidth(), newY)) {
                player.moveDown();
            }
            break;
        case 'd':
            newX = player.getX() + player.getXSpeed() + player.getWidth();
            if(!grid.isOccupied(newX, player.getY()) && !grid.isOccupied(newX, player.getY() + player.getHeight())) {
                player.moveRight();
            }
            break;
    }

    for(let i = diamonds.length - 1; i >= 0; i--) {
        const diamond = diamonds[i];
        if(player.getX() < diamond.getX() + diamond.getWidth() && player.getX() + player.getWidth() > diamond.getX() &&
           player.getY() < diamond.getY() + diamond.getHeight() &&
           player.getY() + player.getHeight() > diamond.getY()) {
            diamonds.splice(i, 1);
            caveCollected.play();
            
            // Check if all diamonds are collected
            if(diamonds.length === 0) {
                state = WIN;
            }
        }
    }
}

function createRocks() {
    rocks = [
        // Top section
        new Rock(100, 100, 50, 50),
        new Rock(200, 150, 50, 50),
        new Rock(300, 100, 50, 50),
        new Rock(400, 200, 50, 50),
        new Rock(500, 150, 50, 50),
        new Rock(600, 100, 50, 50),
        new Rock(700, 200, 50, 50),
        
        // Middle section
        new Rock(350, 350, 50, 50),
        new Rock(450, 300, 50, 50),
        new Rock(550, 400, 50, 50),
        new Rock(650, 350, 50, 50),
        new Rock(750, 300, 50, 50),
        
        // Bottom section
        new Rock(100, 600, 50, 50),
        new Rock(200, 650, 50, 50),
        new Rock(600, 650, 50, 50),
        new Rock(700, 700, 50, 50),
        new Rock(900, 650, 50, 50),
        
        // Center rocks
        new Rock(150, 500, 50, 50),
        new Rock(450, 500, 50, 50),
        new Rock(750, 800, 50, 50),
        
        // Vertical barriers
        new Rock(400, 100, 50, 50),
        new Rock(600, 100, 50, 50),
        new Rock(400, 700, 50, 50),
        new Rock(600, 700, 50, 50)
    ];
}

function addRocks(){
    for(const rock of rocks){
        grid.addToGrid(rock);
    }
}

function drawRocks(){
    for(const rock of rocks){
        rock.draw();
    }
}

function createDiamonds(){
    diamonds = [
        new Diamond(800, 500, 50, 50),
        new Diamond(300, 550, 50, 50),
        new Diamond(550, 900, 50, 50),
        new Diamond(100, 900, 50, 50),
        new Diamond(200, 700, 50, 50),
        new Diamond(250, 500, 50, 50),
        new Diamond(850, 600, 50, 50),
        new Diamond(800, 200, 50, 50),
        new Diamond(450, 800, 50, 50),
        new Diamond(10, 500, 50, 50),
        new Diamond(900, 10, 50, 50)

    ];
}

function addDiamonds(){
    for(const diamond of diamonds){
        grid.addToGrid(diamond);
    }
}

function drawDiamonds(){
    for(const diamond of diamonds){
        diamond.draw();
    }
}

function drawWin() {
    drawTextBg();
    textSize(32);
    text("Congratulations! You've collected all the diamonds!", 500, 450);
    text("Press R to play again", 500, 500);
    
    if(key.toLowerCase() === 'r') {
        state = START;
        player.reset();
        createTreasures();
    }
}