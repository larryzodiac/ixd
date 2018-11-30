// ------------------------------------------------- //
// 11/11/2018
// Evan MacHale - N00150552
// Continuous Assessment 01.
// Generative Design Colour Experiment.
// Setup our sketch -> p5 instance mode.
// Playing with the line tool.
// Multiple lines drawn in a loop.
// https://www.openprocessing.org/sketch/210709
// https://youtu.be/ZrKgyY5aDvA?t=491
// ------------------------------------------------- //
`use strict`;

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

  sketch.setup = () => {
    const canvas = sketch.createCanvas(1240,1748);
    sketch.background(10);
    sketch.colorMode(sketch.HSB);
  }

  sketch.draw = () => {
    sketch.translate(sketch.width/2,sketch.height/2);
    sketch.frameRate(30);
    // Stroke weight experimentation
    sketch.stroke(sketch.frameCount/10,50,100);
    sketch.background(10,0.5);

    // Multiple lines -> Pattern
    for (let i = 0; i < 30; i++) {
      let x1 = sketch.x1(sketch.frameCount + i);
      let y1 = sketch.y1(sketch.frameCount + i);
      let x2 = sketch.x2(sketch.frameCount + i);
      let y2 = sketch.y2(sketch.frameCount + i);
      sketch.line(x1, y1, x2, y2);
    };
  }

  sketch.x1 = (i) => {
    return Math.sin(i/10) * 100 + Math.sin(i/15) * 1000;
    // return Math.sin(i/10) * 500;
  }

  sketch.y1 = (i) => {
    // Can use map to change sizes?
    return sketch.map(Math.sin(i/10),-1,1,100,sketch.width-100)
    // return Math.cos(i/15) * 500;
  }

  sketch.x2 = (i) => {
    return Math.sin(i/10) * 500 + Math.sin(i) * 2;
    // return Math.sin(-i/15) * 500;
  }

  sketch.y2 = (i) => {
    return Math.sin(i/50) * 1000 + Math.cos(i/12) * 20;
    // return Math.cos(i/15) * 100;
  }

}

// Create p5 instance w/ new p5 constructor + specify parent for elements.
// Learnt from Hartmut <3.
const myp5 = new p5(seed,`canvas`);
