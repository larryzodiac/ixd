/*
  Evan MacHale - N00150552
  01.04.19
  00.js
*/

const id = 's03';
let elw;
let canvas_height;
let canvas;
let c1, c2, colour;
const numLines = 10;

// The seed that will spawn our p5 sketch.
const s03 = (p) => {

  p.setup = () => {
    elw = document.getElementById(id).offsetWidth;
    elw < 768 ? canvas_height = elw * 2 : canvas_height = elw / 2
    canvas = p.createCanvas(elw,canvas_height);
    canvas.parent(id);
    p.colorMode(p.RGB);
    c1 = p.color('#fa709a');
    c2 = p.color('#fee140');
  }

  p.draw = () => {
    p.translate(p.width/2,p.height/2);
    p.frameRate(30);
    p.scale(0.5);
    p.background(255);

    // Draw multiple lines.
    for (let i = 0; i < numLines; i++) {
      
      // Interpolation.
      let amount = p.map(i, 0, numLines-1, 0, 1);
      colour = p.lerpColor(c1, c2, amount);
      p.stroke(colour);
      p.strokeWeight(i/2);
      
      // Setup co-ordinates.
      let x1 = p.x1(p.frameCount + i);
      let y1 = p.y1(p.frameCount + i);
      let x2 = p.x2(p.frameCount + i);
      let y2 = p.y2(p.frameCount + i);

      // Opposite lines.
      p.line(x1, y2, x2, y1);
      p.line(-x1, -y2, -x2, -y1);
    };
  }
  
  p.x1 = (i) => {
    return Math.sin(i/10) * 500;
    // return p.map(Math.sin(i/10),-1,1,0,p.width*0.8)*500;
  }

  p.y1 = (i) => {
    return Math.cos(i/15) * 500;
    // return p.map(Math.cos(i/15) * 500,-1,1,0,p.width*0.8)*500;
  }

  p.x2 = (i) => {
    return Math.sin(i/15) * 100;
    // return p.map(Math.sin(i/15) * 100,-1,1,0,p.width*0.8)*100;
  }

  p.y2 = (i) => {
    return Math.cos(i/15) * 100;
    // return p.map(Math.cos(i/15) * 100,-1,1,0,p.width*0.8)*100;
  }
  
  p.windowResized = () => {
    elw = document.getElementById(id).offsetWidth;
    elw < 768 ? canvas_height = elw * 2 : canvas_height = elw / 2;
    p.resizeCanvas(elw, canvas_height);
  }

}

export default s03;