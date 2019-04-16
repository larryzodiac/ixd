/*
  Evan MacHale - N00150552
  01.04.19
  00.js
*/

const id = 's06';
let elw;
let canvas_height;
let canvas;
let c1, c2, colour;
const numLines = 30;
const offset = 300;

// The seed that will spawn our p5 sketch.
const s06 = (p) => {

  p.setup = () => {
    elw = document.getElementById(id).offsetWidth;
    elw < 768 ? canvas_height = elw * 2 : canvas_height = elw;
    canvas = p.createCanvas(elw,canvas_height);
    canvas.parent(id);
    p.colorMode(p.RGB);
    c1 = p.color('#6a11cb');
    c2 = p.color('#2575fc');
  }

  p.draw = () => {
    p.frameRate(20);
    p.translate(p.width/2, p.height/2);
    p.scale(0.3);
    p.background(255);
    
    // Draw multiple lines.
    for (let i = 0; i < numLines; i++) {

      // Interpolation.
      let amount = p.map(i, 0, numLines-1, 0, 1);
      colour = p.lerpColor(c1, c2, amount);
      p.stroke(colour);
      p.strokeWeight(i/5);

      // Setup co-ordinates.
      let x1 = p.x1(p.frameCount + i);
      let y1 = p.y1(p.frameCount + i);
      let x2 = p.x2(p.frameCount + i);
      let y2 = p.y2(p.frameCount + i);

      // Second set of slower co-ordinates?
      let x3 = p.x1(p.frameCount + i / 2);
      let y3 = p.y1(p.frameCount + i / 2);
      let x4 = p.x2(p.frameCount + i / 2);
      let y4 = p.y2(p.frameCount + i / 2);

      // Symmetry.
      p.line(x1, y1, x2, y2);
      p.line(x2, y2, x3, y3);
      p.line(x3, y3, x4, y4);
      p.line(-x1, -y1, -x2, -y2);
      p.line(-x2, -y2, -x3, -y3);
      p.line(-x3, -y3, -x4, -y4);
    };
  }
  
  // Parametric Math functions.
  p.x1 = (t) => p.map(Math.sin(t/100), 0, 1, offset, p.width-offset);
  p.y1 = (t) => p.map(Math.tan(t/50), 0, 1, offset, p.height-offset);
  p.x2 = (t) => p.map(Math.sin(t/10), 0, 1, offset, p.width-offset);
  p.y2 = (t) => p.map(Math.cos(t/20), 0, 1, offset, p.height-offset);
  
  p.windowResized = () => {
    elw = document.getElementById(id).offsetWidth;
    elw < 768 ? canvas_height = elw * 2 : canvas_height = elw;
    p.resizeCanvas(elw, canvas_height);
  }

}

export default s06;