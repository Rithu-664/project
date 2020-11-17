class Sling{
    constructor(body,point){
        var prop={
          bodyA: body,
          pointB: point,
          stiffness: 1,
          angularStiffness: 1,
          length: 220
        }
        
        this.pointX = body.x;
        this.pointY = body.y-250;
        this.sling = Constraint.create(prop);
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            push()
             strokeWeight(3.5);
             stroke("#fff");
             line(pointB.x,pointB.y,pointA.x,pointA.y);

            pop()
        }
    }
}

