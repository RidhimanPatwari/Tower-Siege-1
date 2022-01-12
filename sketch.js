const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;          

var stand1, stand2;
var sling;
var hexagon, polygonImage;
var ground;

function preload() {
    polygonImage = loadImage("polygon.png");

}

function setup() {
    createCanvas(1200, 400);

    engine = Engine.create();
    world = engine.world;

    stand1 = new Stand(550, 375, 250, 10);
    stand2 = new Stand(1000, 200, 200, 10);

    //stand 1 row 1

    block1 = new Block(460, 350, 30, 40, "lightblue");
    block2 = new Block(490, 350, 30, 40, "lightblue");
    block3 = new Block(520, 350, 30, 40, "lightblue");
    block4 = new Block(550, 350, 30, 40, "lightblue");
    block5 = new Block(580, 350, 30, 40, "lightblue");
    block6 = new Block(610, 350, 30, 40, "lightblue");
    block7 = new Block(640, 350, 30, 40, "lightblue");

    //stand 1 row 2

    block8 = new Block(490, 310, 30, 40, "lightpink");
    block9 = new Block(520, 310, 30, 40, "lightpink");
    block10 = new Block(550, 310, 30, 40, "lightpink");
    block11 = new Block(580, 310, 30, 40, "lightpink");
    block12 = new Block(610, 310, 30, 40, "lightpink");

    //stand 1 row 3

    block13 = new Block(520, 270, 30, 40, "turquoise");
    block14 = new Block(550, 270, 30, 40, "turquoise");
    block15 = new Block(580, 270, 30, 40, "turquoise");

    //stand 1 row 4

    block16 = new Block(550, 230, 30, 40, "gray");

    //stand 2 row 1

    block17 = new Block(940, 175, 30, 40, "lightblue");
    block18 = new Block(970, 175, 30, 40, "lightblue");
    block19 = new Block(1000, 175, 30, 40, "lightblue");
    block20 = new Block(1030, 175, 30, 40, "lightblue");
    block21 = new Block(1060, 175, 30, 40, "lightblue");

    //stand 2 row 2

    block22 = new Block(970, 135, 30, 40, "lightpink");
    block23 = new Block(1000, 135, 30, 40, "lightpink");
    block24 = new Block(1030, 135, 30, 40, "lightpink");

    //stand 2 row 3

    block25 = new Block(1000, 95, 30, 40, "turquoise");

    //end of da thingies

    hexagon = Bodies.circle(150, 200, 50);
    World.add(world, hexagon);

    ground = Bodies.rectangle(600, 400, 1400, 10, {isStatic: true});
    World.add(world, ground);

    sling = new SlingShot(this.hexagon, {x: 150, y: 200});

}

function draw() {
    background(101, 67, 33);

    Engine.update(engine);

    stand1.display();
    stand2.display();

    //stand 1 stuff

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

    //stand 2 stuff

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    //end of da thingies
    imageMode(CENTER);
    image(polygonImage, hexagon.position.x, hexagon.position.y, 50, 50);

    sling.display();


}

function mouseDragged() {
    Body.setPosition(this.hexagon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    sling.fly();
}