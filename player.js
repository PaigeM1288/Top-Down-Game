class Player extends GameObject {
    #xSpeed = 0;
    #ySpeed = 0;

    /**
     * creates user controlled Player on the screen
     * @param{number} x
     * @param{number} y
     * @param{number} w
     * @param{number} h
     * @param{number} x speed
     * @param{number} y speed
     * @returns {Player}
     */

    constructor(x, y, w, h, xSpeed, ySpeed) {
        super(x, y, w, h);
        this.#xSpeed = xSpeed;
        this.#ySpeed = ySpeed;
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
        fill(200, 130, 155);
        rect(super.getX(), super.getY(), super.getWidth(), super.getHeight());
    }

    getXSpeed(){
        return this.#xSpeed;
    }

    getYSpeed(){
        return this.#ySpeed;
    }

    setXSpeed(newXSpeed){
        this.#xSpeed = newXSpeed;
    }

    setYSpeed(newYSpeed){
        this.#ySpeed = newYSpeed;
    }


    moveRight(){
        this.setX(this.getX() + this.#xSpeed);
    }

    moveLeft(){
        this.setX(this.getX() - this.#xSpeed);
    }

    moveUp(){
        this.setY(this.getY() - this.#ySpeed);
    }

    moveDown(){
        this.setY(this.getY() + this.#ySpeed);
    }
}