/*
  Evan MacHale - N00150552
  01.04.19
  00.js
*/

const id = 's09';
let elw;
let canvas_height;
let canvas;
let coloursLeft = [];
let coloursRight = [];
let colours = [];
let tileCountX = 2;
let tileCountY = 10;
let interpolateShortest = true;

// The seed that will spawn our p5 sketch.
const s09 = (p) => {

  p.setup = () => {
    elw = document.getElementById(id).offsetWidth;
    canvas = p.createCanvas(elw,elw);
    canvas.parent(id);
    p.colorMode(p.HSB);
    p.noStroke();
    p.shakeColours();
  }

  p.draw = () => {
    tileCountX = p.int(p.map(p.constrain(p.mouseX, 0, p.width), 0, p.width, 2, 100));
    tileCountY = p.int(p.map(p.constrain(p.mouseY, 0, p.width), 0, p.width, 2, 10));

    let tileWidth = p.width / tileCountX;
    let tileHeight = p.width / tileCountY;
    let interCol;

    for (let gridY = 0; gridY < tileCountY; gridY++) {
      for (let gridX = 0; gridX < tileCountX; gridX++) {

        let col1 = coloursLeft[gridY];
        let col2 = coloursRight[gridY];
        let amount = p.map(gridX, 0, tileCountX - 1, 0, 1);

        if (interpolateShortest) {
          p.colorMode(p.RGB);
          interCol = p.lerpColor(col1, col2, amount);
          p.colorMode(p.HSB);
        } else {
          interCol = p.lerpColor(col1, col2, amount);
        }

        let posX = tileWidth * gridX;
        let posY = tileHeight * gridY;

        p.fill(interCol);
        p.rect(posX, posY, tileWidth, tileHeight);

        colours.push(interCol);
      }
    }
  }
  
  p.shakeColours = () => {
    for (let i = 0; i < tileCountY; i++) {
      coloursLeft[i] = p.color(p.random(0, 100), p.random(10, 220), 200);
      coloursRight[i] = p.color(p.random(80, 250), 100, p.random(0, 100));
    }
  }

  p.mouseReleased = () => {
    p.shakeColours();
  }
  
  p.windowResized = () => {
    elw = document.getElementById(id).offsetWidth;
    p.resizeCanvas(elw,elw);
  }

}

export default s09;