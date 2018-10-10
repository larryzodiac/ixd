// ------------------------------------------------- //
// 08/10/2018
// Evan MacHale - N00150552
// Colour w/ Images
// P_1_2_1_02 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_2_2_01
// ------------------------------------------------- //
'use strict';

let canvasSize;

let img;
var colors = [];

function preload() {
  img = loadImage('../../../assets/redmond.png');
}

function setup() {
  canvasSize = $('#canvas').width();
  let canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  image(img, 0, 0);
  noStroke();
}

function draw() {
  // Two tiles is four the image divided in four; 2 x 2.
  var tileCount = floor(width / max(mouseX, 5));
  var rectSize = width / tileCount;

  img.loadPixels();
  colors = [];

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      // i is the index value in the color array of first rgba value (red) in the pixel
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }
  // console.log(colors);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}
