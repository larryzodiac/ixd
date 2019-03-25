// ------------------------------------------------- //
// 24/09/2018
// Evan MacHale - N00150552
// Colour Interpolation
// P_1_2_1_01 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_2_1_01
// ------------------------------------------------- //
'use strict';

let canvasSize;

let coloursLeft = [];
let coloursRight = [];
let colours = [];

let tileCountX = 2;
let tileCountY = 10;

let interpolateShortest = true;

function setup() {
  canvasSize = $('#canvas').width();
  let canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  colorMode(HSB);
  noStroke();
  shakeColours();
}

function draw() {

  tileCountX = int(map(mouseX, 0, width, 2, 100));
  tileCountY = int(map(mouseY, 0, height, 2, 10));

  let tileWidth = width / tileCountX;
  let tileHeight = height / tileCountY;
  let interCol;

  for (let gridY = 0; gridY < tileCountY; gridY++) {
    for (let gridX = 0; gridX < tileCountX; gridX++) {

      let col1 = coloursLeft[gridY];
      let col2 = coloursRight[gridY];
      let amount = map(gridX, 0, tileCountX - 1, 0, 1);

      if (interpolateShortest) {
        colorMode(RGB);
        interCol = lerpColor(col1, col2, amount);
        colorMode(HSB);
      } else {
        interCol = lerpColor(col1, col2, amount);
      }

      let posX = tileWidth * gridX;
      let posY = tileHeight * gridY;

      fill(interCol);
      rect(posX, posY, tileWidth, tileHeight);

      // save color for potential ase export
      colours.push(interCol);
    }
  }
}

function shakeColours() {
  for (let i = 0; i < tileCountY; i++) {
    coloursLeft[i] = color(random(0, 100), random(10, 220), 200);
    coloursRight[i] = color(random(80, 250), 100, random(0, 100));
  }
}

function mouseReleased() {
  shakeColour();
}

function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colours)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp(), 'png');
  if (key == '1') interpolateShortest = true;
  if (key == '2') interpolateShortest = false;
}
