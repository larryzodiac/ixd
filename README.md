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
let textTyped = "X";

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
let agents = [];
let agentCount = 1;
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
  // Draw agents
  stroke(0, agentAlpha);
  for (let i = 0; i < agentCount; i++) {
    // Draw agent + apply noise movement
    agents[i].update1(noiseScale, noiseStrength, strokeWidth);
    // Find pos of every agent??????
    // console.log(agents[i].vector.x);
    // Loop through text graphic + check to see if overlap?????
    for (let x = 0; x < textImg.width; x++) {
      for (let y = 0; y < textImg.height; y++) {
        // Calculate the index for the pixels array from x and y
        // Index? pos of pixel? matches vector??
        let index = (x + y * textImg.width) * 4;
        let red = textImg.pixels[index];
        // console.log(x,y);
        // if (agents[i].vector.x ) {
        //   ellipse(x, y, 2, 2);
        // }
      }
    }
  }
}
```
