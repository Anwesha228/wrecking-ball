class Rope {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA, 
            pointB : pointB,
            lenght : 250, 
            stiffness : 1.2 
        } 

        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        
    }
    display(){

        if(this.rope.bodyA){
            var PointA = this.rope.bodyA.position;
            var PointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(48,22,8);
            
            line(PointB.x,PointB.y,PointA.x,PointA.y);
               
            
            pop(); 
        }
    }
    fly(){
        this.rope.bodyA = null; 
    }
    
    attach(body){
        this.rope.bodyA = body;
    }
}
