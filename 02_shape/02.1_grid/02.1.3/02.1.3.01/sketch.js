// ------------------------------------------------- //
// 04/02/19
// Evan MacHale - N00150552
// Shape > Images w/ Text
// ------------------------------------------------- //
`use strict`;

let canvas;
let plex;
let image;

const number_of_tiles = 500;
let tile_width;

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

  sketch.preload = () => {
    plex = sketch.loadFont('../../../../assets/IBMPlexSans-Regular.otf');
  }

  sketch.setup = () => {
    let canvas_size = $('#canvas').width();
    // Sizing + appending the canvas to a div.
    canvas = sketch.createCanvas(canvas_size,canvas_size);
    canvas.background(255);
    sketch.strokeCap(sketch.ROUND);
    canvas.parent('canvas');
    // Exercise variables
    Math.floor(tile_width = sketch.width / number_of_tiles);
    sketch.ellipseMode(sketch.CORNER);
    setup_text();
    sketch.image(image, 0, 0);
  }

  sketch.draw = () => {
    // canvas.background(255);
    sketch.fill(0)
    sketch.noStroke();

    for (let grid_y = 0; grid_y < image.height; grid_y += tile_width) {
      for (let grid_x = 0; grid_x < image.width; grid_x += tile_width) {

        const index = (grid_x + grid_y * image.width) * 4;
        // Red
        const r = image.pixels[index];

        if (r === 0) {
          sketch.ellipse(grid_x * tile_width, grid_y * tile_width, 5);
          // ellipse(x, y, mouseX/50, mouseY/50);
        } else {
          // ellipse(x, y, 10, 10);
        }

      }
    }
  }

  const setup_text = () => {
    image = sketch.createGraphics(sketch.width, sketch.height);
    image.pixelDensity(1);
    image.background(125);
    image.textFont(plex);
    image.textSize(200);
    image.textAlign(sketch.CENTER);
    image.text('p5.js', sketch.width/2, sketch.height/1.8);
    image.loadPixels();
  }

  // Saving meaningful parametre data.
  sketch.keyReleased = () => {
    if (sketch.key == 's' || sketch.key == 'S') sketch.saveCanvas(gd.timestamp(), 'png');
  }
}

// Create p5 instance w/ new p5 constructor + specify parent for elements.
// Learnt from Hartmut <3.
const myp5 = new p5(seed,`canvas`);
