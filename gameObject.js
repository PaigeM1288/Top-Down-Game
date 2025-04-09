class GameObject{
    #x;
    #y;
    #w;
    #h;

    /**
     * creates a game object on the screen
    * @param {number} x = x position of the object
    * @param {number} y = y position of the object
    * @param {number} w = width of the object
    * @param {number} h = height of the object
    */
    constructor(x, y, w, h){
        this.#x = x;
        this.#y = y;
        this.#w = w;
        this.#h = h;
    }

    /**
     * get the x position of the object
     * @returns {number} x position of the object
     */
    getX(){
        return this.#x;
    }
    /**
     * sets the x coordinate
     * @param {number} newX
     */
    setX(newX){
        this.#x = newX;
    }

    /**
     * get y position of object
     * @returns {number} y position of the object
     */
    getY(){
        return this.#y;
    }
    
    /**
     * Sets the y coordinate
     * @param {number} newY 
     */
    setY(newY) {
        this.#y = newY;
    }

    /**
     * get width of object
     * @returns {number} width of object
    */
   getWidth(){
        return this.#w;
   }

   /**
    * get height of object
    * @returns {number} height of object
    */

    getHeight(){
        return this.#h;
    }
    
}