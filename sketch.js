const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3,box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19;
var box20,box21,slingshot,backgroundImg;

var bg = "sprites/bg1.png";
var score = 0;

function preload() {
  getBackgroundImg();
}

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  ground1 = new Ground(600,height,1200,20);
  ground2 = new Ground(420,300,280,15);
  ground3 = new Ground(900,150,220,15)
  box1 = new Box(840,120,40,40);
  box2 = new Box(881,120,40,40);
  box3 = new Box(922,120,40,40);
  box4 = new Box(962,120,40,40);
  box5 = new Box(860,80,40,40);
  box6 = new Box(900,80,40,40);
  box7 = new Box(940,80,40,40);
  box8 = new Box(900,40,40,40);
  box9 = new Box(340,270,40,40);
  box10 = new Box(380,270,40,40);
  box11 = new Box(420,270,40,40);
  box12 = new Box(460,270,40,40);
  box13 = new Box(500,270,40,40);
  box14 = new Box(480,230,40,40);
  box15 = new Box(440,230,40,40);
  box16 = new Box(400,230,40,40);
  box17 = new Box(360,230,40,40);
  box18 = new Box(380,190,40,40);
  box19 = new Box(420,190,40,40);
  box20 = new Box(460,190,40,40);
  box21 = new Box(420,150,40,40);
   ball = Bodies.circle(100,200,20);
  World.add(world,ball);
  sling = new Slingshot(this.ball,{x:100,y:200});

}

function draw() {

  background(0);

  Engine.update(engine);

  noStroke();
  textSize(35)
  fill("white")
  
  ground1.display(); 
  ground2.display(); 
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  sling.display();

  

  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,40,40);


}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(ball.body);
     Matter.Body.setPosition(ball.body,{x:100,y:200});
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>= 4 && hour<=17){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}