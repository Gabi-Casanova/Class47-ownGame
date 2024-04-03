
var backgroundImg, bg;
var invisGround;

var mrMole;
var ledges, ledge1, ledge2, ledge3, ledge4;


function preload(){
   
  backgroundImg = loadImage("assets/bgImg.jpg");
  ledge1 = loadImage("assets/dirtLedges/dirtLedge1.png");
  ledge2 = loadImage("assets/dirtLedges/dirtLedge2.png");
  ledge3 = loadImage("assets/dirtLedges/dirtLedge3.png");
  ledge4 = loadImage("assets/dirtLedges/dirtLedge4.png");

  blueGem = loadImage("assets/gems/gemBlue.png");
  greenGem = loadImage("assets/gems/gemGreen.png");
  redGem = loadImage("assets/gems/gemRed.png");
  yellowgem = loadImage("assets/gems/gemYellow.png");

  moleStanding = loadImage("assets/mole/mole_sprite_standing.png");

  moleJumpL = loadImage("assets/mole/mole_jump_LEFT.png");
  moleJumpR = loadImage("assets/mole/mole_jump_RIGHT.png");

  moleWalkingL = loadAnimation("assets/mole/mole_walking1_LEFT.png","assets/mole/mole_walking2_LEFT.png");
  moleWalkingR = loadAnimation("assets/mole/mole_walking1_RIGHT.png","assets/mole/mole_walking2_RIGHT.png")

  worm = loadAnimation(
  "assets/worm/worm1.png",
  "assets/worm/worm2.png",
  "assets/worm/worm3.png",
  "assets/worm/worm4.png",
  "assets/worm/worm5.png",
  "assets/worm/worm6.png",
  "assets/worm/worm7.png")
  
}

function setup() {
  createCanvas(700, 700);
  //image(backgroundImg, 0,0,500,650);

  invisGround = createSprite(350, 680, 700, 20);
  
  bg = createSprite(625, 350, 1500, 1500);
  bg.addImage(backgroundImg);
  bg.velocityY = 1

  mrMole = createSprite(250, 600, 50, 50);
  // mrMole.addAnimation("walkingL",moleWalkingL);
  // mrMole.addAnimation("walkingR", moleWalkingR);

  mrMole.addImage(moleStanding);
  mrMole.scale = 1.5
   
}

function draw() {
  background("black");
  
  if(bg.y > 420){
    bg.y = 350;
  }

  //movement
  if(keyDown("LEFT_ARROW")){
    mrMole.x -= 5;
  }

  if(keyDown("RIGHT_ARROW")){
    mrMole.x +=5;
  }

  if(keyDown("UP_ARROW")){
    mrMole.velocityY = -7;
  }

  mrMole.velocityY += 0.5;

  mrMole.collide(invisGround);
  
  //playerMovement();
  dirtLedges(); 
  
  drawSprites();
}

function dirtLedges(){
  if(frameCount%80 === 0){
    ledges = createSprite(Math.round(random(-150, 450)), 0, 20, 20);
    ledges.velocityY = 1

    var rand = Math.round(random(1,4))
    switch(rand){
      case 1 : ledges.addImage(ledge1)
      break;
      case 2 : ledges.addImage(ledge2)
      break;
      case 3 : ledges.addImage(ledge3)
      break;
      case 4 : ledges.addImage(ledge4)
      break;
      default:
        break;
    }

    ledges.depth = mrMole.depth;
    mrMole.depth += 1;
  }
}

// function playerMovement(){

//   if(keyDown("LEFT_ARROW")){
//     mrMole.x -= 5;
//   }

//   if(keyDown("RIGHT_ARROW")){
//     mrMole.x +=5;
//   }

//   if(keyDown("UP_ARROW")){
//     mrMole.velocityY = -7;
//   }

//   mrMole.velocityY = 7;
// }

 

 
 