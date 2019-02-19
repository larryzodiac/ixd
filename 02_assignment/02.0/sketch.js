// ------------------------------------------------- //
// 18/02/19
// Evan MacHale - N00150552
// ------------------------------------------------- //
/*
  Need Sliders:
  1. circle radius
  2. density
  3. font size
  4. randomness
  5. Text input
  6. Fill
  7. Stroke
*/
// ------------------------------------------------- //

`use strict`;

let canvas;

let plex;
let font_size = 500;
let typed_text = 'p5.js';
let image;

let point_density = 10;

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

  sketch.preload = () => {
    plex = sketch.loadFont('../../assets/IBMPlexSans-Regular.otf');
  }

  sketch.setup = () => {
    // canvas_size can be decimals, pixel array doesn't like it. i.e can't have pixel 0.5
    let canvas_width = sketch.floor($('#canvas').width());
    // Sizing + appending the canvas to a div.
    canvas = sketch.createCanvas(canvas_width, sketch.windowHeight);
    // canvas.background(255);
    canvas.parent('canvas');
    // Exercise variables
    // Slider from 'material.js'
    font_slider.min = 100;
    font_slider.max = 600;
    font_slider.value = 200;
  }

  sketch.draw = () => {
    canvas.background(0);
    sketch.fill(255);
    sketch.noStroke();

    setup_text();
    font_size = font_slider.value

    for (let y = 0; y < image.height; y += point_density) {
      for (let x = 0; x < image.width; x += point_density) {
        // Calculate the index for the pixels array from x and y
        let index = (x + y * image.width) * 4;
        let r = image.pixels[index];

        if (r < 128) {
          sketch.ellipse(x, y, 5, 5);
        }
      }
    }
  }

  const setup_text = () => {
    image = sketch.createGraphics(sketch.width, sketch.height);
    image.pixelDensity(1);
    image.background(255);
    image.textFont(plex);
    image.textSize(font_size);
    image.textAlign(sketch.CENTER, sketch.CENTER);
    image.text(typed_text, sketch.width/2, sketch.height/3);
    image.loadPixels();
  }

  // Saving meaningful parametre data.
  sketch.keyReleased = () => {
    // gd needs to be passed to sketch..
    // if (sketch.keyCode == sketch.CONTROL) sketch.saveCanvas(gd.timestamp(), 'png');
  }

  sketch.keyPressed = () => {
    if (sketch.keyCode == sketch.DELETE || sketch.keyCode == sketch.BACKSPACE) {
      if (typed_text.length > 0) {
        typed_text = typed_text.substring(0, typed_text.length - 1);
        setup_text();
      }
    }
  }

  sketch.keyTyped = () => {
    if (sketch.keyCode >= 32) {
      typed_text += sketch.key;
      setup_text();
    }
  }
}

// Create p5 instance w/ new p5 constructor + specify parent for elements.
// Learnt from Hartmut <3.
const myp5 = new p5(seed,`canvas`);
