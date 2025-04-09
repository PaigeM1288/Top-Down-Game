class Player extends GameObject {
    #xSpeed = 0;
    #ySpeed = 0;

    /**
     * creates user controlled Player on the screen
     */

    constructor(x, y, w, h, xSpeed, ySpeed) {
        super(x, y, w, h);
        this.reset();
    }

    /**
     * resets the player to their spawn location
     */
    reset(){
        this.#x = width/2;
        this.#y = height/2;
    }

    /**
     * move the player
     */
    move() {
        this.#x += this.#xSpeed;
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
        fill(255, 190, 0);
        square(this.#x, this.#y, 50);
    }
}