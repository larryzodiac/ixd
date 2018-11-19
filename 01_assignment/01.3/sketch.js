// ------------------------------------------------- //
// 19/11/2018
// Evan MacHale - N00150552
// Continuous Assessment 01.
// Generative Design Colour Experiment.
// Can we add interpolation???
// ------------------------------------------------- //
`use strict`;

const numLines = 30;
let c1, c2, colour;

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

  sketch.setup = () => {
    const canvas = sketch.createCanvas(1240,1748);
    sketch.background(10);
    sketch.colorMode(sketch.HSB);
      c1 = sketch.color(sketch.random(255),sketch.random(100),sketch.random(255));
      c2 = sketch.color(sketch.random(255),sketch.random(100),sketch.random(255));
    // c1 = sketch.color('#fa709a');
    // c2 = sketch.color('#fee140');
    sketch.strokeCap(sketch.SQUARE);
  }

  sketch.draw = () => {
    sketch.translate(sketch.width/2,sketch.height/2);
    sketch.scale(5);
    sketch.frameRate(20);
    // sketch.stroke(0,0,sketch.frameCount/2);
    sketch.background(10,0.5);

    for (let i = 0; i < numLines; i++) {

      let amount = sketch.map(i, 0, numLines-1, 0, 1);
      colour = sketch.lerpColor(c1, c2, amount);
      sketch.stroke(colour);
      sketch.strokeWeight(i/10);

      let x1 = sketch.x1(sketch.frameCount + i);
      let y1 = sketch.y1(sketch.frameCount + i);
      let x2 = sketch.x2(sketch.frameCount + i);
      let y2 = sketch.y2(sketch.frameCount + i);

      sketch.line(x1, y1, x2, y2);
      sketch.line(-x1, -y1, -x2, -y2);
      sketch.line(y1, x1, y2, x2);
      sketch.line(-y1, -x1, -y2, -x2);
    };
  }

  sketch.x1 = (i) => {
    return Math.tan(i/15) * 500;
  }

  sketch.y1 = (i) => {
    return Math.sin(i/50) * 500;
  }

  sketch.x2 = (i) => {
    return Math.sin(i/15) * 100;
  }

  sketch.y2 = (i) => {
    return Math.cos(i/15) * 100;
  }

}

// Create p5 instance w/ new p5 constructor + specify parent for elements.
// Learnt from Hartmut <3.
const myp5 = new p5(seed,`canvas`);
