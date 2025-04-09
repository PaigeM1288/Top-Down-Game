
let npc;
let enemy;
let player;

function setup() {
    createCanvas(1000, 1000);
    npc = new Npc(3); // Create an NPC with a speed of 3
    enemy = new Enemy(5); // Create an enemy with a speed of 5
    player = new Player; 
}


function draw() { 
    npc.draw(); 
    player.draw();
    enemy.draw();  // Draw the enemy (it moves left and right)
}
