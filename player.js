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
     * move the player
     */
    move() {
        this.#x += this.#xSpeed;
        if (this.#x < 0) {
            console.log("You died :(");
            state = DIED;
        } else if (this.#x > width) {
            state = WIN;
            console.log("You win!");
        }

        this.#y += this.#ySpeed;
        if (this.#y < 0) {
            console.log("You died");
            state = DIED;
        } else if (this.#y > height) {
            console.log("You died");
            state = DIED;
        }
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
     * Draw the player
     */
    draw() {
        fill(255, 0, 0);
        square(this.#x, this.#y, 50);
    }
}