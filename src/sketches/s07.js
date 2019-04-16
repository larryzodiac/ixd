/*
  Evan MacHale - N00150552
  01.04.19
  00.js
*/

const id = 's07';
let elw;
let canvas_height;
let canvas;
let c1, c2, colour;
const numLines = 30;

// The seed that will spawn our p5 sketch.
const s07 = (p) => {

  p.setup = () => {
    elw = document.getElementById(id).offsetWidth;
    elw < 768 ? canvas_height = elw * 2 : canvas_height = elw;
    canvas = p.createCanvas(elw,canvas_height);
    canvas.parent(id);
    p.colorMode(p.RGB);
    c1 = p.color('#ff0844');
    c2 = p.color('#ffb199');
    p.strokeCap(p.SQUARE);
  }

  p.draw = () => {
    p.frameRate(20);
    p.background(255);
    
    p.push();
    p.translate(p.width/2, p.height/2);
    p.scale(0.2);
    // Draw multiple lines.
    for (let i = 0; i < numLines; i++) {

      // Interpolation.
      let amount = p.map(i, 0, numLines-1, 0, 1);
      colour = p.lerpColor(c1, c2, amount);
      p.stroke(colour);
      p.strokeWeight(i/1);

      // Setup co-ordinates.
      let x1 = p.x1(p.frameCount + i);
      let y1 = p.y1(p.frameCount + i);
      let x2 = p.x2(p.frameCount + i);
      let y2 = p.y2(p.frameCount + i);
      let x3 = p.x1(p.frameCount + i/2);
      let y3 = p.y1(p.frameCount + i/2);
      let x4 = p.x2(p.frameCount + i/2);
      let y4 = p.y2(p.frameCount + i/2);

      // Connecting grid movements.
      p.line(x1, y1, x2, y2);
      p.line(x2, y2, x3, y3);
      p.line(x3, y3, x4, y4);
      p.line(-x1, -y1, -x2, -y2);
      p.line(-x2, -y2, -x3, -y3);
      p.line(-x3, -y3, -x4, -y4);
    };
    p.pop();
       
    // for (let i = 0; i <= p.height*0.10; i++) {
    //   let amount = p.map(i, 0, p.height*0.10, 0, 2);
    //   let c = p.lerpColor(p.color('#fff'), p.color('#000'), amount);
    //   p.stroke(c);
    //   p.line(0, i, p.width, i);
    // }
  }
  
  // Parametric Math functions.
  p.x1 = (t) => p.map(Math.tan(t/100), 0, 1, p.width*0.25, p.width*0.75);
  p.y1 = (t) => p.map(Math.tan(t/50), 0, 1, p.height*0.25, p.height*0.75);
  p.x2 = (t) => p.map(Math.cos(t/10), 0, 1, p.width*0.25, p.width*0.75);
  p.y2 = (t) => p.map(Math.cos(t/20), 0, 1, p.height*0.25, p.height*0.75);
  
  p.windowResized = () => {
    elw = document.getElementById(id).offsetWidth;
    elw < 768 ? canvas_height = elw * 2 : canvas_height = elw;
    p.resizeCanvas(elw, canvas_height);
  }

}

export default s07;