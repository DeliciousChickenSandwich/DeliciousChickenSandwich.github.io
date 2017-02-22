function setup() {
  createCanvas(1600,900);
  background(100,155,60);
}
var x = 0;

function draw() {
  stroke(255,0,0);
  fill(60,60,x);
  ellipse(mouseX,mouseY,900,50);
  var offset = random(1);
  x = x + 3;
  if(x > 255) {
    x = x - 255;
  }

}
