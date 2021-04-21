const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275);
  block2 = new Block(330,275,);
  block3 = new Block(360,275);
  block4 = new Block(390,275);
  block5 = new Block(420,275);
  block6 = new Block(450,275);
  block7 = new Block(480,275);
  //level two
  block8 = new Block(330,235);
  block9 = new Block(360,235);
  block10 = new Block(390,235);
  block11 = new Block(420,235);
  block12 = new Block(450,235);
  //level three
  block13 = new Block(360,195);
  block14 = new Block(390,195);
  block15 = new Block(420,195);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175);
  blocks2 = new Block(670,175);
  blocks3 = new Block(700,175);
  blocks4 = new Block(730,175);
  blocks5 = new Block(760,175);
  //level two
  blocks6 = new Block(670,135);
  blocks7 = new Block(700,135);
  blocks8 = new Block(730,135);
  //top
  blocks9 = new Block(700,95);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
 
  block13.display();
  block14.display();
  block15.display();
  
  block16.display();
 
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  
  blocks9.display();
  ;
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}