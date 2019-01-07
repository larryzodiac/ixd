// ------------------------------------------------- //
// 07/01/19
// Evan MacHale - N00150552
// Grid class
// ------------------------------------------------- //

// ------------------------------------------------- //
// 24/09/2018
// Evan MacHale - N00150552
// Colour Interpolation
// P_2_0_01 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_0_01
// ------------------------------------------------- //
`use strict`;

let canvas;

let radius;
let circle_arms;
let angle;

let x_point;
let y_point;

let x_mouse;
let y_mouse;

let mouse_radius;
let stroke_weight;

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

  sketch.setup = () => {
    let canvas_size = $('#canvas').width();
    // Sizing + appending the canvas to a div.
    canvas = sketch.createCanvas(canvas_size,canvas_size);
    // canvas.background(255);
    sketch.stroke(255);
    sketch.strokeCap(sketch.SQUARE);
    canvas.parent('canvas');
  }

  sketch.draw = () => {
    canvas.background(0);
    sketch.strokeWeight(stroke_weight);
    // mouseX's value can only exist within the size of the canvas
    x_mouse = sketch.constrain(sketch.mouseX, 0, sketch.width/2);
    y_mouse = sketch.constrain(sketch.mouseY, 0, sketch.height);

    radius = sketch.map(x_mouse, 0, sketch.width, 1, 400); // radius arms constrained mouseX
    circle_arms = sketch.int(sketch.map(y_mouse, 0, sketch.height, 1, 100)); // number arms constrained mouseY
    stroke_weight = sketch.int(sketch.map(y_mouse, 0, sketch.height, 1, 5));
    angle = 6.28319 / circle_arms; // TWO_PI // 360

    // Drawn from 0,0 then grid translated down
    sketch.translate(sketch.width/2,sketch.height/2);
    for (let i = 0; i < circle_arms; i++) {
      x_point = sketch.cos(angle * i) * radius; // x = cos(a) * r
      y_point = sketch.sin(angle * i) * radius; // Formula for points on circle
      sketch.line(0,0,x_point,y_point);
    }
  }

  // Saving meaningful parametre data.
  sketch.keyReleased = () => {
    if (sketch.key == 's' || sketch.key == 'S') sketch.saveCanvas(gd.timestamp(), 'png');
  }

}

// Create p5 instance w/ new p5 constructor + specify parent for elements.
// Learnt from Hartmut <3.
const myp5 = new p5(seed,`canvas`);
