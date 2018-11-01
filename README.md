```
// ------------------------------------------------- //
// 1/11/2018
// Evan MacHale - N00150552.
// http://www.generative-gestaltung.de/
// Version 1
// ------------------------------------------------- //
// Text from pixels (grid) parametres
let textTyped = "X";

let font;
let fontSize = 700;
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
let agents = [];
let agentCount = 4000;
let noiseScale = 300;
let noiseStrength = 10;
let overlayAlpha = 10;
let agentAlpha = 90;
let strokeWidth = 0.3;
let drawMode = 1;

// ------------------------------------------------- //
// Create agents / invoke graphic
function setup() {
  createCanvas(windowWidth, windowHeight);
  setupText();
  for(let i = 0; i < agentCount; i++) {
    agents[i] = new Agent();
  }
}

function draw() {
  fill(255, overlayAlpha);
  noStroke();
  rect(0, 0, width, height);
  // Draw agents
  stroke(0, agentAlpha);
  for (let i = 0; i < agentCount; i++) {
    // Draw agent + apply noise movement
    // agents[i].update1(noiseScale, noiseStrength, strokeWidth);
    // Find pos of every agent??????
    // console.log(agents[i].vector.x);
    // Loop through text graphic + check to see if overlap?????
    // Calculate the index for the pixels array from x and y
    // Index? pos of pixel? matches vector??
    let index = floor(floor(agents[i].vector.x) + floor(agents[i].vector.y) * textImg.width) * 4;
    // console.log(index);
    let red = textImg.pixels[index];
    // console.log(agents[i].vector.x + " " + agents[i].vector.y);
    if (red < 100) {
      //ellipse(agents[i].vector.x, agents[i].vector.y, 5, 5);
      agents[i].update1(10, 10, strokeWidth);
    } else {
      agents[i].update1(noiseScale, noiseStrength, strokeWidth);
    }
  }
}

// ------------------------------------------------- //

var Agent = function() {
  this.vector = createVector(random(width), random(height));
  this.vectorOld = this.vector.copy();
  this.stepSize = random(1, 5);
  this.isOutside = false;
  this.angle;
}

Agent.prototype.update = function(strokeWidth) {
  this.vector.x += cos(this.angle) * this.stepSize;
  this.vector.y += sin(this.angle) * this.stepSize;
  this.isOutside = this.vector.x < 0 || this.vector.x > width || this.vector.y < 0 || this.vector.y > height;
  if (this.isOutside) {
    this.vector.set(random(width), random(height));
    this.vectorOld = this.vector.copy();
  }
  strokeWeight(strokeWidth * this.stepSize);
  line(this.vectorOld.x, this.vectorOld.y, this.vector.x, this.vector.y);
  this.vectorOld = this.vector.copy();
  this.isOutside = false;
}

Agent.prototype.update1 = function(noiseScale, noiseStrength, strokeWidth) {
  this.angle = noise(this.vector.x / noiseScale + frameCount/100, this.vector.y / noiseScale) * noiseStrength;
  this.update(strokeWidth);
}
```
