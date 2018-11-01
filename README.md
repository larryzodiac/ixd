# Creative-Coding
Year 4 Creative Coding Module w/ p5.js

Workshop v1

```
// ------------------------------------------------- //
// 1/11/2018
// Evan MacHale - N00150552.
// http://www.generative-gestaltung.de/
// Version 1
// ------------------------------------------------- //
// Text from pixels (grid) parametres
let textTyped = "ABC";

let font;
let fontSize = 250;
let textImg;

let pointDensity = 10;

// Load in our type
function preload() { font = loadFont("data/FreeSansBold.ttf"); }
// Pre-loading graphic outside our work
function setupText() {
  // create an offscreen graphics object to draw the text into
  textImg = createGraphics(width, height);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.text(textTyped, 100, fontSize + 50);
  textImg.loadPixels();
}
// ------------------------------------------------- //
// Noise 'agents' parametres
var agents = [];
var agentCount = 4000;
var noiseScale = 300;
var noiseStrength = 10;
var overlayAlpha = 10;
var agentAlpha = 90;
var strokeWidth = 0.3;
var drawMode = 1;

// ------------------------------------------------- //
// Create agents / invoke graphic
function setup() {
  createCanvas(windowWidth, windowHeight);
  setupText();
  for(var i = 0; i < agentCount; i++) {
    agents[i] = new Agent();
  }
}


function draw() {
  //
  fill(255, overlayAlpha);
  noStroke();
  rect(0, 0, width, height);

  // Draw agents
  stroke(0, agentAlpha);
  for (let i = 0; i < agentCount; i++) {
    if (drawMode == 1) agents[i].update1(noiseScale, noiseStrength, strokeWidth);
    else agents[i].update2(noiseScale, noiseStrength, strokeWidth);
  }
}

```
