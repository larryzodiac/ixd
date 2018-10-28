// ------------------------------------------------- //
// 15/10/2018
// Evan MacHale - N00150552.
// Colour Palettes w/ Rules.
// P_1_2_3_01 in Book.
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_2_3_01
// ------------------------------------------------- //
'use strict';

let canvasSize;

const tileCountX = 40;
const tileCountY = 10;

/*
  Storage for values to be assigned to color() objects later on.
  We use seperate arrays for HSB for later on,
  depending what key is pressed, the arrays are populated differently.
  This is how we switch between 'rules'
*/
const hueValues = [];
const saturationValues = [];
const brightnessValues = [];

function setup() {
  // Responsive jQuery canvas.
  // Can manipulate dimensions using css.
  canvasSize = $('#canvas').width();
  const canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  colorMode(HSB, 100);
  noStroke();

  // Define our 'rules'
  // Values for H,S & B randomly selected from predefined ranges.
  // Random means that new palettes are continually generated
  // + produce specific colour nuances.
  for (let i = 0; i < tileCountX; i++) {
    hueValues[i] = random(100);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

function draw() {

  // Setup pseudo-mouse co-ordinates to be used within the canvas limits.
  // These variables pick up the mouse position, but constrain their values to the max canvas dimensions.
  const mX = constrain(mouseX, 0, width);
  const mY = constrain(mouseY, 0, height);

  let counter = 0;

  /*
    Current tile count changes the number of columns/rows depending on the mouse position.
    If top left corner tileCountX = 1
    If top right, 40
    Why?
    In draw, we will add/remove tiles to the value of these constiables
    Also, tiles sizes will change dynamically
  */
  const currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  const currentTileCountY = int(map(mY, 0, height, 1, tileCountY));

  // determine the width of our tiles evenly in respect to our canvas size + tile count.
  // The number of tiles we want will fit evenly into our canvas.
  const tileWidth = width / currentTileCountX;
  const tileHeight = height / currentTileCountY;

  /*
    Classic nested loops for creating our grid.
    Draws row by row(Y direction) incrementing when a row is complete.
    For each row, the inner loop draws rectangles(columns) across step-by-step,
    by increasing the x-position of each rectangle by it's width.
    This distrubtes our set number of tiles to the limits of the canvas edge.
  */
  for (let gridY = 0; gridY < tileCountY; gridY++) {
    for (let gridX = 0; gridX < tileCountX; gridX++) {
      /*
        e.g tileWidth = 10
        gridx starts at 0
        At 0, tile position is 0
        At 1, tile position is 10
        At 2, tile position is 20
        And so on..
      */
      const posX = tileWidth * gridX;
      const posY = tileHeight * gridY;

      /*
        Index constiable used to iterate through our arrays.
        When the grid is drawn, the colours are selecteds from the arrays one-by-one.
        The counter constiable is used to iterate through the same values for our specified rule
        using the modulo operator.
        When currentTileCountX = 3, the HSB indexes held will be 0,1,2,0,1,2...
        Meaning only the first three colours in the arrays are used in the grid.
      */
      const index = counter % currentTileCountX;
      // const index = counter % 3;
      // noLoop();
      // console.log(`index: ${index}`);
      // console.log(`Hue: ${hueValues[index]}`);
      // console.log(`Sat: ${saturationValues[index]}`);
      // console.log(`Bri: ${brightnessValues[index]}`);

      fill(hueValues[index], saturationValues[index], brightnessValues[index]);
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }

}

// ------------------------------------------------- //
// Key Options from Book.
// Defined Rules for HSB Colour Palette.
// ------------------------------------------------- //

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    const colors = [];
    for (let i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }

  if (key == '1') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(100);
      brightnessValues[i] = random(100);
    }
  }

  if (key == '2') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }

  if (key == '3') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }

  if (key == '4') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = 0;
      saturationValues[i] = 0;
      brightnessValues[i] = random(100);
  }
  }

  if (key == '5') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = 195;
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }

  if (key == '6') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = 195;
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }

  if (key == '7') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(180);
      saturationValues[i] = random(80, 100);
      brightnessValues[i] = random(50, 90);
    }
  }

  if (key == '8') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(180, 360);
      saturationValues[i] = random(80, 100);
      brightnessValues[i] = random(50, 90);
    }
  }

  if (key == '9') {
    for (let i = 0; i < tileCountX; i++) {
      if (i % 2 == 0) {
        hueValues[i] = random(360);
        saturationValues[i] = 100;
        brightnessValues[i] = random(100);
      } else {
        hueValues[i] = 195;
        saturationValues[i] = random(100);
        brightnessValues[i] = 100;
      }
    }
  }

  if (key == '0') {
    for (let i = 0; i < tileCountX; i++) {
      if (i % 2 == 0) {
        hueValues[i] = 140;
        saturationValues[i] = random(30, 100);
        brightnessValues[i] = random(40, 100);
      } else {
        hueValues[i] = 210;
        saturationValues[i] = random(40, 100);
        brightnessValues[i] = random(50, 100);
      }
    }
  }

}
