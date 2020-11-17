const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5,sling1,sling2,sling3,sling4,sling5;

function setup(){
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  bob1 = new Pendulum(455,300,30)
  bob2 = new Pendulum(515,300,30)
  bob3 = new Pendulum(575,300,30)
  bob4 = new Pendulum(635,300,30)
  bob5 = new Pendulum(695,300,30)
  sling1 = new Sling(bob1.body,{x:455,y:50})
  sling2 = new Sling(bob2.body,{x:515,y:50})
  sling3 = new Sling(bob3.body,{x:575,y:50})
  sling4 = new Sling(bob4.body,{x:635,y:50})
  sling5 = new Sling(bob5.body,{x:695,y:50})
  
  Engine.run(engine)
}

function draw(){
  background("Crimson")

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  fill("white")
  text(mouseX+" , "+mouseY,mouseX,mouseY);

  Engine.update(engine)
}