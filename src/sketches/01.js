/*
  Evan MacHale - N00150552
  25.03.19
  01.js
*/

export default function sketch (p) {
  let rotation = 0;
  
  p.setup = function () {
    p.createCanvas(500, 500, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(100);
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    p.box(100);
    p.pop();
  };
};