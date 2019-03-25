// ------------------------------------------------- //
// 14/01/19
// Evan MacHale - N00150552
// Shape > Grid
// P_2_1_1_01 in Book
// http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_1_1_01
// ------------------------------------------------- //

/*
  Re-cap
  Drawing patterns across a grid !!!
  Remember nested for loops

  Need to track number of tiles we want + tile widths:
  const number-of-tiles = 3
  const tile-width = width / number-of-tiles

  pseudo-code:
  for (grid-y ; i < number-of-tiles) {
    for (grid-x) {
      ...
    }
  }

  Then after we will apply translations
*/

// ------------------------------------------------- //
`use strict`;

let canvas;

let number_of_tiles = 20;
let tile_width;

let stroke_cap;

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
    //
    tile_width = sketch.width / number_of_tiles;
    sketch.rectMode(sketch.CENTER);
    stroke_cap = sketch.ROUND;
  }

  sketch.draw = () => {
    canvas.background(0);
    sketch.randomSeed(100); // Stop continuous loop

    /*
      Step 1
      Draw shape through grid
    */
    for (let grid_y = 0; grid_y < number_of_tiles; grid_y++) {
      for (let grid_x = 0; grid_x < number_of_tiles; grid_x++) {
        // sketch.rect(
        //   // (x, y, w , h)
        //   grid_x * tile_width,
        //   grid_y * tile_width,
        //   tile_width,
        //   tile_width
        // );

        /*
          Step 2
          Now draw at 0,0 so we can ROTATE then TRANSLATE to create a pattern
        */
        // sketch.push();
        // // We draw from centre and translate the grid PLUS half the tile width to centre the shapes !!!
        // sketch.translate(grid_x * tile_width + tile_width/2, grid_y * tile_width + tile_width/2);
        // sketch.rotate(0.2);
        // sketch.rect(0, 0, tile_width, tile_width);
        // sketch.pop();

        /*
          Step 3
          Draw lines + position + implement rotations
          We want to rotate lines to create a maze like pattern
        */
        x_mouse = sketch.constrain(sketch.mouseX, 0, sketch.width/2);
        y_mouse = sketch.constrain(sketch.mouseY, 0, sketch.height);

        x_mouse_stroke = sketch.map(x_mouse, 0, sketch.width, 1, 10);
        y_mouse_stroke = sketch.map(y_mouse, 0, sketch.height, 1, 10);

        sketch.strokeCap(stroke_cap);

        sketch.push();
          // We draw from centre and translate the grid PLUS half the tile width to centre the shapes !!!
          sketch.translate(grid_x * tile_width + tile_width/2, grid_y * tile_width + tile_width/2);
          // Normal distribution, not really random, remember bar chart
          let outcome = sketch.floor(sketch.random(2)); // 1 or 2
          if (outcome === 1) {
            sketch.rotate(0);
            sketch.strokeWeight(x_mouse_stroke);
          } else {
            sketch.rotate(Math.PI/2);
            sketch.strokeWeight(y_mouse_stroke);
          }
          sketch.line(-tile_width/2, tile_width/2, tile_width/2, -tile_width/2);
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
