class Connection
{
    constructor(a,b)
{
    var features= {
        bodyA: a,
        bodyB: b,
        stiffness: 0.02,
        length:20
    }
    this.connection=Constraint.create(features)
    World.add(world,this.connection)
}
display(){
line(this.connection.bodyA.position.x,this.connection.bodyA.position.y,this.connection.bodyB.position.x,this.connection.bodyB.position.y)
}
}