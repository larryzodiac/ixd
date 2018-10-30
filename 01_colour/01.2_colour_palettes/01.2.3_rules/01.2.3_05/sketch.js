// ------------------------------------------------- //
// 30/10/2018
// Evan MacHale - N00150552.
// Colour Palettes w/ Rules.
// P_1_2_3_05 in Book.
// Generating a specific color palette w/ alpha + some random 'rect-tilings' with radial gradient.
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_2_3_03
// ------------------------------------------------- //
'use strict';

let canvasSize;

const colours = 20;
let counter = 0;
let tileCountY;
let tileHeight;

const hueValues = [];
const saturationValues = [];
const brightnessValues = [];
const alphaValue = 70;

function setup() {
  // Responsive jQuery canvas.
  // Can manipulate dimensions using css.
  canvasSize = $('#canvas').width();
  const canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  colorMode(HSB, 100);
  noStroke();
}

function draw() {
  frameRate(0.5);
  background(0);

  /*
    Nothing changed, using modulo to generate colours.
    Will alternate continuously between 1, 0.
  */
  for (let i = 0; i < colours; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(100);
      saturationValues[i] = random(50);
      brightnessValues[i] = 100;
    } else {
      hueValues[i] = random(100);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }

  // Number of rows + row heights.
  tileCountY = int(random(5, 20));
  tileHeight = height / tileCountY;

  // Loop for every row.
  for (let j = 0; j <= tileCountY; j++) {
    // We keep track of number of starting tiles per row for loop + drawing.
    let tileCount = j + 1;
    // Keeps a list of every new tile's width.
    const tilesWidths = [];

    // Smash our starting tiles(count) into fragments,
    // keep track of the amount of new tiles we create from this.
    for (let i = 0; i < tileCount; i++) {
      if (random() < 0.075) {
        // Define how many fragments the tile will be broken up into.
        const fragments = int(random(2, 20));
        // New tile total for this row.
        tileCount = tileCount + fragments;
        // For each fragment, push into 'tiles' a random width.
        for (let i = 0; i < fragments; i++) {
          tilesWidths.push(random(2));
        }
      } else {
        tilesWidths.push(random(2, 20));
      }
    }

    /*
     We find total width of all tiles.
     The total width may exceed the width of the canvas.
     Next we will map these partitions to fit.
    */
    let sumTileWidthsForThisRow = 0;
    for (let i = 0; i < tileCount; i++) {
      sumTileWidthsForThisRow += tilesWidths[i];
    }

    // We start drawing our tiles(rect) at an x-position of 0.
    // When we draw the next tile, we draw it at the last x-position + last tile's width.
    let currentTileXpos = 0;
    for (let i = 0; i < tilesWidths.length; i++) {
      // Generates gaps in the pattern.
      if (random() < 0.45) {
        // Mapping tiles positions to canvas width.
        const w = map(tilesWidths[i], 0, sumTileWidthsForThisRow, 0, width);
        const h = tileHeight * 1.5;
        // New radial gradient ellipse positions
        // Two ellipses needed, inner + outer.
        // These blend into one another to produce a radial gradient.
        const gx1 = map(currentTileXpos, 0, sumTileWidthsForThisRow, 0, width);
        const gy1 = tileHeight * j;
        const gx2 = gx1 + w;
        const gy2 = gy1 + h;
        /*
          Index used to specify colour selected from array.
          Note counter can go into the 2000's.
          Index will only ever evaluate to a number between 0 and colours.
        */
        const index = counter % colours;
        // Defining gradient colour stops, alter hue for variation.
        const col1 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
        const col2 = color(hueValues[index] - 50, saturationValues[index], brightnessValues[index], alphaValue);
        // (x0, y0, r0, x1, y1, r1) + colours passed.
        centreGradient(gx1, gy1, 0, gx2, gy2, max(w, h), col1, col2);
      }
      // Adding the width to find the x-pos for the next tile.
      currentTileXpos += tilesWidths[i];
      counter++;
    }
  }
}

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient
function centreGradient(x1, y1, r1, x2, y2, r2, c1, c2) {
  // Global canvas context p5.js variable.
  const ctx = drawingContext;
  // Starting circle positions of the gradient.
  const cx = x1 + (x2 - x1) / 2;
  const cy = y1 + (y2 - y1) / 2;
  const grd = ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
  // Specify the colours + position in a gradient object.
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
  // Set/return gradient used to fill the drawing.
	ctx.fillStyle = grd;
	ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}
