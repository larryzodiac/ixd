// ------------------------------------------------- //
// 17/09/2018
// Evan MacHale - N00150552
// Colour Spectrum in a Circle
// P_1_1_1_02 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_1_2_01
// ------------------------------------------------- //
'use strict';

let canvasSize;

let segments = 360;
let angleStep = 360 / segments;
let radius = 200;

function setup() {
  canvasSize = $('#canvas').width();
  let canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  colorMode(HSB, 360, width, height);
  noStroke();
}

function draw() {
  beginShape(TRIANGLE_FAN);
    vertex(width / 2, height / 2);
    for (var angle = 0; angle <= 360; angle += angleStep) {
      var vx = width / 2 + cos(radians(angle)) * radius;
      var vy = height / 2 + sin(radians(angle)) * radius;
      vertex(vx, vy);
      fill(angle, mouseX, mouseY);
    }
  endShape();
}

function keyPressed(){
  if(key==='s' || key==='S'){
    saveCanvas(gd.timestamp() + '_mouseX_' + mouseX, 'png');
  }
}
