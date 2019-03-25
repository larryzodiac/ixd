// ------------------------------------------------- //
// 17/09/2018
// Evan MacHale - N00150552
// Colour Spectrum in a Circle
// P_1_1_1_02 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_1_2_01
// ------------------------------------------------- //
'use strict';

let canvasSize;

let segments;
let angleStep;
const radius = 200;

function setup() {
  // Responsive jQuery canvas.
  // Can manipulate dimensions using css.
  canvasSize = $('#canvas').width();
  let canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  colorMode(HSB, 360, width, height);
  noStroke();
}

function draw() {
  // Mouse co-ordinate values constrained within canvas dimensions.
  // Used to alter number of segments in circle.
  // Cool effect I found:
  // background(0);
  segments = width / map(constrain(mouseX, 0, width), width, 0, 1, width);
  angleStep = 360 / segments;
  // https://p5js.org/reference/#/p5/beginShape
  // Triangle fan shape used to define segments.
  // First vertex is centre point, rest are surrounding points.
  beginShape(TRIANGLE_FAN);
    vertex(width / 2, height / 2);
    for (let angle = 0; angle <= 360; angle += angleStep) {
      const vx = width / 2 + cos(radians(angle)) * radius;
      const vy = height / 2 + sin(radians(angle)) * radius;
      vertex(vx, vy);
      fill(angle, mouseY, width);
    }
  endShape();
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
