
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash1,trash2,trash3,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	trash1=new Dustbin(500,610,20,100);
	trash2=new Dustbin(610,650,200,20);
	trash3=new Dustbin(720,610,20,100);
	paper=new Paper(50,650,20)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  trash1.display();
  trash2.display();
  trash3.display();
  paper.display();

  keyPressed();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


