
let npc;
let enemy;
//let player;

function setup() {
    createCanvas(1000, 1000);
    npc = new Npc(); // Create an NPC with a speed of 3
    enemy = new Enemy(5); // Create an enemy with a speed of 5
    //player = new Player();
}


function draw() {
    background(255);
    enemy.draw(); 
    npc.show();
    npc.step();
   /* player.draw();
    if (keyIsPressed){
        movePlayer();
    }*/
}

class Npc{
    constructor(){
        this.tx = 10;
        this.ty = 100;
    }

    step(){
        this.x = map(noise(this.tx), 0, 1, 5, width);
        this.y = map(noise(this.ty), 0, 1, 1, height);

        this.tx += 0.001;
        this.ty += 0.001;
    }

    show(){
        rectMode(CENTER);
        fill(255, 0, 0);
        square(this.x, this.y, 50);
    }
}
