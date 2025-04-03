class Player {
    #x;
    #y;
    #xSpeed = 0;
    #ySpeed = 0;

    /**
     * creates user controlled Player on the screen
     */

    constructor() {
        this.reset();
    }

    /**
     * resets the player to their spawn location
     */
    reset(){
        this.#x = windowWidth/2;
        this.#y = windowHeight/2;
    }

    /**
     * move the player/ switch screen
     */
    movePlayer() {
        this.#x += this.#xSpeed;
        if (this.#x > width) {
            screenTwo();
        }

        this.#y += this.#ySpeed;
    }


    /**
     * Change the player's speed
     * @param {number} newSpeed 
     */
    setXSpeed(newSpeed) {
        this.#xSpeed = newSpeed;
    }

    setYSpeed(newSpeed) {
        this.#ySpeed = newSpeed;
    }


    /**
     * Draw player before sprites
     */
    draw() {
        fill(255, 0, 0);
        square(this.#x, this.#y, 50);
    }
}