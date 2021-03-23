class Ground extends BaseClass {
    constructor(x, y, width) {
        super(x, y , width, 10);

        Matter.Body.setStatic(this.body, true);
    }
    display() {
        push();
        super.display();
        rectMode(CENTER);
        fill(211,58,58);
        rect(this.body.position.x, this.body.position.y, this.width, 10);
        pop();
    }
}