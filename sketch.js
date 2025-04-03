let enemy, player;

function setup(){
    createCanvas(600, 600);
    enemy = new Enemy(5);
    player = new Player;
}

function draw(){
    enemy.draw();
}