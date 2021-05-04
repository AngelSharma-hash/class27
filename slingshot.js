class Slingshot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.01,
            length:10
        }

        this.slingshot= Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display(){
        push ()
        var pointA= this.slingshot.bodyA.position;
        var pointB= this.slingshot.bodyB.position;

        stroke("blue");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop()
    }
}