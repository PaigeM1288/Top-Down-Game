
let npc;
let enemy;

function setup() {
    createCanvas(1000, 1000);
    npc = new Npc(0.5); // Create an NPC with a speed of 2
    enemy = new Enemy(2); // Create an enemy with a speed of 2
}


function draw() {  
    npc.draw();
    enemy.draw(); // Draw the enemy (it moves left and right)
}