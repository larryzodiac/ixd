/*
  Evan MacHale - N00150552
  01.04.19
  00.js
*/

const id = 's04';
let elw;
let canvas;

// The seed that will spawn our p5 sketch.
const s04 = (p) => {

  p.setup = () => {
    elw = document.getElementById(id).offsetWidth;
    let canvas_size = elw;
    canvas = p.createCanvas(canvas_size,canvas_size);
    canvas.parent(id);
    p.colorMode(p.HSB);
  }

  p.draw = () => {
    p.translate(p.width/2,p.height/2);
    p.frameRate(30);
    p.stroke(0);
    p.background(255,0.5);

    for (let i = 0; i < 10; i++) {
      let x1 = p.x1(p.frameCount + i);
      let y1 = p.y1(p.frameCount + i);
      let x2 = p.x2(p.frameCount + i);
      let y2 = p.y2(p.frameCount + i);

      // Opposite lines.
      p.line(x1, y1, x2, y2);
      p.line(-x1, -y1, -x2, -y2);
      p.line(y1, x1, y2, x2);
      p.line(-y1, -x1, -y2, -x2);
    };
  }
  
  p.x1 = (i) => {
    return Math.sin(i/10) * 500;
  }

  p.y1 = (i) => {
    return Math.cos(i/15) * 500;
  }

  p.x2 = (i) => {
    return Math.sin(i/15) * 100;
  }

  p.y2 = (i) => {
    return Math.cos(i/15) * 100;
  }
  
  p.windowResized = () => {
    p.resizeCanvas(elw, elw);
  }

}

export default s04;