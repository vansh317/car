var car , wall 




function setup() {
  createCanvas(1000,400);
speed=random(70,110)
weight=random(550,1440)
car=new Car(weight,speed)
wall=createSprite(900,150,30,400)
wall.shapeColor=color("blue")
}

function draw() {
  background("skyblue"); 
   car.sprite.collide(wall,deformation)
  drawSprites();
}

function deformation() {
  var deformation=0.5*car.weight*car.speed*car.speed/22500;
  if(deformation>180)(
    car.sprite.shapeColor=color("orange")
  )
  if(deformation<180 && deformation>100)(
    car.sprite.shapeColor=color("green")  
  )
  if(deformation<100)(
    car.shapeColor=color("red")
  )
}
