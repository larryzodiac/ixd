// ------------------------------------------------- //
// 11/11/2018
// Evan MacHale - N00150552
// Continuous Assessment 01.
// Generative Design Colour Experiment.
// Setup our sketch -> p5 instance mode.
// I want to play with line tool?
// ------------------------------------------------- //
`use strict`;

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

  sketch.setup = () => {
    const canvas = sketch.createCanvas(sketch.windowWidth,sketch.windowHeight);
    // Get rid of scroll bars.
    canvas.style(`display`,`block`);
  };

  sketch.draw = () => {
    // sketch.background(0);
    sketch.stroke(sketch.frameCount/10,0,50);
    // Pass frameCount to Sine function.
    sketch.line(sketch.windowWidth/2, sketch.windowHeight, sketch.wow(sketch.frameCount), sketch.wow(sketch.frameCount/1000));
  };

  sketch.wow = (x) => {
    return Math.sin(x/10)*5000;
  }

  sketch.windowResized = () => {
    sketch.resizeCanvas(sketch.windowWidth,sketch.windowHeight);
  }
};

// Create p5 instance w/ new p5 constructor + specify parent for elements.
// Learnt from Hartmut <3.
const myp5 = new p5(seed,`canvas`);
