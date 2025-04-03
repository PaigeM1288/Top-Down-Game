class Character{
    #npcX;
    #npcY;
    #npcXSpeed;
    #npcYSpeed;
    #colour;
    #name;

    constructor(npcX, npcY, colour, name){
        this.#npcX = npcX;
        this.#npcY = npcY;
        this.#npcXSpeed = 0;
        this.#npcYSpeed = 0;
        this.#colour = colour;
        this.#name = name;
    }

    draw(){
        rectMode(CENTER);
        fill(this.#colour);
        square(this.#npcX, this.#npcY, 50);
        tenpcXt(this.#name, this.#npcX, this.#npcY);
    }

    getnpcX(){
        return this.#npcX;
    }

    getnpcY(){
        return this.#npcY;
    }

    /**
     * moves non playable characters
     */

    moveNpc(){
        this.#npcX += this.#npcXSpeed;
        this.#npcY += this.#npcYSpeed;
    }

    /**
     * changes speed of NPCs
     * @param {number} newNpcSpeed 
     */
    setNpcXSpeed(newNpcSpeed){
        this.#npcXSpeed = newNpcSpeed;
    }

    setNpcYSpeed(newNpcSpeed){
        this.#npcYSpeed = newNpcSpeed;
    }
}

    class Enemy extends Character {

        #MOVE_RIGHT = 1;
        #MOVE_LEFT = 2;
        #MOVE_UP = 3;
        #MOVE_DOWN = 4;
        static #SIZE = 50;
        #speed;
        #state;
       
        /**
         * creates an enemy that moves at a given speed on its own
         */

        constructor(speed){
            super(Enemy.#SIZE/2, height - Enemy.#SIZE/2, color(100, 200, 120), "Enemy");
            this.#speed = speed;
            this.#state = this.#MOVE_RIGHT;
        }

        draw(){
            super.draw();
            switch(this.#state){
                case this.#MOVE_RIGHT:
                    this.#moveRight();
                    break;
                case this.#MOVE_LEFT:
                    this.#moveLeft();
                    break;
            }
            super.moveNpc()
        }

        #moveRight(){
            this.setNpcXSpeed(this.#speed);
            this.setNpcYSpeed(0);

            //if hit right wall, move left

            if(this.getnpcX() >= width - Enemy.#SIZE/2){
                this.#state = this.#MOVE_LEFT;
            }
        }   

        #moveLeft(){
            this.setNpcXSpeed(-this.#speed);
            this.setNpcYSpeed(0);

            //if hit left wall, move right

            if(this.getnpcX() <= Enemy.#SIZE/2){
                this.#state = this.#MOVE_RIGHT;
            }
        }

    class Npc extends Character{

        MOVE_RIGHT = 1;
        MOVE_LEFT = 2;
        MOVE_UP = 3;
        MOVE_DOWN = 4;
        static SIZE = 50;
        speed;
        state;

        /**
         * creates an NPC that moves randomly at different speeds
         * @param {number} speed
         * @param {number} update
         */
         

        constructor(speed){
            super(Npc.#SIZE/2, height - Npc.SIZE/2, color(225, 64, 90), "NPC");
            this.npcX = random(Npc.SIZE/2, width-Npc.SIZE/2);
            this.npcY = random(Npc.SIZE/2, height-Npc.SIZE/2);
            this.speed = speed;
            this.state = update();
        }

        update(){
            /**
             * has the npc move in random directions
             * @param {number} floor
             */
             
        
              let dir = floor(random(4));

            if(dir === 0){
                this.MOVE_RIGHT;
            }
        }

    }
}