/*
  Evan MacHale - N00150552
  01.04.19
  00.js
*/

const id = 's08';
let elw;
let canvas_height;
let canvas;
let hueRange;

// The seed that will spawn our p5 sketch.
const s08 = (p) => {

  p.setup = () => {
    elw = document.getElementById(id).offsetWidth;
    canvas = p.createCanvas(elw,elw);
    canvas.parent(id);
    hueRange = elw / 2;
    p.colorMode(p.HSB, hueRange, 100, 100);
    p.rectMode(p.CENTER);
    p.noStroke();
  }

  p.draw = () => {
    p.background(255);
    
    p.background(p.mouseY / 2, 100, 100);
    p.translate(p.width / 2, p.height / 2);
    p.fill(hueRange - (p.mouseY / 2), 100, 100);
    p.rect(0, 0, p.mouseX, p.mouseY);
  }
  
  p.windowResized = () => {
    elw = document.getElementById(id).offsetWidth;
    p.resizeCanvas(elw,elw);
  }

}

export default s08;