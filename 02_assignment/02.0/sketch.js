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
let font_size;
let typed_text = 'Gestaltung';
let text_graphic;
let shape_size;
let no_fill;
let no_stroke;
let stroke_weight;

let point_density;

// ------------------------------------------------- //

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

  sketch.preload = () => {
    plex = sketch.loadFont('../../assets/IBMPlexSans-Regular.otf');
  }

  // ------------------------------------------------- //

  sketch.setup = () => {
    // canvas_size can be decimals, pixel array doesn't like it. i.e can't have pixel 0.5
    let canvas_width = sketch.floor($('#canvas').width());
    canvas = sketch.createCanvas(canvas_width, sketch.windowHeight);
    canvas.parent('canvas');

    // Exercise variables
    text_graphic = sketch.createGraphics(sketch.width, sketch.height);

    // Sliders from 'material.js'
    // font size
    font_slider.min = 100;
    font_slider.max = 600;
    font_slider.value = 250;
    // point density
    point_density_slider.min = 1;
    point_density_slider.max = 50;
    point_density_slider.value = 4;
    // point density
    shape_size_slider.min = 1;
    shape_size_slider.max = 30;
    shape_size_slider.value = 2;
    // stroke weight
    stroke_weight_slider.min = 1;
    stroke_weight_slider.max = 10;
    stroke_weight_slider.value = 1;

    // Defaults
    sketch.fill(0);
    sketch.noStroke();
  }

  // ------------------------------------------------- //

  sketch.draw = () => {
    sketch.background(255);
    draw_graphic();

    // Grabbin values from inputs
    font_size = font_slider.value;
    point_density = point_density_slider.value;
    shape_size = shape_size_slider.value;
    no_fill = no_fill_checkbox.checked;
    no_stroke = stroke_checkbox.checked;
    stroke_weight = stroke_weight_slider.value;

    // Conditionals for values
    !no_fill ? sketch.noFill() : sketch.fill(0);
    !no_stroke ? sketch.noStroke() : sketch.stroke(0);
    sketch.strokeWeight(stroke_weight);

    for (let y = 0; y < text_graphic.height; y += point_density) {
      for (let x = 0; x < text_graphic.width; x += point_density) {
        // Calculate the index for the pixels array from x and y
        let index = (x + y * text_graphic.width) * 4;
        let r = text_graphic.pixels[index];

        if (r < 128) {
          sketch.ellipse(x, y, shape_size);
        }
      }
    }
  }

  // ------------------------------------------------- //

  const draw_graphic = () => {
    text_graphic.pixelDensity(1);
    text_graphic.background(255);
    text_graphic.textFont(plex);
    text_graphic.textSize(font_size);
    text_graphic.textAlign(sketch.CENTER, sketch.CENTER);
    text_graphic.text(typed_text, sketch.width/2, sketch.height/2.5);
    text_graphic.loadPixels();
  }

  // ------------------------------------------------- //

  sketch.windowResized = () => {
    let canvas_width = sketch.floor($('#canvas').width());
    sketch.resizeCanvas(canvas_width, sketch.windowHeight);
    draw_graphic();
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
        draw_graphic();
      }
    }
  }

  sketch.keyTyped = () => {
    if (sketch.keyCode >= 32) {
      typed_text += sketch.key;
      draw_graphic();
    }
  }

  // ------------------------------------------------- //

}

// Create p5 instance w/ new p5 constructor + specify parent for elements.
// Learnt from Hartmut <3.
const myp5 = new p5(seed,`canvas`);
