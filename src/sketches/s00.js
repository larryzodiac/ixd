/*
  Evan MacHale - N00150552
  01.04.19
  00.js
*/

const id = 's00';
let elw;
let canvas;

// The seed that will spawn our p5 sketch.
const s00 = (p) => {

  p.setup = () => {
    elw = document.getElementById(id).offsetWidth;
    let canvas_size = elw;
    canvas = p.createCanvas(canvas_size,canvas_size);
    canvas.parent(id);
  }

  p.draw = () => {
    canvas.background(0);
  }
  
  p.windowResized = () => {
    p.resizeCanvas(elw, elw);
  }

}

export default s00;