// ------------------------------------------------- //
// 21/11/2018
// Evan MacHale - N00150552
// Continuous Assessment 01.
// Generative Design Colour Experiment.
// Type - IBM Plex Sans
// ------------------------------------------------- //
`use strict`;

let time = 0;

const numLines = 45;
let c1, c2, colour;
let type;

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

  sketch.preload = () => {
    // otf
    type = sketch.loadFont('../../assets/IBMPlexSans-Bold.otf');
  }

  sketch.setup = () => {
    // Canvas A4.
    const canvas = sketch.createCanvas(1240,1748);
    sketch.background(250);
    // RGB is better for web gradients.
    sketch.colorMode(sketch.RGB);
    // Dertermined gradient.
    c1 = sketch.color('#fad0c4');
    c2 = sketch.color('#ffd1ff');
    sketch.strokeCap(sketch.SQUARE);

    sketch.textFont(type);
    sketch.textSize(100);
  }

  sketch.draw = () => {

    sketch.fill(0);
    sketch.text('Gestaltung', 100, 100);

    sketch.translate(sketch.width/2,sketch.height/2);
    sketch.scale(2);
    sketch.frameRate(20);
    sketch.background(250);

    // Draw multiple lines.
    for (let i = 0; i < numLines; i++) {

      // Interpolation.
      let amount = sketch.map(i, 0, numLines-1, 0, 1);
      colour = sketch.lerpColor(c1, c2, amount);
      sketch.stroke(colour);
      sketch.strokeWeight(i/15);

      // Setup co-ordinates.
      let x1 = sketch.x1(time + i);
      let y1 = sketch.y1(time + i);
      let x2 = sketch.x2(time + i);
      let y2 = sketch.y2(time + i);

      // Symmetry.
      sketch.line(x1, y1, x2, y2);
      sketch.line(-x1, -y1, -x2, -y2);

      // Wowee iterator.
      time += Math.PI/sketch.frameCount;
    };
  }

  // Parametric Math functions.
  sketch.x1 = (t) => {
    return Math.sin(t/50) * 100 + Math.sin(t/5) * 20;
  }

  sketch.y1 = (t) => {
    return Math.cos(t/10) * 200;
  }

  sketch.x2 = (t) => {
    return Math.sin(t/10) * 200 + Math.sin(t) * 2;
  }

  sketch.y2 = (t) => {
    return Math.cos(t/20) * 200 + Math.cos(t/10) * 30;
  }

  // Saving meaningful parametre data.
  sketch.keyReleased = function() {
    if (sketch.key == 's' || sketch.key == 'S') sketch.saveCanvas(gd.timestamp() + '_Colour1:_' + c1 + '_Colour2:_' + c2, 'png');
  }

}

// Create p5 instance w/ new p5 constructor + specify parent for elements.
// Learnt from Hartmut <3.
const myp5 = new p5(seed,`canvas`);
