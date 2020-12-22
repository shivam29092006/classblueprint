const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground, box1, box2;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
    myworld = myengine.world;

    var groundOption = {
      isStatic : true
    }
    ground = Bodies.rectangle(200,380,400,20, groundOption);
    World.add(myworld, ground)

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
  
}

function draw() {
  background(0);
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);
  box1.display();
  box2.display();  
  //drawSprites();
}