var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedrect2=createSprite(300,300,20,20);
  fixedrect3=createSprite(300,500,20,20);
  fixedrect4=createSprite(100,300,20,20);
  fixedrect2.shapeColor = "green";
  fixedrect3.shapeColor = "green";
  fixedrect4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
 if(isTouching2(fixedrect3,movingRect)){
  movingRect.shapeColor = "red";
  fixedrect3.shapeColor = "red";

 }
else{

  movingRect.shapeColor = "green";
  fixedrect3.shapeColor = "green";
  

}
  drawSprites();
}
function isTouching2(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x -object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y <object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
return false;

}
}  

