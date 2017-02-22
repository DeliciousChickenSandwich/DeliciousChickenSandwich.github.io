function setup() {
  createCanvas(1600,900);
  background(126,0,126);
}
var x = 0;

function draw() {
  stroke(0,50,0);
  fill(0,0,x);
  rect(mouseX,mouseY,3,3);
  x = x + 10;
  if(x > 255) {
    x = x - 255;
  }

}
