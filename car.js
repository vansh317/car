class Car {
    constructor(weight,speed){
        this.x=50
        this.y=200
        this.sprite=createSprite(this.x,this.y,70,70)
        this.weight=weight
        this.speed=speed
        this.sprite.velocityX=this.speed
        this.sprite.shapeColor=color("yellow")


    }
}