// ------------------------------------------------- //
// 19/11/2018
// Evan MacHale - N00150552
// Continuous Assessment 01.
// Generative Design Colour Experiment.
// Discovering different patterns.
// I can add '-' operator to produce opposites.
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
    sketch.stroke(0,0,sketch.frameCount/2);
    sketch.background(10,0.5);

    for (let i = 0; i < 10; i++) {
      let x1 = sketch.x1(sketch.frameCount + i);
      let y1 = sketch.y1(sketch.frameCount + i);
      let x2 = sketch.x2(sketch.frameCount + i);
      let y2 = sketch.y2(sketch.frameCount + i);

      // Opposite lines.
      sketch.line(x1, y1, x2, y2);
      sketch.line(-x1, -y1, -x2, -y2);
      // Spiral
      // sketch.line(x1, y2, x2, y1);
      // sketch.line(-x1, -y2, -x2, -y1);
      sketch.line(y1, x1, y2, x2);
      sketch.line(-y1, -x1, -y2, -x2);
    };
  }

  sketch.x1 = (i) => {
    return Math.sin(i/10) * 500;
  }

  sketch.y1 = (i) => {
    return Math.cos(i/15) * 500;
  }

  sketch.x2 = (i) => {
    return Math.sin(i/15) * 100;
  }

  sketch.y2 = (i) => {
    return Math.cos(i/15) * 100;
  }


  // CONE STYLE
  // sketch.x1 = (i) => {
  //   return Math.sin(i/50) * 100;
  // }
  //
  // sketch.y1 = (i) => {
  //   return Math.cos(i/10) * 200;
  // }
  //
  // sketch.x2 = (i) => {
  //   return Math.cos(i/50) * 500;
  // }
  //
  // sketch.y2 = (i) => {
  //   return Math.tan(i/100) * 50;
  // }

  // Spiral
  // sketch.x1 = (i) => {
  //   return Math.tan(i/10) * 400;
  // }
  //
  // sketch.y1 = (i) => {
  //   return Math.tan(i/10) * 200;
  // }
  //
  // sketch.x2 = (i) => {
  //   return Math.cos(i/10) * 800;
  // }
  //
  // sketch.y2 = (i) => {
  //   return Math.tan(i/2);
  // }
}

// Create p5 instance w/ new p5 constructor + specify parent for elements.
// Learnt from Hartmut <3.
const myp5 = new p5(seed,`canvas`);
