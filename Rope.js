class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
       var options={
           bodyA:bodyA,
           bodyB:bodyB,
           pointB:{x:this.offsetX , y:this.offsetY},
           length:250,
           stiffness:1
       }
       
       this.Rope=Constraint.create(options);
       World.add(world,this.Rope);
    }
    display(){
        var pos1=this.Rope.bodyA.position;
        var pos2=this.Rope.bodyB.position;
        stroke("orange");  
        line(pos1.x,pos1.y,pos2.x-(-this.offsetX),pos2.y);
    }
}