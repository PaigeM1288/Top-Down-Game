class Player extends GameObject {
    #xSpeed = 0;
    #ySpeed = 0;
    #colour;
    static DIED = "died";
    static ALIVE = "alive";
    static ESCAPED = "escaped";
    #state;

    /**
     * creates user controlled Player on the screen
     * @param{number} x
     * @param{number} y
     * @param{number} w
     * @param{number} h
     * @param{number} x speed
     * @param{number} y speed
     * @param{string} colour
     *
     * @returns {Player}
     */

    constructor(x, y, w, h, xSpeed, ySpeed, colour) {
        super(x, y, w, h);
        this.#xSpeed = xSpeed;
        this.#ySpeed = ySpeed;
        this.#colour = colour;
        this.reset();
    }

    /**
     * resets the player to their spawn location
     */
    reset(){
        this.setX(width/2);
        this.setY(height/2);
        this.#state = Player.ALIVE;
    }

    /**
     * move the player
     */
    move() {
        if(this.#state === Player.ALIVE){
        this.setX(this.getX() + this.#xSpeed);
        this.setY(this.getY() + this.#ySpeed);
        } else if(this.getX() == exit && this.getY() == exit){
            this.#state = Player.ESCAPED;
        } else if(this.getX() == Enemy && this.getY() == Enemy){
            this.#state = Player.DIED;
        }

        return this.#state;
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
        fill(this.#colour);
        square(this.getX(), this.getY(), this.getWidth(), this.getHeight());
    }

    getXSpeed(){
        return this.#xSpeed;
    }

    getYSpeed(){
        return this.#ySpeed;
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