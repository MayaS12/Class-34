
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var rope, ball;

//tower 1
var box1, box2, box3, box4, box5, box6

//tower 2
var box7, box8, box9, box10, box11, box12 

//tower 3
var box13, box14, box15, box16, box17, box18   

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground = new Ground(500,600,1000,20);

ball = new Ball(320,300);

rope = new Rope(ball.body, {x: 300, y: 20}); 

//tower 1
box1 = new Box(630,100,80,80);
box2 = new Box(630,100,80,80);
box3 = new Box(630,100,80,80);
box4 = new Box(630,100,80,80);
box5 = new Box(630,100,80,80);
box6 = new Box(630,100,80,80);

//tower 2
box7 = new Box(760,100,80,80);
box8 = new Box(760,100,80,80);
box9 = new Box(760,100,80,80);
box10 = new Box(760,100,80,80);
box11 = new Box(760,100,80,80);
box12 = new Box(760,100,80,80);

//tower 3
box13 = new Box(890,100,80,80);
box14 = new Box(890,100,80,80);
box15 = new Box(890,100,80,80);
box16 = new Box(890,100,80,80);
box17 = new Box(890,100,80,80);
box18 = new Box(890,100,80,80);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
ground.display();
ball.display();
rope.display();

//tower 1
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

//tower 2
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

//tower 3
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();

}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}

