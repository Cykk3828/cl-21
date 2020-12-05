function setup() {
  createCanvas(800,400);
  Example3=createSprite(400,200,50,50);
  Example3.shapeColor="green";
  Example3.velocityX=-2;
  Example4=createSprite(200,200,50,50);
  Example4.shapeColor="green";
  Example4.velocityX=+2;
  ob1=createSprite(100,100,50,50);
  ob1.shapeColor="yellow";
  ob1.velocityX=2;
  ob2=createSprite(200,80,50,50);
  ob2.shapeColor="white";
  ob2.velocityX=-2;
  ob3=createSprite(300,100,50,50);
  ob3.shapeColor="pink";
  ob4=createSprite(500,100,50,50);
  ob4.shapeColor="purple";
  
}

function touching(rex,rex1){
  if(rex.x-rex1.x<rex.width/2+rex1.width/2 && rex1.x-rex.x<rex1.width/2+rex.width/2 && rex.y-rex1.y<rex.width/2+rex1.width/2 
    && rex1.y-rex.y<rex1.width/2+rex.width/2){
 return true;

    
  }
  else {
   return false;
  }
}
function bounceoff(Example,Example2){
  if(Example.x-Example2.x<Example.width/2+Example2.width/2 && 
    Example2.x-Example.x<Example.width/2+Example2.width/2 ){
     Example.velocityX =Example.velocityX*(-1);
     Example2.velocityX =Example2.velocityX*(-1);
 }else if (Example.y-Example2.y<Example.width/2+Example2.width/2 && Example2.y-Example.y<Example.width/2+Example2.width/2){ 
  Example.velocityY =Example.velocityY*(-1);
  Example2.velocityY =Example2.velocityY*(-1);
 } else {
   Example.shapeColor="blue";
   Example2.shapeColor="blue";
 }
 
}
function draw() {
  background("black");  
  ob4.x=World.mouseX;
  ob4.y=World.mouseY;

  if(touching (ob2,ob4) ){
   ob2.shapeColor="red";
   ob4.shapeColor="red";
  }else {
    ob2.shapeColor="orange";
    ob4.shapeColor="orange";
  }
bounceoff(ob1,ob2);
bounceoff(Example3,Example4);
  drawSprites();
}
