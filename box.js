class Box 
{
    constructor(x,y,w,h)
{
    var options={
        isStatic:true
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.body=Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body)
}
display(){
    var d=this.body.position
    push()
    translate(d.x,d.y)
    rectMode(CENTER)
    rect(0,0,this.w,this.h)
    pop()
}
}