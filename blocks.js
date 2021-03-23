class Block extends BaseClass {
    constructor(x, y, color) {
        super(x, y , 50, 40);

        Matter.Body.setStatic(this.body, false);

        this.color = color;
        this.visibilty = 255;
    }
    display() {
        if(this.body.speed < 3) {
            push();
            super.display();
            rectMode(CENTER);
            fill(this.color);
            rect(this.body.position.x, this.body.position.y, 50, 40);
            pop();
        }
        else {
            World.remove(world, this.body);
            push();
            this.visibilty -= 5;
            tint(255, this.visibility);
            pop();
        }
    }
}
