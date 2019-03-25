// ------------------------------------------------- //
// 28/10/2018
// Evan MacHale - N00150552.
// Colour Palettes w/ Rules.
// P_1_2_3_02 in Book.
// Generating a specific color palette and some random 'rect-tilings'
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_2_3_02
// ------------------------------------------------- //
'use strict';

let canvasSize;

const colours = 40;
let counter = 0;
let tileCountY;
let tileHeight;

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
}

// ------------------------------------------------- //
// Five Steps:
// 1) Populate a colours array.
// 2) Use a loop to draw each row
//    2.1) Apply fragmentation to starting tiles in our row.
//    2.2) Add up all the tile widths to be used for mapping to the canvas.
//    2.3) Draw all tiles in the row.
// ------------------------------------------------- //

function draw() {
  frameRate(0.5);

  /*
    Like before, we generate a specified amount of colours for our palette.
    However, we can add variety to our rules by using if() statments.
    Using the modulo operator, we check to see if our current iteration 'i'
    value is even -> i.e divisible by 2.
    Modulo operator divides numbers but finds the remainder.
    If divisible by 2, the remainder should evaluate to 0.
    Therefore, the if statment alternates between 0, 1 continuously.
  */
  for (let i = 0; i < colours; i++) {
    // Un-comment to view modulo in action:
    // console.log(`modulo ${i} : ${i % 2}`);
    if (i % 2 == 0) {
      hueValues[i] = random(40, 90);
      saturationValues[i] = 50;
      brightnessValues[i] = random(15, 100);
    } else {
      hueValues[i] = 55;
      saturationValues[i] = random(20, 60);
      brightnessValues[i] = random(15, 80);
    }
  }

  // Assign these variables inside scope of p5 functionality.
  // int() and random() only accessible in draw() or setup()
  // Number of rows, and row heights.
  tileCountY = int(random(5, 30));
  tileHeight = height / tileCountY;

  // Loop for every row.
  for (let j = 0; j <= tileCountY; j++) {
    /*
      We keep track of number of starting tiles per row for loop + drawing.
      Rows at the top have higher chance of less tiles, due to for loop.
      Also, note:
      Need + 1 as when we fragment later.
      j starts at 0, i starts at 0:
      for (let i = 0; i < tileCount; i++) {
      Leads to a missing row and undefined first index in the tilesWidths array.
    */
    let tileCount = j + 1;
    // Keeps a list of every new tile's width.
    const tilesWidths = [];

    /*
      Here we smash our starting tiles(count) into fragments,
      keep track of the amount of new tiles we create from this,
      and add their widths to an array to be added up later,
      each tile will be mapped to the dimensions of the canvas.
    */
    for (let i = 0; i < tileCount; i++) {
      // random() returns floats between 0 and 1.
      if (random() < 0.075) {
        // Define how many fragments the tile will be broken up into.
        const fragments = int(random(2, 20));
        // New tile total for this row.
        tileCount = tileCount + fragments;
        /*
          For each fragment, push into 'tiles' a random width.
          Why?
          We will use 'tileCount' to iterate through all tiles,
          then use 'tilesWidths[i]' to add up all the widths.
          This is useful as we want to map the total row width to the canvas width when drawing.
        */
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

    /*
      We start drawing our tiles(rect) at an x-position of 0.
      When we draw the next tile, we draw it at the last x-position + last tile's width.
      Therefore, to draw rects we must start at zero and keep adding the widths of previous tiles,
      to get the new x-position of the next tile.
    */
    let currentTileXpos = 0;
    for (let i = 0; i < tilesWidths.length; i++) {
      // Starting at zero, using the map.
      const x = map(currentTileXpos, 0, sumTileWidthsForThisRow, 0, width);
      // Adding the width to find the x-pos for the next tile.
      currentTileXpos += tilesWidths[i];
      const y = tileHeight * j;
      const w = map(tilesWidths[i], 0, sumTileWidthsForThisRow, 0, width);
      const h = tileHeight;
      /*
        Index used to specify colour selected from array.
        N.B, use of modulo here means that once finished, we may cycle through the colours array again.
        Note counter can go into the 2000's.
        i.e there will be more than 40 fragmented tiles.
        So when counter is 2000:
        2000 % 40 = 0
        So index will only ever evaluate to a number between 0 and colours.
      */
      const index = counter % colours;
      const col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      fill(col);
      rect(x, y, w, h);
      counter++;
    }
  }
}
