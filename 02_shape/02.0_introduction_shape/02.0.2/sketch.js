// ------------------------------------------------- //
// 07/01/19
// Evan MacHale - N00150552
// Shape Introduction 02
// P_2_0_02 in Book
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
    canvas.background(0);
    sketch.stroke(255,25); // alpha for transparency
    sketch.strokeCap(sketch.SQUARE);
    sketch.noFill();
    canvas.parent('canvas');
  }

  sketch.draw = () => {
    // canvas.background(0);
    sketch.strokeWeight(stroke_weight);
    // mouseX's value can only exist within the size of the canvas
    x_mouse = sketch.constrain(sketch.mouseX, 0, sketch.width/2);
    y_mouse = sketch.constrain(sketch.mouseY, 0, sketch.height);

    radius = sketch.map(x_mouse, 0, sketch.width, 1, sketch.width); // radius arms constrained mouseX
    circle_arms = sketch.int(sketch.map(y_mouse, 0, sketch.height, 3, 5)); // number arms constrained mouseY
    stroke_weight = sketch.int(sketch.map(y_mouse, 0, sketch.height, 1, 3));
    angle = 6.28319 / circle_arms; // TWO_PI // 360

    // Drawn from 0,0 then grid translated down
    sketch.translate(sketch.width/2,sketch.height/2);
    sketch.rotate(y_mouse);

    // Draw a shape from given points
    sketch.beginShape();
    for (let i = 0; i < circle_arms; i++) {
      x_point = sketch.cos(angle * i) * radius; // x = cos(a) * r
      y_point = sketch.sin(angle * i) * radius; // Formula for points on circle
      sketch.curveVertex(x_point,y_point,sketch.random(0,100),sketch.random(0,100)); // Draw points to make up shape
    }
    sketch.endShape(sketch.CLOSE); // Close the paths used to draw the shape
  }

  // Saving meaningful parametre data.
  sketch.keyReleased = () => {
    if (sketch.key == 's' || sketch.key == 'S') sketch.saveCanvas(gd.timestamp(), 'png');
  }

}

// Create p5 instance w/ new p5 constructor + specify parent for elements.
// Learnt from Hartmut <3.
const myp5 = new p5(seed,`canvas`);
