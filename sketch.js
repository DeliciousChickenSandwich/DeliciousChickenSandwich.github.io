function setup() {
  createCanvas(1600,900);
  background(200,0,200);
}
var x = 0;

function draw() {
  stroke(255,0,0);
  fill(60,60,x);
  rect(mouseX,mouseY,3,3);
  x = x + 3;
  if(x > 255) {
    x = x - 255;
  }

}
