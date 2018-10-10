// ------------------------------------------------- //
// 17/09/2018
// Evan MacHale - N00150552
// Colour Spectrum in a Grid
// P_1_1_1_01 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_1_1_01
// ------------------------------------------------- //
'use strict';

let canvasSize;
let stepX;
let stepY;

function setup() {
  canvasSize = $('#canvas').width();
  let canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  colorMode(HSB, width, height, 100);
  noStroke();
  console.log(`Width is ${width}`);
}

function draw() {
  let stepX = width / floor(map(constrain(mouseX, 0, width), width, 0, 2, 100));
  let stepY = height / floor(map(constrain(mouseY, 0, height), height, 0, 2, 100));

  // let stepxx = mouseX + 2;
  // let stepyy = mouseY + 2;
  // console.log(stepxx);

  for(let gridY = 0; gridY < height; gridY += stepY) {
    for(let gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}

function keyPressed(){
  if(key==='s' || key==='S'){
    saveCanvas(gd.timestamp() + '_mouseX_' + mouseX, 'png');
  }
}
