class Movingnpc{
    constructor(){
        this.tx = 30;
        this.ty = 100;
    }

    step(){
        this.x = map(noise(this.tx), 0, 1, -1, width);
        this.y = map(noise(this.ty), 0, 1, -1, height);

        this.tx += 0.005;
        this.ty += 0.005;
    }

    show(){
        rectMode(CENTER);
        fill(255, 0, 0);
        square(this.x, this.y, 50);
    }
}