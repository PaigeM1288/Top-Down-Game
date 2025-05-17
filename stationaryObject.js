class StationaryObject extends GameObject{
    #solid;
    #colour;

    /**
     * creates obstacle
     * @param {number} x x coordinate 
     * @param {number} y y coordinate
     * @param {number} w width of obstacle
     * @param {number} h height of obstacle
     * @param {boolean} solid if the obstacle is solid or not
     * @param {Color} colour colour of the obstacle
     */

    constructor(x, y, w, h, solid, colour){
        super(x, y, w, h);
        this.#solid = solid;
        this.#colour = colour;
    }

    /**
     * checks if the obstacle is solid
     * @returns {boolean}
     */
    isSolid(){
        return this.#solid;
    }

    /**
     * draws the obstacle
     * @override
     */
    draw(){
        noStroke();
        fill(this.#colour);
        rect(this.getX(), this.getY(), this.getWidth(), this.getHeight());
    }
}

class Bush extends StationaryObject{
    /**
     * creates a new obstacle called "Bush" for game purposes
     * @param {number} x x coordinate
     * @param {number} y y coordinate
     * @param {number} w width of bush
     * @param {number} h height of bush
     */

    constructor(x, y, w, h){
        super(x, y, w, h, 1, color(110, 255, 10));
    }
}

class Treasure extends StationaryObject{
    /**
     * creates new object called treasure
     * @param {number} x x coordinate
     * @param {number} y y coordinate
     * @param {number} w width of treasure
     * @param {number} h height of treasure
     */

    constructor(x, y, w, h){
        super(x, y, w, h, 0, color(255, 204, 0));
    }
}

class Cutter extends StationaryObject{
    /**
     * creates new object called cutter
     * @param {number} x x coordinate
     * @param {number} y y coordinate
     * @param {number} w width of cutter
     * @param {number} h height of cutter
     */

    constructor(x, y, w, h){
        super(x, y, w, h, 0, color(100));
    }
}

class Exit extends StationaryObject{
    /**
     * creates an exit point for player
     *@param {number} x x coordinate
     * @param {number} y y coordinate
     * @param {number} w width of exit
     * @param {number} h height of exit
     */

     constructor(x, y, w, h){
        super(x, y, w, h, 1, color(150));
     }
}