var fRect
var mRect

function setup() {
  createCanvas(800,400);
  fRect=createSprite(400, 200, 50, 50);
  mRect=createSprite(200,100,50,50);

  fRect.shapeColor="green"
  mRect.shapeColor="green"

  fRect.debug=true
  mRect.debug=true


}

function draw() {
  background(0); 
  mRect.x=mouseX
  mRect.y=mouseY

  if(fRect.x-mRect.x<=fRect.width/2+mRect.width/2 &&
    mRect.x-fRect.x<=fRect.width/2+mRect.width/2 &&
    fRect.y-mRect.y<=fRect.height/2+mRect.height/2 && 
    mRect.y-fRect.y<=fRect.height/2+mRect.height/2){
    fRect.shapeColor="red"
    mRect.shapeColor="red"
  }
  else{
    fRect.shapeColor="green"
    mRect.shapeColor="green"

  }
  drawSprites();
}