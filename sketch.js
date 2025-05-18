let movingNpc;
let enemy;
let player;
let bushes;
let grid;
let treasures;
let cutters;
let exit;

const START = 0;
const PLAYING = 1;
const WIN = 2;
const DIED = 3;
let state = START;

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
    createCutters();
    addCutters();
    createExit();
    addExit();
}

function draw() {
    background(255);
    enemy.draw(); 
    movingNpc.show();
    movingNpc.step();
    player.draw();
    drawBushes();
    drawTreasure();
    drawCutters();
    drawExit();
    if (keyIsPressed) {
    movePlayer();
    }
}

function movePlayer() {
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

    if (keyIsDown(SHIFT)){
        player.setXSpeed(10);
        player.setYSpeed(10);
    }
    else {
        player.setXSpeed(5);
        player.setYSpeed(5);
    }
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
        new Bush(100, 850, 50, 100),
        // Bottom right section
        new Bush(750, 750, 100, 50),
        new Bush(850, 700, 50, 300),
        new Bush(700, 850, 100, 50),
        new Bush(700, 950, 50, 50),
        new Bush(800, 850, 50, 100),
        // Center obstacles
        new Bush(400, 400, 200, 50),
        new Bush(400, 500, 50, 100),
        new Bush(550, 400, 50, 200)
    ];
}

function createTreasures(){
    treasures = [
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

function createCutters(){
    cutters = [new Cutter(300, 300, 25, 25)];
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

function addCutters(){
    for(const cutter of cutters){
        grid.addToGrid(cutter);
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

function drawCutters(){
    for(const cutter of cutters){
        cutter.draw();
    }
}

function drawExit() {
    exit.draw();
}