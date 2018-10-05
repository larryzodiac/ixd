// ------------------------------------------------- //
// 17/09/2018
// Evan MacHale - N00150552
// Perceptions of Colour
// Affected by neighbouring colours + shifting porportions of that colour to it's background.
// P_1_0_01 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_0_01
// https://p5js.org/reference/#/p5/colorMode
// ------------------------------------------------- //
let canvasSize;
let hueRange;

function setup() {
  canvasSize = $('#canvas').width();
  console.log(`Hue colour wheel range is from 0 to ${canvasSize} in this window.`);
  console.log(`This range is taken from the canvas width/height.`);
  // Sizing + appending the canvas to a div.
  let canvas = createCanvas(canvasSize,canvasSize);
  canvas.parent('canvas');
  // Hue, saturation + brightness.
  // colorMode(mode, [max])
  // 'Max' ranges -> Hue, 0 to 360.
  // In this case canvas width/height divided by 2 is the colour wheel.
  hueRange = canvasSize / 2;
  colorMode(HSB, hueRange, 100, 100);
  // Draws from centre of rectangles, instead of top left.
  rectMode(CENTER);
  noStroke();
}

function draw() {
  // MouseY divided by 2 gives us colour range of 0 to canvas size width.
  background(mouseY / 2, 100, 100);
  // Translate to the centre of our canvas
  translate(width / 2, height / 2);
  // Halfed mouse value is taken from the canvas size to produce values of inside the hue range.
  /*
    To give an example:
    On my surface canvasSize is logged at 500 x 500.
    The mouse is divided by 2 equalling 250.
    Then that value is subtracted from the canvasSize equalling 250.
    We then produce values between 250 and 0, the hue range for our colour wheel.
    But note it is 250 to 0, not 0 to 250.
    This effectively gives us two contrasting colours.
  */
  // console.log(`mouseXY is ${mouseY}`);
  // console.log(`background hue is ${mouseY / 2}`);
  // console.log(`Rectangle Hue is ${hueRange - (mouseY / 2)}`);
  fill(hueRange - (mouseY / 2), 100, 100);
  rect(0, 0, mouseX, mouseY);

  // background(mouseY / 2, 100, 100);
  // fill(360 - mouseY/2, 100, 100);
  // rect(360, 360, mouseX + 1, mouseX + 1);

  // background(360 - (mouseY / 2), 100, 100);
  // translate(width / 2, height / 2);
  // fill(mouseY / 2, 100, 100);
  // rect(0, 0, mouseX, mouseX);
}

function keyPressed(){
  if(key==='s' || key==='S'){
    saveCanvas(gd.timestamp() + '_mouseX_' + mouseX, 'png');
  }
}
