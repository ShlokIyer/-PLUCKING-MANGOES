
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, ground, boy, stone;
var mango1, mango2, mango3, mango4, mango5;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	  tree = new Tree(980, 600);
	  ground = new Ground(5, 600, 3000, 15);
    boy = new Boy(250, 500);
    stone = new Stone(40,150, 20);
    chain = new Chain(stone.body,{x:160, y:400})
  	mango1 = new Mango(980, 130, 40);
    mango2 = new Mango(930, 200, 40);
    mango3 = new Mango(999, 240, 40);
    mango4 = new Mango(1060, 100, 40);
    mango5 = new Mango(900, 295, 40);
  




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  chain.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);



  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
  chain.fly();
}
function keyPressed(){
  if(keyCode===32){
      chain.attach(this.stone);  
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position
  mangoBodyPosition = lmango.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false)
  }
}
