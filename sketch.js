var movingrect,fixedrect
function setup() {
  createCanvas(1400,600);
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="pink"
  
  fixedrect=createSprite(500,450,50,50)
  fixedrect.shapeColor="pink"
  
}

function draw() {
  background(12,85,15); 
  movingrect.x=mouseX
  movingrect.y=mouseY
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"
  
}
else{
  movingrect.shapeColor="pink"
  fixedrect.shapeColor="pink"
 }
  drawSprites();
}