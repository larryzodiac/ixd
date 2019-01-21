// --------------------------------------- //
// Swiss Clock Test Exercise 20.01.19
// --------------------------------------- //

const circle_diameter = 250;
let hand_x;
let hand_y;

function setup() {
  createCanvas(windowWidth,windowHeight);
  strokeCap(SQUARE);
}

function draw() {
  background(240);

  const hourAngle = map(hour(), 0, 24, 0, TWO_PI * 2);
  const minuteAngle = map(minute(), 0, 60, 0, TWO_PI);
  const secondAngle = map(second(), 0, 60, 0, TWO_PI);

  translate(width/2,height/2);
  rotate(-HALF_PI);

  stroke(0);
  strokeWeight(10);
  fill(255);
  ellipse(0,0,circle_diameter*2);

  /*
    Ticks
  */
  push();
  for (let i = 0; i < 60; i++) {
    const angle = map(i, 0, 60, 0, TWO_PI);
    hand_x = circle_diameter * cos(angle) * 0.95;
    hand_y = circle_diameter * sin(angle) * 0.95;
    if (i % 5) {
      strokeWeight(5);
      line(hand_x, hand_y, hand_x * 0.9, hand_y * 0.9);
    } else {
      strokeWeight(15);
      line(hand_x, hand_y, hand_x * 0.8, hand_y * 0.8);
    }
  }
  pop();

  /*
    Numbers
  */
  push();
  rotate(HALF_PI);
  for (let i = 0; i < 12; i++) {
    const angle = map(i, 0, 12, 0, TWO_PI);
    hand_x = circle_diameter * cos(angle);
    hand_y = circle_diameter * sin(angle);
    strokeWeight(0);
    fill(0);
    textAlign(CENTER);
    textSize(20);
    text(i + 3, hand_x * 1.1, hand_y * 1.1);
  }
  pop();

  /*
    Hours arm
  */
  strokeWeight(20);
  hand_x = circle_diameter * cos(hourAngle) * 0.6;
  hand_y = circle_diameter * sin(hourAngle) * 0.6;
  line(-hand_x/3, -hand_y/3, hand_x, hand_y);

  /*
    Minutes arm
  */
  hand_x = circle_diameter * cos(minuteAngle) * 0.8;
  hand_y = circle_diameter * sin(minuteAngle) * 0.8;
  line(-hand_x/4, -hand_y/4, hand_x, hand_y);

  /*
    Seconds arm
  */
  stroke(240,0,0);
  strokeWeight(5);
  fill(240,0,0);
  hand_x = circle_diameter * cos(secondAngle) * 0.6;
  hand_y = circle_diameter * sin(secondAngle) * 0.6;
  line(-hand_x/2.5, -hand_y/2.5, hand_x, hand_y);
  ellipse(hand_x, hand_y, 40);

}
