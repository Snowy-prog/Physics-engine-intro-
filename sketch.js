const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ground_prop,ball_prop;
var ball;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  
  ground_prop ={
    isStatic: true
  }

  ground = Bodies.rectangle(200,370,400,10,ground_prop);

  ball_prop ={
    restitution: 1
  }
  ball = Bodies.circle(200,100,40,ball_prop);
  World.add(world,[ground,ball]);

  console.log(ground);
  console.log(ground.position.y);
}

function draw() {
  background(0); 
  Engine.update(engine);

  var pos = ground.position;
  rectMode(CENTER);
  rect(pos.x,pos.y,400,30);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);

  drawSprites();
}