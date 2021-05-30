
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObj
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperObj=new paper(200,50,100,100);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperObj.display();
  groundObject.display();
  dustbinObj.display();

}

function mouseDragged()
{

Matter.Body.setPosition( paperObj.body,{x:mouseX,y:mouseY})

}

function mouseReleased()
{
    paper.fly()
}
