/*
  Evan MacHale - N00150552
  01.04.19
  00.js
*/

const id = 's05';
let elw;
let canvas_height;
let canvas;
let c1, c2, colour;
const numLines = 30;

// The seed that will spawn our p5 sketch.
const s05 = (p) => {

  p.setup = () => {
    elw = document.getElementById(id).offsetWidth;
    elw < 768 ? canvas_height = elw * 2 : canvas_height = elw / 2;
    canvas = p.createCanvas(elw,canvas_height);
    canvas.parent(id);
    p.colorMode(p.RGB);
    c1 = p.color('#6a11cb');
    c2 = p.color('#2575fc');
  }

  p.draw = () => {
    p.frameRate(30);
    p.translate(p.width/2, p.height/2);
    p.background(255);
    
    // Draw multiple lines.
    for (let i = 0; i < numLines; i++) {

      // Interpolation.
      let amount = p.map(i, 0, numLines-1, 0, 1);
      colour = p.lerpColor(c1, c2, amount);
      p.stroke(colour);
      p.strokeWeight(i/15);

      // Setup co-ordinates.
      let x1 = p.x1(p.frameCount + i);
      let y1 = p.y1(p.frameCount + i);
      let x2 = p.x2(p.frameCount + i);
      let y2 = p.y2(p.frameCount + i);

      // Symmetry.
      p.line(x1, y1, x2, y2);
      p.line(-x1, -y1, -x2, -y2);
    };
  }
  
  p.x1 = (t) => {
    return Math.sin(t/50) * 100 + Math.sin(t/5) * 20;
  }

  p.y1 = (t) => {
    return Math.cos(t/10) * 200;
  }

  p.x2 = (t) => {
    return Math.sin(t/10) * 200 + Math.sin(t) * 2;
  }

  p.y2 = (t) => {
    return Math.cos(t/20) * 200 + Math.cos(t/10) * 30;
  }
  
  p.windowResized = () => {
    elw = document.getElementById(id).offsetWidth;
    elw < 768 ? canvas_height = elw * 2 : canvas_height = elw / 2;
    p.resizeCanvas(elw, canvas_height);
  }

}

export default s05;