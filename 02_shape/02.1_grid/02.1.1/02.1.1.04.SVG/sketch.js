// ------------------------------------------------- //
// 21/01/19
// Evan MacHale - N00150552
// Shape > Grid with Angles but w/ SVG
// P_2_1_1_04 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_1_1_04
// ------------------------------------------------- //
`use strict`;

let canvas;

let number_of_tiles = 20;
let tile_width;

let svg

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

    sketch.preload = () => {
      svg = loadImage('data/module_1.svg');
    }

  sketch.setup = () => {
    let canvas_size = $('#canvas').width();
    // Sizing + appending the canvas to a div.
    canvas = sketch.createCanvas(canvas_size,canvas_size);
    // canvas.background(255);
    sketch.stroke(255);
    sketch.strokeCap(sketch.ROUND);
    canvas.parent('canvas');
    //
    tile_width = sketch.width / number_of_tiles;
    sketch.imageMode(sketch.CENTER);
  }

  sketch.draw = () => {
    canvas.background(0);
    sketch.randomSeed(100); // Stop continuous loop

    for (let grid_y = 0; grid_y < number_of_tiles; grid_y++) {
      for (let grid_x = 0; grid_x < number_of_tiles; grid_x++) {

        const posX = tile_width * grid_x + tile_width / 2;
        const posY = tile_width * grid_y + tile_width / 2;

        // let angle = sketch.atan((sketch.mouseY - grid_y * tile_width) / (sketch.mouseX - grid_x * tile_width));
        // calculate angle between mouse position and actual position of the shape
        let angle = sketch.atan2(sketch.mouseY - posY, sketch.mouseX - posX);

        sketch.push();
          sketch.translate(grid_x * tile_width + tile_width/2, grid_y * tile_width + tile_width/2);
          sketch.rotate(angle);
          // sketch.line(-tile_width/2, tile_width/2, tile_width/2, -tile_width/2);
          sketch.image(svg,0,0,50,50);
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
