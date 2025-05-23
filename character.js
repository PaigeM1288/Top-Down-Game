class Character{
    #npcX;
    #npcY;
    #npcXSpeed;
    #npcYSpeed;
    #colour;
    #name;
    #size;

    constructor(npcX, npcY, colour, name, size = 10){
        this.#npcX = npcX;
        this.#npcY = npcY;
        this.#npcXSpeed = 0;
        this.#npcYSpeed = 0;
        this.#colour = colour;
        this.#name = name;
        this.#size = size;
    }

    draw(){
        rectMode(CENTER);
        fill(this.#colour);
        square(this.#npcX, this.#npcY, this.#size);
        fill(255);
        textSize(20);
        text("Leave Now!", this.#npcX, this.#npcY);
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
            super(Enemy.#SIZE/2, height - Enemy.#SIZE/2, color(100, 200, 120)," ", 50);
            this.#speed = speed;
            this.#state = this.#MOVE_RIGHT;
        }

        /**
         * @override
         */

        draw(){
                super.draw();
                switch(this.#state){
                    case this.#MOVE_RIGHT:
                        this.#moveRight();
                        break;
                    case this.#MOVE_LEFT:
                        this.#moveLeft();
                        break;
                    case this.#MOVE_UP:
                        this.#moveUp();
                        break;
                    case this.#MOVE_DOWN:
                        this.#moveDown();
                        break;
            }
            super.moveNpc();
        }

        #moveRight(){
            this.setNpcXSpeed(this.#speed);
            this.setNpcYSpeed(0);

            //if hit right wall, move up

            if(this.getnpcX() >= width - Enemy.#SIZE/2){
                this.#state = this.#MOVE_UP;
            }
        }   

        #moveLeft(){
            this.setNpcXSpeed(-this.#speed);
            this.setNpcYSpeed(0);

            //if hit left wall, move down

            if(this.getnpcX() <= Enemy.#SIZE/2){
                this.#state = this.#MOVE_DOWN;
            }
           
        }

        #moveUp(){
            this.setNpcXSpeed(0);
            this.setNpcYSpeed(-this.#speed);

            //if hit top wall, move left

            if(this.getnpcY() <= Enemy.#SIZE/2){
                this.#state = this.#MOVE_LEFT;
            }
        }

        #moveDown(){
            this.setNpcXSpeed(0);
            this.setNpcYSpeed(this.#speed);

            // If hit bottom wall, move right

            if(this.getnpcY() >= height - Enemy.#SIZE/2){
                this.#state = this.#MOVE_RIGHT;
            }
        }
    }