// ------------------------------------------------- //
// 28/10/2018
// Evan MacHale - N00150552.
// Colour Palettes w/ Rules.
// P_1_2_3_02 in Book.
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_2_3_02
// ------------------------------------------------- //
'use strict';

let canvasSize;

function setup() {
  // Responsive jQuery canvas.
  // Can manipulate dimensions using css.
  canvasSize = $('#canvas').width();
  const canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  colorMode(HSB, 100);
  noStroke();
}

function draw() {}
