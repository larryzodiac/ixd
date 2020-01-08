/*
  Evan MacHale - N00150552
  08.01.2020
  01.js
*/

const id = 'canvas';
let elw;
let canvas;
let font;

let count = 0;

// The seed that will spawn our p5 sketch.
const sketch = (p) => {

  p.preload = () => {
    font = p.loadFont('../../assets/IBMPlexSans-Regular.ttf');
  }

  p.setup = () => {
    elw = document.getElementById(id).offsetWidth;
    let canvas_size = elw;
    canvas = p.createCanvas(canvas_size,canvas_size);
    canvas.parent(id);
    p.textFont(font);
    p.textSize(40);
    p.textAlign(p.CENTER, p.CENTER);
    p.rectMode(p.CENTER);
  }

  p.draw = () => {
    p.clear();
    p.fill(0);
    p.text('IxD', p.width/2, p.width/2.05);
    p.noFill();

    count = p.constrain(p.mouseX, 10, p.width);
    // console.log(xPos);
    // let para = p.mouseY / p.height;
    let para = p.constrain(p.mouseY / p.height, 0, p.width);

    p.push();
      p.translate(p.width/2, p.height/2);
      p.stroke(0);
      for (let i = 0; i < count; i++) {
        p.rect(0, 0, p.width, p.height);
        p.scale(1 - 1.5 / count);
        p.rotate(para * 0.1);
      }
    p.pop();
    // console.log(para);
  }

  p.windowResized = () => {
    elw = document.getElementById(id).offsetWidth;
    p.resizeCanvas(elw, elw);
  }

}

export default sketch;
