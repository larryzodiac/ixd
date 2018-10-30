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
  // Responsive jQuery canvas.
  // Can manipulate dimensions using css.
  canvasSize = $('#canvas').width();
  let canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  colorMode(HSB, width, height, 100);
  noStroke();
}

function draw() {
  // Constrain mouse co-ordinates to canvas dimensions.
  // Constraints used to manipulate number of tiles in x and y directions.
  const stepX = width / floor(map(constrain(mouseX, 0, width), 0, width, 2, 100));
  const stepY = height / floor(map(constrain(mouseY, 0, height), 0, height, 2, 100));
  // Nested loops, outer for y-axis, inner for x-axis
  // i.e for every row, draw columns
  for(let gridY = 0; gridY < height; gridY += stepY) {
    for(let gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}

// ------------------------------------------------- //
// Key Options from Book.
// Download Option.
// ------------------------------------------------- //

function keyPressed(){
  if(key==='s' || key==='S'){
    saveCanvas(gd.timestamp() + '_mouseX_' + mouseX, 'png');
  }
}
