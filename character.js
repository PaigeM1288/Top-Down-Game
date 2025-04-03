class Character{
    #x;
    #y;
    #npcXSpeed;
    #npcYSpeed;
    #colour;
    #name;

    constructor(x, y, colour, name){
        this.#x = x;
        this.#y = y;
        this.#npcXSpeed = 0;
        this.#npcYSpeed = 0;
        this.#colour = colour;
        this.#name = name;
    }

    draw(){
        rectMode(CENTER);
        fill(this.#colour);
        square(this.#x, this.#y, 50);
        text(this.#name, this.#x, this.#y);
    }

    getX(){
        return this.#x;
    }

    getY(){
        return this.#y;
    }

    /**
     * moves non playable characters
     */

    moveNpc(){
        this.#x += this.#npcXSpeed;
        this.#y += this.#npcYSpeed;
    }

    setNpcXSpeed(newNpcSpeed){
        this.#npcXSpeed = newNpcSpeed;
    }

    setNpcYSpeed(newNpcSpeed){
        this.#npcYSpeed = newNpcSpeed;
    }

    class Enemy extends Character {

        #MOVE_RIGHT = 1;
        #MOVE_LEFT = 2;
        #MOVE_UP = 3;
        #MOVE_DOWN = 4;
        static #SIZE = 50;
        #speed;
        #state;
        constructor(speed) {
            
        }
    }
}