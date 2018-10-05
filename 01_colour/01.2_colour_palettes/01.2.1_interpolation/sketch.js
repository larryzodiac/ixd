// ------------------------------------------------- //
// 24/09/2018
// Evan MacHale - N00150552
// Recacp exercise
// ------------------------------------------------- //
var rectWidth;
var rectHeight;

function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB, windowWidth, windowHeight, 100);
  noStroke();
  rectWidth = windowWidth/10;
  rectHeight = windowHeight/12;
  // rectWidth = mouseX/50 + 1;
  // rectHeight = mouseY/50 + 1;
}

function draw() {

  // rectWidth = mouseX/50 + 1;
  // rectHeight = mouseY/50 + 1;

  for(gridY=0; gridY<windowHeight; gridY = gridY + rectWidth){
    for(gridX=0; gridX<windowWidth; gridX = gridX + rectHeight){
      fill(gridX, gridY, 100);
      rect(gridX, gridY, rectWidth, rectHeight);
    }
  }
}
