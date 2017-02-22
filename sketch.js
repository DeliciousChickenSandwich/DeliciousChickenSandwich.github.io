function setup() {
  createCanvas(1600,900);
  background(0,0,255);
}
var x = 0; var y = 120; var z = 260;

function draw() {
  stroke(0,255,0);
  fill(x,y,z);
  ellipse(mouseX-50,mouseY-50,100,100);
  var offset = random(1);
  x = (x + random(5)) * offset;
  y = (y + random(5)) * offset;
  z = (z + random(5)) * offset;
}
