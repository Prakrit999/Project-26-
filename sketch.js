const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var Log1, log2, box5, log3, log4;
var engine, world;
var box1, box2,box3,box4, pig1,pig2;
var Bird1,backgroundImage;

       function preload(){
              backgroundImage = loadImage ("sprites/bg.png");
              
      }
      





function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(720,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    ground = new Ground(600,height, 1200,20)
    Log1 = new Log(810,250,300,PI/2)
    Log2 = new Log(810,180,300,PI/2)
    Log3 = new Log(760,120,150,PI/7)
    Log4 = new Log(870,120,150,-PI/7)
    box3 = new Box(720,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    pig2 = new Pig(810,220);
    Bird1 = new Bird(150,150)
}


function draw(){
    background(backgroundImage);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    Log1.display();
    Log2.display();
    pig2.display();
    box3.display();
    box4.display();
    box5.display();
    Log3.display();
    Bird1.display();
    Log4.display();
}