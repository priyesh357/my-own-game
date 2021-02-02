
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
bgimg=loadImage("bg.jpg")	
}

function setup() {
	createCanvas(displayWidth,displayHeight);


	engine = Engine.create();
    
    world = engine.world;
    bg1=createSprite(displayWidth/2,displayHeight/2,displayWidth*2,displayHeight)
    bg1.addImage(bgimg)
    bg1.velocityX=-1
    
	//Create the Bodies Here.
player1=createSprite(50,height-100,50,50)
ground=createSprite(displayWidth/2,displayHeight,displayWidth,20)
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(bg1.x<0){
      bg1.x=width/2
  }
//   if(keyDown(LEFT_ARROW)){
//       player1.x=player1.x-5
//   }
//   if(keyDown(RIGHT_ARROW)){
//     player1.x=player1.x+5
// }
if(keyDown("space")){
    player1.velocityY=-10
}
player1.velocityY= player1.velocityY+0.5
player1.collide(ground)
  drawSprites();
 
}



