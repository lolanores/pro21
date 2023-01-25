
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ground = new Ground(width/2,670,height,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1100,600,20,120);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,10,20,ball_options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



