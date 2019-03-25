// ------------------------------------------------- //
// 20/02/19
// Evan MacHale - N00150552
// ------------------------------------------------- //
/*
  Starting with randomness
*/
// ------------------------------------------------- //

`use strict`;

let canvas;
let text_graphic;
let plex;

// Inputs
let font_size;
let typed_text = 'Gestaltung';
let shape_size;
let no_fill;
let no_stroke;
let stroke_weight;
let point_density;

let start_array;
let end_array;

let spawn_range;
let lerp = 0;

// ------------------------------------------------- //

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

  sketch.preload = () => {
    plex = sketch.loadFont('../assets/IBMPlexSans-Regular.otf');
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
    // font_slider.notifyChange = update_graphic();
    font_slider.listen('MDCSlider:change', () => update_graphic());
    // spawn slider
    spawn_range_slider.min = 1;
    spawn_range_slider.max = 500;
    spawn_range_slider.value = 30;
    spawn_range_slider.listen('MDCSlider:change', () => update_graphic());
    // point density
    point_density_slider.min = 1;
    point_density_slider.max = 50;
    point_density_slider.value = 4;
    point_density_slider.listen('MDCSlider:change', () => update_graphic());
    // point density
    shape_size_slider.min = 1;
    shape_size_slider.max = 30;
    shape_size_slider.value = 2;
    shape_size_slider.listen('MDCSlider:change', () => update_graphic());
    // stroke weight
    stroke_weight_slider.min = 1;
    stroke_weight_slider.max = 10;
    stroke_weight_slider.value = 1;
    stroke_weight_slider.listen('MDCSlider:change', () => update_graphic());
    // checkbox listeners
    no_fill_checkbox_input.addEventListener('click', () => update_graphic());
    no_stroke_checkbox_input.addEventListener('click', () => update_graphic());

    // Grabbing values from inputs
    font_size = font_slider.value;
    point_density = point_density_slider.value;
    shape_size = shape_size_slider.value;
    no_fill = no_fill_checkbox.checked;
    no_stroke = no_stroke_checkbox.checked;
    stroke_weight = stroke_weight_slider.value;
    spawn_range = spawn_range_slider.val

    // Defaults
    sketch.fill(0);
    sketch.noStroke();
    // sketch.frameRate(30);
    update_graphic();
  }

  // ------------------------------------------------- //

  sketch.draw = () => {
    sketch.randomSeed(1);
    sketch.background(255,50);
    draw_graphic();

    // Conditionals for values
    !no_fill ? sketch.noFill() : sketch.fill(0);
    !no_stroke ? sketch.noStroke() : sketch.stroke(0);
    sketch.strokeWeight(stroke_weight);

    start_array = [];
    end_array = [];

    for (let y = 0; y < text_graphic.height; y += point_density) {
      for (let x = 0; x < text_graphic.width; x += point_density) {
        // Calculate the index for the pixels array from x and y
        let index = (x + y * text_graphic.width) * 4;
        let r = text_graphic.pixels[index];

        if (r < 128) {
          start_array.push({
            x: x + sketch.random(-spawn_range, spawn_range),
            y: y + sketch.random(-spawn_range, spawn_range)
          });
          end_array.push({
            x: x,
            y: y,
          });
        }
      }
    }

    for (let i = 0; i < end_array.length; i++) {
      const x = sketch.lerp(start_array[i].x, end_array[i].x, lerp);
      const y = sketch.lerp(start_array[i].y, end_array[i].y, lerp);
      sketch.ellipse(x, y, shape_size);
    }

    if (lerp < 1) {
      lerp = lerp + 0.06;
    } else {
      lerp = 1;
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

  const update_graphic = () => {
    lerp = 0;
    // Grabbing values from inputs
    font_size = font_slider.value;
    point_density = point_density_slider.value;
    shape_size = shape_size_slider.value;
    no_fill = no_fill_checkbox.checked;
    no_stroke = no_stroke_checkbox.checked;
    stroke_weight = stroke_weight_slider.value;
    spawn_range = spawn_range_slider.value;
    draw_graphic();
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
