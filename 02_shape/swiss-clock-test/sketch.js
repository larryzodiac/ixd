// --------------------------------------- //
// Swiss Clock Test Exercise 20.01.19
// --------------------------------------- //

const minuteStrokeLength = 10;
const minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

const hourStrokeLength = 30;
const hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;

const clockRadius = 200;

/*
  Unused Variables
*/

// const hourHandTaper = 6;
const hourHandLength = 195;
// const hourHandOffset = 80;
// const hourHandWidth = 20;

// const minuteHandTaper = 6;
const minuteHandLength = 155;
// const minuteHandOffset = 80;
// const minuteHandWidth = 20;

// const secondHandTaper = 2;
const secondHandLength = 155;
// const secondHandOffset = 80;
// const secondHandWidth = 10;

let secondHandColor;

let hand_x;
let hand_y;

function setup() {
  createCanvas(500,500);
  noStroke();
  noLoop();
  // angleMode(DEGREES);

  hourStrokeColor = color(30,30,30);
  hourStrokeCap = SQUARE;

  minuteStrokeColor = color(30,30,30);
  minuteStrokeCap = SQUARE;

  secondHandColor = color(240,0,0);
}

function draw() {
  background(240);

  const hourAngle = map(hour(), 0, 24, 0, TWO_PI * 2);
  const minuteAngle = map(minute(), 0, 60, 0, TWO_PI);
  const secondAngle = map(second(), 0, 60, 0, TWO_PI);

  translate(width/2,height/2);
  rotate(-HALF_PI);

  stroke(30,30,30);
  strokeWeight(10);
  fill(255);
  ellipse(0,0,clockRadius*2);

  /*
    Hours arm
  */
  hand_x = hourHandLength * cos(hourAngle);
  hand_y = hourHandLength * sin(hourAngle); 
  line(-hand_x * 0.2, -hand_y * 0.2, hand_x, hand_y);

  /*
    Minutes arm
  */
  hand_x = minuteHandLength * cos(minuteAngle);
  hand_y = minuteHandLength * sin(minuteAngle);
  line(-hand_x * 0.3, -hand_y * 0.3, hand_x, hand_y);

  /*
    Seconds arm
  */
  stroke(240,0,0);
  strokeWeight(5);
  fill(secondHandColor);
  hand_x = secondHandLength * cos(secondAngle);
  hand_y = secondHandLength * sin(secondAngle);
  line(-hand_x * 0.2, -hand_y * 0.2, hand_x, hand_y);
  ellipse(0, 0, 15);
  ellipse(hand_x, hand_y, 25);

  /*
    Ticks
  */
  push();
  for (let i = 0; i < 60; i++) {
    const angle = map(i, 0, 60, 0, TWO_PI);
    hand_x = clockRadius * cos(angle) * 0.9;
    hand_y = clockRadius * sin(angle) * 0.9;
    if (i % 5) {
      stroke(minuteStrokeColor);
      strokeWeight(minuteStrokeWeight);
      strokeCap(minuteStrokeCap);
      line(hand_x, hand_y, hand_x * 0.9, hand_y * 0.9);
    } else {
      stroke(hourStrokeColor);
      strokeWeight(hourStrokeWeight);
      strokeCap(hourStrokeCap);
      line(hand_x, hand_y, hand_x * 0.7, hand_y * 0.7);
    }
  }
  pop();

}
