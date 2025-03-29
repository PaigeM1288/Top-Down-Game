// Game state variables
const START = 0;
const PLAYING = 1;
const WIN = 2;
const DIED = 3;
// Set the start state
let state = START;

// The JSDoc on the next line enables auto completion
/** @type {Player} */
let thePlayer;

function setup() {
    createCanvas(windowWidth, windowHeight);
    thePlayer = new Player();
}

function draw() {
    background(255);
    switch (state) {
        case PLAYING:
            thePlayer.draw();
            thePlayer.move();
            break;
        default:
            break;
    }
}

function keyPressed() {
    switch(keyCode) {
        case LEFT_ARROW:
            thePlayer.setXSpeed(-5);
            break;
        case RIGHT_ARROW:
            thePlayer.setXSpeed(5);
            break;
        case UP_ARROW:
            thePlayer.setYSpeed(-5);
            break;
        case DOWN_ARROW:
            thePlayer.setYSpeed(5);
            break;
        case ENTER:
            if(state === START){
                state = PLAYING;
            } else if (state === DIED){
                state = PLAYING;
                thePlayer.reset();
            } else if (state === WIN){
                state = PLAYING;
                thePlayer.reset();
            }
            console.log("Enter pressed");
            break;
    }
}


function keyReleased() {
    switch(keyCode) {
        case LEFT_ARROW:
        case RIGHT_ARROW:
            thePlayer.setXSpeed(0);
            break;
        case UP_ARROW:
        case DOWN_ARROW:
            thePlayer.setYSpeed(0);
    }
}