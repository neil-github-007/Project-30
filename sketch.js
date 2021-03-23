const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var mainGround, leftGround, rightGround;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10,
    block11, block12, block13, block14, block15, block16, block17, block18, block19,
    block20, block21, block22, block23, block24, block25;
var hexagon;
var rope;

var gameState = "launch";

function setup() {
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    //grounds for blocks to stand
    mainGround = new Ground(600, 395, 1200);
    leftGround = new Ground(400, 280, 400);
    rightGround = new Ground(850, 155, 300);

    //hexagon
    hexagon = new Hexagon();

    //rope
    rope = new Rope(hexagon.body, {x:100, y:200});

    //blocks
    block1 = new Block(245, 255, "aqua");
    block2 = new Block(295, 255, "aqua");
    block3 = new Block(345, 255, "aqua");
    block4 = new Block(395, 255, "aqua");
    block5 = new Block(445, 255, "aqua");
    block6 = new Block(495, 255, "aqua");
    block7 = new Block(545, 255, "aqua");

    block8 = new Block(295,215,"pink");
    block9 = new Block(345,215,"pink");
    block10 = new Block(395,215,"pink");
    block11 = new Block(445,215,"pink");
    block12 = new Block(495,215,"pink");

    block13 = new Block(345, 175, "lime");
    block14 = new Block(395, 175, "lime");
    block15 = new Block(445, 175, "lime");
    
    block16 = new Block(395, 135, "grey");

    block17 = new Block(745, 130, "aqua");
    block18 = new Block(795, 130, "aqua");
    block19 = new Block(845, 130, "aqua");
    block20 = new Block(895, 130, "aqua");
    block21 = new Block(945, 130, "aqua");

    block22 = new Block(795, 90, "lime");
    block23 = new Block(845, 90, "lime");
    block24 = new Block(895, 90, "lime");

    block25 = new Block(845, 50, "pink");
}

function draw() {
    Engine.update(engine);

    background("black");

    //displaying the grounds
    mainGround.display();
    leftGround.display();
    rightGround.display();

    //displaying hexagon
    hexagon.display();

    //displaying the constraint 
    rope.display();

    //displaying the blocks
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();

    fill("white");
    textSize(20);
    text("Press Space to throw again.", 5, 30);
}

function mouseDragged() {
    if(gameState === "launch") {
        Matter.Body.setPosition(hexagon.body, {x:mouseX, y:mouseY});
    }
}

function mouseReleased() {
    rope.fly();
    gameState = "fly";
}

function keyPressed() {
    if(gameState === "fly") {
        if(keyCode === 32) {
            rope.attach(hexagon.body);
            gameState = "launch";
            Matter.Body.setPosition(hexagon.body, {x:50, y:200});
        }
    }
}