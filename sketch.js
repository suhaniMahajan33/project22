const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;
var roof;
var bob1;



function setup() {
	createCanvas(800,600);
	engine = Engine.create();

    world = engine.world;

	var roof_options={
		isStatic:true			
	}
    
	roof = Bodies.rectangle(400,100,230,20,roof_options);
       World.add(world,roof);

	   var bob1_options={
		restitution=0.8	
	   }
	bob1 = Bodies.circle(400,300,10,bob1_options)
       World.add(world,bob1);
	   
	   rectMode(CENTER);
	   ellipseMode(RADIUS);
    
	 }

function draw() {
  
  background("#99004d");
  Engine.update(engine);
  ellipse(bob1.position.x,bob1.position.y,10);
  rect(roof.position.x,roof.position.y,230,20);
  
  constructor(body1,body2, pointA, pointB)
  {
	  this.pointA=pointA
	  this.pointB=pointB

	var_options={
       bodyA:body1,
	   bodyB:body2,
	   pointB:{x:this.pointA, y:this.pointB}
	}
  }
  //call display() to show ropes here
  
  
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
