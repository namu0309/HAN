let ball,ball2;

function setup() {
  createCanvas(400, 400); 
  ball = new Walker();
  ball2 = new Walker();
}


function draw() {
  background(220, 25);
  ball.update();
  ball.display();
  ball2.update();
  ball2.display();
  
}


// new way to define Object
class Walker {
  //setup values
  constructor() {
  	this.pos = createVector(0, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.xoff = 0;
    this.w = 20;
  }
  
  update() {
    // this.vel = createVector(random(-5,5), random(-5,5));
    // if (mouseIsPressed) {
    //   this.acc = createVector(random(-0.1,0.1),random(-0.1,0,1));
    // } else {
    //   this.acc = createVector(0,0);
    // }
    
    this.x = noise(this.xoff)*width + random(-50,50);
    this.z = createVector(this.x,0);
    this.xoff += 0.01;
    
    this.w += this.z.x/100
    if (this.w > 20) {
      this.w += -100 
    }
  
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  
  display() {
    //display walker
	fill(255);
    ellipse(this.pos.x+this.z.x, this.pos.y+random(-height,width), this.w);
    fill(200);
    ellipse(this.pos.x+this.z.x, this.pos.y, 5);
    fill(0);
    ellipse(this.pos.x+this.z.x, this.pos.y, this.w);
  }
}