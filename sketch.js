let x=0;
let y=0;
let spacing = 10;
//increased value of spacing from 10 to 25

function setup() {
  createCanvas(400, 400);
  background(0,255,200);
  //changed background colour to turquoise
}

function draw() {
  strokeWeight(3);
if (random(1) < 0.5) {
  stroke(random(255),random(255),random(255));
  rect(x+spacing,y+spacing,x+spacing,y+spacing);

  
} else {
 stroke(200,0,255);
//fill()
  rect(x+spacing,y+spacing,x+spacing,y+spacing);

  }
  //changed colours so half the time it is random and half the time it is pink
  //changed lines to rectangles
  
  x = x+spacing;
  if (x>width) {
    x = 0;  
    y = y+spacing;
  }
  
}
