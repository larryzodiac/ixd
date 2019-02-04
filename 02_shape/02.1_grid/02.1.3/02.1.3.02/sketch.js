// ------------------------------------------------- //
// 04/02/19
// Evan MacHale - N00150552
// Shape > Images w/ Text
// ------------------------------------------------- //
`use strict`;

let canvas;
let font;
const typed_text = 'p5.js';

// The seed that will spawn our p5 sketch.
const seed = (sketch) => {

  // sketch.preload = () => {
  //   plex = sketch.loadFont('../../../../assets/IBMPlexSans-Regular.otf');
  // }

  sketch.setup = () => {
    let canvas_size = $('#canvas').width();
    // Sizing + appending the canvas to a div.
    canvas = sketch.createCanvas(canvas_size,canvas_size);
    canvas.background(255);
    sketch.strokeCap(sketch.ROUND);
    canvas.parent('canvas');
    // Exercise variables
    opentype.load('../../../../assets/IBMPlexSans-Regular.otf', function(error, f) {
      if (error) {
        console.log(error);
      } else {
        font = f;
        sketch.loop();
      }
    });
  }

  sketch.draw = () => {
    if (!font) return;
    canvas.background(255);
    sketch.fill(0);
    sketch.noStroke();

    if (typed_text.length > 0) {
      const font_path = font.getPath(typed_text, sketch.width/2, sketch.height/2, 200);
      let path = new g.Path(font_path.commands);
      path = g.resampleByLength(path, 10);

      let d = 5;
      for (let i = 0; i < path.commands.length; i++) {
        let pnt = path.commands[i];
        sketch.ellipse(pnt.x, pnt.y, d);
      }
    }
  }

  // const setup_text = () => {
  //   image = sketch.createGraphics(sketch.width, sketch.height);
  //   image.pixelDensity(1);
  //   image.background(125);
  //   image.textFont(plex);
  //   image.textSize(200);
  //   image.textAlign(sketch.CENTER);
  //   image.text('p5.js', sketch.width/2, sketch.height/1.8);
  //   image.loadPixels();
  // }

  // Saving meaningful parametre data.
  sketch.keyReleased = () => {
    if (sketch.key == 's' || sketch.key == 'S') sketch.saveCanvas(gd.timestamp(), 'png');
  }
}

// Create p5 instance w/ new p5 constructor + specify parent for elements.
// Learnt from Hartmut <3.
const myp5 = new p5(seed,`canvas`);
