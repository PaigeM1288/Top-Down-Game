
let movingNpc;
let staticNpc;
let enemy;
//let player;

function setup() {
    createCanvas(windowWidth, windowHeight);
    movingNpc = new Movingnpc();
    enemy = new Enemy(5); // Create an enemy with a speed of 5
    //player = new Player();
}


function draw() {
    background(255);
    enemy.draw(); 
    movingNpc.show();
    movingNpc.step();
   /* player.draw();
    if (keyIsPressed){
        movePlayer();
    }*/
}
