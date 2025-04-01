class Object{
    #x;
    #y;
    #width;
    #height;

    constructor(){
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
    }

    getX(){
        return this.#x;
    }

    setX(){
        this.#x = newX;
    }

    getY(){
        return this.#y;
    }

    setY(){
        this.#y = newY;
    }

    getW(){
        return this.#width;
    }

    getH(){
        return this.#height;
    }
}