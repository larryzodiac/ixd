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

function draw() {
  // noLoop();
  // randomSeed(0);
  frameRate(1);

  /*
    We generate a specified amount of colours for our palette.
    However, we can add variety to our rules by using if() statments.
    Using the modulo operator, we check to see if our current iteration 'i'
    value is even -> i.e divisible by 2.
    Modulo operator divides numbers but finds the remainder.
    If divisible by 2, the remainder should evaluate to 0.
    Therefore, the if statment alternates between 0, 1.
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
  tileCountY = int(random(5, 30));
  tileHeight = height / tileCountY;


  /*
    Loop for every row.
    For every row we determine how many tiles count in the x-direction there are.
    We find
  */
  for (let j = 0; j <= tileCountY; j++) {

    // Keeps track of number of starting tiles per row.
    // Rows at the top have higher chance of less tiles.
    let tileCount = j;
    const tiles = [];

    /*
      Here we smash our tiles into fragments,
      keep track of the amount of new tiles we create from this,
      and add their widths to an array to be added up later,
      mapped to the width of the canvas.
    */
    for (let i = 0; i < tileCount; i++) {
      // random() returns floats between 0 and 1.
      if (random() < 0.075) {
        // Define how many fragments the tile will be broken up into.
        const fragments = int(random(2, 20));
        tileCount = tileCount + fragments;
        /*
          For each fragments, push into 'tiles' a random width.
          Why?
          We will use 'tileCount' to iterate through all tiles,
          then use 'tiles[i]' to add up all the widths.
          This is useful as we want to map the total row width to the canvas width.
        */
        for (let i = 0; i < fragments; i++) {
          tiles.push(random(2));
        }
      } else {
        tiles.push(random(2, 20));
      }
    }

    /*
     We find total width of all tiles.
     The total width may exceed the width of the canvas.
     Next we will map these partitions to fit.
    */
    let sumTileWidthsForThisRow = 0;
    for (let i = 0; i < tileCount; i++) {
      sumTileWidthsForThisRow += tiles[i];
    }

    /*

    */
    let sumTilesNow = 0;
    for (let i = 0; i < tiles.length; i++) {
      sumTilesNow += tiles[i];
      const x = map(sumTilesNow, 0, sumTileWidthsForThisRow, 0, width);
      const y = tileHeight * j;
      const w = -map(tiles[i], 0, sumTileWidthsForThisRow, 0, width);
      const h = tileHeight;
      const index = counter % colours;
      const col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      fill(col);
      rect(x, y, w, h);
      counter++;
    }
  }
}
