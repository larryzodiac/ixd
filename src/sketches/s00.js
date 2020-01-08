/*
  Evan MacHale - N00150552
  08.01.2020
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
    elw = document.getElementById(id).offsetWidth;
    p.resizeCanvas(elw, elw);
  }

}

export default s00;
