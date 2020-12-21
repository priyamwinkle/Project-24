const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var trash1,trash2,trash3,paper,ground;


function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	trash1=new Dustbin(1500,610,20,100);
	trash2=new Dustbin(1610,650,200,20);
	trash3=new Dustbin(1720,610,20,100);
	paper=new Paper(50,650,30)
	ground=new Ground(1000,680,2000,20)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  trash1.display();
  trash2.display();
  trash3.display();
  paper.display();
  ground.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.2,y:-0.25});
	}
}


