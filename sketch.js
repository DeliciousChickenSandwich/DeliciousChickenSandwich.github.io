
function setup() {
  //make a screen for painting
  createCanvas(1000,900);

    background(100,250,255);
}


function draw()
 {
  //make it cyan

  stroke(0,0,255);
 
 fill(20,255,255);
 
 // make a rectangle in the middle of the mouse
 
 rect(mouseX - 40,mouseY - 40,80,80);
}


function mousePressed() 
{
    background(random(255),random(255),random(255));
}
