const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var hanger;
var rope1,rope2,rope3,rope4,rope5;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    bob1=new Bob(600,200,30);
    bob2=new Bob(660,200,30);
    bob3=new Bob(720,200,30);
    bob4=new Bob(540,200,30);
    bob5=new Bob(480,200,30);

    var hOptions={
        isStatic:true
    }
     
    hanger=Bodies.rectangle(600,100,280,40,hOptions);
    World.add(world,hanger);

    

    rope1=new Rope(bob5.body,hanger,-120,0);
    rope2=new Rope(bob4.body,hanger,-60,0);
    rope3=new Rope(bob1.body,hanger,0,0);
    rope4=new Rope(bob2.body,hanger,60,0);
    rope5=new Rope(bob3.body,hanger,120,0);

    }

function draw(){
    background(0);
    Engine.update(engine);
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    bob1.display(30);
    bob2.display(30);
    bob3.display(30);
    bob4.display(30);
    bob5.display(30);

    rectMode(CENTER);
    fill("cyan");
    noStroke();
    rect(hanger.position.x,hanger.position.y,280,40);

   
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-0.1,y:0})
    }
}