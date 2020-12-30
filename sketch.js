var hr, min, sec;
var hrangle,minangle,secangle;

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  translate(400,400)
  rotate(-90)
  hr=hour()
  min=minute()
  sec=second()
  secangle=map(sec,0,60,0,360)
  minangle=map(min,0,60,0,360)
  hrangle=map(hr%12,0,12,0,360)


  push()
  rotate(secangle)
  stroke("red")
  strokeWeight(8)
  line(0,0,180,0)
  pop()

  push()
  rotate(minangle)
  stroke("blue")
  strokeWeight(8)
  line(0,0,150,0)
  pop()

  push()
  rotate(hrangle)
  stroke("green")
  strokeWeight(8)
  line(0,0,100,0)
  pop()

point(0,0)
strokeWeight(10)

  noFill()
  stroke("red")
  arc(0,0,360,360,0,secangle)
  stroke("blue")
  arc(0,0,280,280,0,minangle)
  stroke("green")
  arc(0,0,260,260,0,hrangle)
  
  drawSprites();
}