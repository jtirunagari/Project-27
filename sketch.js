
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4,bobObject5
var rope1,rope2,rope3,rope4,rope5
var roof
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Box(400,100,360,30)
	bobObject1=new Bob(400,650,35)
	bobObject2=new Bob(420,650,35)
	bobObject3=new Bob(440,650,35)
	bobObject4=new Bob(460,650,35)
	bobObject5=new Bob(480,650,35)
	rope1=new Connection(bobObject1.body,roof.body)
	rope2=new Connection(bobObject2.body,roof.body)
	rope3=new Connection(bobObject3.body,roof.body)
	rope4=new Connection(bobObject4.body,roof.body)
	rope5=new Connection(bobObject5.body,roof.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  roof.display()
  drawSprites();
 
}



