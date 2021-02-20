class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            //restitution:1,
            friction:0,
            density:0.8
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)
    }
    display(){
        var c=this.body.position
        push()
        translate(c.x,c.y)
        rectMode(CENTER)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}