class Movingnpc{
    constructor(){
        this.tx = 30;
        this.ty = 80;
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
        fill(255);
        text("There are amulets all over the place!", this.x, this.y - 50);

    }
}
