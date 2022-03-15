function preload() {
  bgImage=loadImage("snow2.jpg")
  boyImage=loadImage("boy.jpg")
}
function setup() {

  createCanvas(800,400);
  bg=createSprite(400, 200, 50, 50);
  bg.addImage(bgImage);
  boy=createSprite(200,350,50,50)
  boy.addImage(boyImage)
  boy.scale=0.03
}

function draw() {
  background(255,255,255);
if(keyDown("SPACE"))
{
  boy.y=boy.y-1
}  
  drawSprites();
}