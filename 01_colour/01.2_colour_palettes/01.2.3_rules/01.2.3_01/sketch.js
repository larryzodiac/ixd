// ------------------------------------------------- //
// 15/10/2018
// Evan MacHale - N00150552
// Colour Palettes w/ Rules
// P_1_2_3_01 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_2_3_01
// ------------------------------------------------- //
'use strict';

let canvasSize;

// let colours;
let cols = 10;
let colsWidths = [];
let colsTotal = 0;

function setup() {
  canvasSize = $('#canvas').width();
  let canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  colorMode(HSB,100);
  // let colours = [];
}

function draw() {
  colorMode(HSB,100);
  let colours = [];
  noLoop();

  for (var i = 0; i < 5; i++) {
    if (i % 2 == 0) {
      // let colour = color(random(50,100),100,100);
      let randomNumber = random(20, 100);
      let colour = color('hsb(30,100%,75%)');
      console.log(`colour loop: ${colour}`);
      colours.push(colour);
    } else {
      // let colour = color(random(200,255),100,100);
      let colour = color('hsb(50,100%,50%)');
      console.log(`colour loop: ${colour}`);
      colours.push(colour);
    }
  }

  for (var i = 0; i < cols; i++) {
    let xWidth = floor(random(10,100));
    colsWidths.push(xWidth);
  }

  for (var i = 0; i < colsWidths.length; i++) {
    colsTotal += colsWidths[i];
  }


  for (var i = 0; i < colours.length; i++) {
    rect(0, 0, colsWidths[i], height);
  }

  console.log(`colours: ${colours}`);
  console.log(colours);
  console.log(`colsWidths: ${colsWidths}`);
  console.log(`colsTotals: ${colsTotal}`);
}
