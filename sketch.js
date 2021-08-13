var zbe
var prince1
var ground
var gameState="fight"
var zombieGroup


function preload (){
bgImg=loadImage("BGIMAGE.png")
zombieImg = loadImage("zombie.png")
prince2Img = loadImage("prince2.png")
}
function setup() {
createCanvas(windowWidth,windowHeight);
ground = createSprite(displayWidth,800,windowWidth,20)

bg=createSprite(displayWidth/2-20,displayHeight-40,20,20)
bg.addImage(bgImg)
bg.scale=1.82



princeImg = createSprite (100,600,50,50);
princeImg.addImage("prince1",prince2Img)
princeImg.scale=0.5
//princeImg.setCollider("rectangle",0,0,300,300)
princeImg.setCollider("rectangle",40,-100,275,100);
princeImg.debug = false
zombieGroup = new Group()

}

function draw() {
  background(0);
if(gameState === "fight"){




  if(keyDown("UP_ARROW")){
    princeImg.y = princeImg.y -5;
  }
    
  if(keyDown("LEFT_ARROW")){
    princeImg.x = princeImg.x - 5;
  }
    
  if(keyDown("RIGHT_ARROW")){
    princeImg.x = princeImg.x + 5;
  }
    
  if(keyDown("DOWN_ARROW")){
      princeImg.y = princeImg.y + 5; 
    }
 if (zombieGroup.isTouching(princeImg)) {
zombieGroup.destroyEach()


 }
  }
  spawnZombies ()
  drawSprites();
}
function spawnZombies() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var zombie = createSprite(600,120,40,10);
    zombie.y = Math.round(random(300,1000));
    zombie.x = Math.round(random(300,1000));
    zombie.addImage(zombieImg);
    zombie.scale = 0.5;
    zombie.velocityX = -3;
    
     //assign lifetime to the variable
    zombie.lifetime = 300;
    
    //adjust the depth
    zombie.depth = princeImg.depth;
    princeImg.depth = zombie.depth + 1;
    
    //add each cloud to the group
    zombieGroup.add(zombie);
  }
}

