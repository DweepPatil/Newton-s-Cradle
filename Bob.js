class Bob{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius);
        World.add(world,this.body);
    }
    display(rad){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(5);
        stroke("red");
        fill("blue");
        ellipse(pos.x,pos.y,rad,rad); 
    }
}