
let npc;
let enemy;
//let player;

function setup() {
    createCanvas(1000, 1000);
    npc = new Npc(3); // Create an NPC with a speed of 3
    enemy = new Enemy(5); // Create an enemy with a speed of 5
    //player = new Player(); 
}


function draw() {
    background(255);
    enemy.draw(); 
    npc.draw(); 
   /* player.draw();
    if (keyIsPressed){
        movePlayer();
    }*/
}

//function movePlayer(){

//}
