// ------------------------------------------------- //
// 21/01/19
// Evan MacHale - N00150552
// Shape > Grid with Angles but w/ img
// P_2_1_1_04 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_1_1_04
// ------------------------------------------------- //
`use strict`;

let canvas;

let number_of_tiles;
let tile_width;

const max_radius = 30;
const min_radius = 20;

let x_mouse;
let y_mouse;

const random_seed = 100;

let slider;

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

  sketch.setup = () => {
    let canvas_size = $('#canvas').width();
    // Sizing + appending the canvas to a div.
    canvas = sketch.createCanvas(canvas_size,canvas_size);
    // canvas.background(255);
    sketch.strokeCap(sketch.ROUND);
    canvas.parent('canvas');
    // Exercise variables
    slider = sketch.createSlider(0, 50, 1);
    slider.position(10, 10);
    slider.style('width', '80px');
    sketch.noStroke();
  }

  sketch.draw = () => {
    canvas.background(0);
    sketch.randomSeed(random_seed); // Stop continuous loop

    x_mouse = sketch.constrain(sketch.mouseX, 0, sketch.width);
    y_mouse = sketch.constrain(sketch.mouseY, 0, sketch.height);

    const slider_value = slider.value();
    number_of_tiles = slider_value
    tile_width = sketch.width / number_of_tiles;

    for (let grid_y = 0; grid_y < number_of_tiles; grid_y++) {
      for (let grid_x = 0; grid_x < number_of_tiles; grid_x++) {

        let x_shift = sketch.random(-x_mouse, x_mouse)/20;
        let y_shift = sketch.random(-y_mouse, y_mouse)/20;

        const x_pos = tile_width * grid_x + tile_width / 2;
        const y_pos = tile_width * grid_y + tile_width / 2;
        let angle = sketch.atan2(sketch.mouseY - y_pos, sketch.mouseX - x_pos);

        sketch.push();
          sketch.fill(255);
          sketch.translate(grid_x * tile_width + tile_width/2, grid_y * tile_width + tile_width/2);
          sketch.rotate(angle);
          sketch.ellipse(x_shift, y_shift, max_radius);
        sketch.pop();

        sketch.push(); // Static
          sketch.fill(0);
          sketch.translate(grid_x * tile_width + tile_width/2, grid_y * tile_width + tile_width/2);
          sketch.ellipse(0, 0, min_radius);
        sketch.pop();
      }
    }

  }

  // Saving meaningful parametre data.
  sketch.keyReleased = () => {
    if (sketch.key == 's' || sketch.key == 'S') sketch.saveCanvas(gd.timestamp(), 'png');

    if (sketch.key == '1') stroke_cap = sketch.ROUND;
    if (sketch.key == '2') stroke_cap = sketch.SQUARE;
    if (sketch.key == '3') stroke_cap = sketch.PROJECT;
  }
}

// Create p5 instance w/ new p5 constructor + specify parent for elements.
// Learnt from Hartmut <3.
const myp5 = new p5(seed,`canvas`);
