const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function setup() {
  var canvas = createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;

  ground= new Divisions(240,690,480,20);

 
  
  }

function draw() {
  background("black"); 
  Engine.update(engine);
  
ground.display();

for (var k = 0;k<=innerWidth;k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}
for(var j = 40; j <=innerWidth; j=j+50){
  plinkos.push(new Plinko(j,75));
}
for (var j = 15;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175));
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10));
}
  
}