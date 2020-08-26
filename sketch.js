const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render=Matter.Render;

var paperBall, ground, side1,side2,bottom,ss,bb,ss2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperBall = new Paper(40,385,70);
	paperBall.shapeColor = "purple";

	ground = new Ground(400,390,800,10);

	ground.shapeColor = "yellow";

	Engine.run(engine);

	bottom = createSprite(600,375,100,20);
	bottom.shapeColor = ("white");

	side1 = createSprite(490, 300,20,150);
	side1.shapeColor = ("white");

	side2 = createSprite(710, 300,20,150);
	side2.shapeColor = ("white");

	ss = Bodies.rectangle(590, 300,20,150,{isStatic:true})
	World.add(world, ss);
	
	ss2 = Bodies.rectangle(710, 300,20,150,{isStatic:true})
	World.add(world, ss2);
	
	bb = Bodies.rectangle(650,375,100,20, {isStatic:true});
	World.add(world, bb);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bottom.x= bb.position.x;
  bottom.y= bb.position.y;
  side1.x =ss.position.x;
  side1.y= ss.position.y;
  side2.x =ss2.position.x;
  side2.y= ss2.position.y;
  paperBall.display();
  ground.display();
  drawSprites();
  keyPressed();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:20,y:-20});
	}
}



