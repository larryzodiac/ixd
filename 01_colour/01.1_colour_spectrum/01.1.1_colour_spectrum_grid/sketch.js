// ------------------------------------------------- //
// 17/09/2018
// Evan MacHale - N00150552
// ------------------------------------------------- //
'use strict';

let canvasSize;

// let stepX;
// let stepY;

function setup() {
  canvasSize = $('#canvas').width();
  let canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  colorMode(HSB, width, height, 100);
  noStroke();
}

function draw() {
  var numOfCols = 100;
  var numOfRows = 100;
  var stepX = width/numOfCols;
  var stepY = height/numOfRows;

  for(var gridY = 0; gridY < height; gridY += stepY) {
    for(var gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, 100, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}

// function draw() {
//   stepX = mouseX + 20;
//   stepY = mouseY + 20;
//
//   for (var gridY = 0; gridY < height; gridY += stepY) {
//     for (var gridX = 0; gridX < width; gridX += stepX) {
//       fill(gridX, height - gridY, 100);
//       rect(gridX, gridY, stepX, stepY);
//     }
//   }
// }

function keyPressed(){
  if(key==='s' || key==='S'){
    saveCanvas(gd.timestamp() + '_mouseX_' + mouseX, 'png');
  }
}
