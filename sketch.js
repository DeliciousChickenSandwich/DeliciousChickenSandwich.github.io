function setup() {
  createCanvas(1600,900);
  background(0,0,255);
}
var x = 0;

function draw() {
  stroke(0,255,0);
  fill(0,0,x);
  ellipse(mouseX-50,mouseY-50,100,100);
  var offset = random(1);
  x = x + 3;

}
