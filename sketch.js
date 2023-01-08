const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var balls = [];
/*Class about Array
var grade= 7;
var abraham = ["student",grade,15,"coding","football",[5,6]];
console.log(abraham[5]);
console.log(abraham);
console.log(abraham.length);
abraham.push("pizza");
abraham.push("gardening");x
console.log(abraham);
abraham.pop();
console.log(abraham);*/

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 20

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
 
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
   for(var i = 0; i<balls.length; i++){
    showCannonBalls(balls[i],i);
   }
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall);
    //cannonBall.shoot();
  }
}

function showCannonBalls(ball,i){
  if(ball){
    ball.display();
  }
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
   balls[balls.length - 1].shoot();
  }
}