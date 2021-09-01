var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;

var divisionHeight=300;

var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }


   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();
     if(particle.body.position.y > 600){
       
      if(particle.body.position.x < 280){
         score = score + 100;
         particle = null;
       }

       else if(particle.body.position.x > 280 && particle.body.position.x < 460){
        score = score + 500;
        particle = null;
      }

      else if(particle.body.position.x > 460){
        score = score + 200;
        particle = null;
      }
     }
   }
   
   textSize(20)
   text("SCORE:"+score, 350, 30);

   text("100", 25, 700);
   text("100", 100, 700);
   text("100", 185, 700);
   text("100", 265, 700);
   text("500", 340, 700);
   text("500", 420, 700);
   text("200", 505, 700);
   text("200", 585, 700);
   text("200", 660, 700);
   text("200", 740, 700);
}

function mousePressed(){
  particle = new Particle(mouseX, 10, 10);
}