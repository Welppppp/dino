var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;




var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImg=loadImage("cloud.png");
 
  ob1=loadImage("obstacle1.png");
  ob2=loadImage("obstacle2.png");
  ob3=loadImage("obstacle3.png");
  ob4=loadImage("obstacle4.png");
  ob5=loadImage("obstacle5.png");
  ob6=loadImage("obstacle6.png");
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

  
}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds();
  
  drawSprites();
  spawnobstacle()
}

function spawnClouds()
{
if(frameCount % 60===0){
var cloud=createSprite(400,30,40,10);
cloud.velocityX=-3;
cloud.addImage(cloudImg);
cloud.scale=0.6;
cloud.y= Math.round(random(30,80));
trex.depth=cloud.depth;
trex.depth=trex.depth+1;

cloud.lifetime=200;
}


}

function spawnobstacle()
{
if(frameCount % 120===0){
var cactus=createSprite(600,170,40,10);
cactus.velocityX=-4;
cactus.scale=0.6;
var rand=Math.round(random(1,6));
console.log(random);
switch(rand)
{
case 1: cactus.addImage(ob1)
break;
case 2:cactus.addImage(ob2)
break;
case 3:cactus.addImage (ob3)
break;
case 4: cactus.addImage (ob4)
break;
case 5:cactus.addImage(ob5)
break;
case 6:cactus.addImage(ob6)
break;
}

cactus.lifetime=200;
}


}
