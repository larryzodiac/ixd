/*
  Evan MacHale - N00150552
  01.04.19
  00.js
*/

const id = 's10';
let elw;
let canvas_height;
let canvas;
const tileCountX = 40;
const tileCountY = 10;
const hueValues = [];
const saturationValues = [];
const brightnessValues = [];

// The seed that will spawn our p5 sketch.
const s10 = (p) => {

  p.setup = () => {
    elw = document.getElementById(id).offsetWidth;
    canvas = p.createCanvas(elw,elw);
    canvas.parent(id);
    p.colorMode(p.HSB, 100);
    p.noStroke();
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = p.random(100);
      saturationValues[i] = p.random(100);
      brightnessValues[i] = p.random(100);
    }
  }

  p.draw = () => {
    const mX = p.constrain(p.mouseX, 0, p.width);
    const mY = p.constrain(p.mouseY, 0, p.height);
    let counter = 0;
    const currentTileCountX = p.int(p.map(mX, 0, p.width, 1, tileCountX));
    const currentTileCountY = p.int(p.map(mY, 0, p.height, 1, tileCountY));
    const tileWidth = p.width / currentTileCountX;
    const tileHeight = p.height / currentTileCountY;
    
    for (let gridY = 0; gridY < tileCountY; gridY++) {
      for (let gridX = 0; gridX < tileCountX; gridX++) {
        const posX = tileWidth * gridX;
        const posY = tileHeight * gridY;
        const index = counter % currentTileCountX;
        p.fill(hueValues[index], saturationValues[index], brightnessValues[index]);
        p.rect(posX, posY, tileWidth, tileHeight);
        counter++;
      }
    }
  }
  
  p.windowResized = () => {
    elw = document.getElementById(id).offsetWidth;
    p.resizeCanvas(elw,elw);
  }

}

export default s10;