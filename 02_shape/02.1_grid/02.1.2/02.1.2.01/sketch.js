// ------------------------------------------------- //
// 21/01/19
// Evan MacHale - N00150552
// Shape > Grid with Angles but w/ img
// P_2_1_1_04 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_1_1_04
// ------------------------------------------------- //
`use strict`;

let canvas;

let number_of_tiles = 10;
let tile_width;

let max_radius = 70;
let min_radius = 10;
let max_stroke = 10;
let min_stroke = 1;
let stroke_colour;

let x_mouse;
let y_mouse;

let circle_radius;
let circle_stroke;

let random_seed;

let img;

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

  sketch.preload = () => {
    img = sketch.loadImage('../../../../assets/hex.svg');
  }

  sketch.setup = () => {
    let canvas_size = $('#canvas').width();
    // Sizing + appending the canvas to a div.
    canvas = sketch.createCanvas(canvas_size,canvas_size);
    // canvas.background(255);
    sketch.stroke(255);
    sketch.strokeCap(sketch.ROUND);
    canvas.parent('canvas');
    // Exercise variables
    tile_width = sketch.width / number_of_tiles;
    sketch.noFill();
    stroke_colour = sketch.color(255, 0, 0, 150);
    random_seed = 100;
    sketch.rectMode(sketch.CENTER);
    img.loadPixels();
  }

  sketch.draw = () => {
    canvas.background(0);
    // sketch.randomSeed(random_seed); // Stop continuous loop

    x_mouse = sketch.constrain(sketch.mouseX, 0, sketch.width);
    y_mouse = sketch.constrain(sketch.mouseY, 0, sketch.height);

    circle_radius = sketch.map(x_mouse, 0, sketch.width, min_radius, max_radius);
    circle_stroke = sketch.map(y_mouse, 0, sketch.height, min_stroke, max_stroke);

    for (let grid_y = 0; grid_y < number_of_tiles; grid_y++) {
      for (let grid_x = 0; grid_x < number_of_tiles; grid_x++) {

        let x_shift = sketch.random(-x_mouse, x_mouse)/200;
        let y_shift = sketch.random(-y_mouse, y_mouse)/200;

        const x_pos = tile_width * grid_x + tile_width / 2;
        const y_pos = tile_width * grid_y + tile_width / 2;

        let angle = sketch.atan2(sketch.mouseY - y_pos, sketch.mouseX - x_pos);

        sketch.push();
          sketch.strokeWeight(circle_stroke);
          sketch.stroke(stroke_colour);
          sketch.translate(grid_x * tile_width + tile_width/2, grid_y * tile_width + tile_width/2);
          sketch.rotate(angle);
          // sketch.ellipse(x_shift, y_shift, circle_radius);
          // sketch.rect(x_shift, y_shift, circle_radius, circle_radius)
          sketch.image(img, x_shift, y_shift, circle_radius, circle_radius);
        sketch.pop();
      }
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
