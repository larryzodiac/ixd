// ------------------------------------------------- //
// 17/09/2018
// Evan MacHale - N00150552
// Colour Spectrum in a Grid
// P_1_1_1_01 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_1_1_01
// ------------------------------------------------- //
'use strict';

let canvasSize;

function setup() {
  canvasSize = $('#canvas').width();
  let canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  colorMode(HSB, width, height, 100);
  noStroke();
}

function draw() {
  let numOfCols = 100;
  let numOfRows = 100;
  let stepX = width / numOfCols;
  let stepY = height / numOfRows;

  for(let gridY = 0; gridY < height; gridY += stepY) {
    for(let gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
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
