// ------------------------------------------------- //
// 17/09/2018
// Evan MacHale - N00150552
// ------------------------------------------------- //

function setup() {
//    createCanvas(500,500);
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB, windowWidth, 100, 100);
}

function draw() {
//    fill(360, 100, 100);
    noStroke();
    var numOfCols = 100;
    var numOfRows = 100;
    var stepX = windowWidth/numOfCols;
    var stepY = windowHeight/numOfRows;
    
    for(var gridY = 0; gridY < windowHeight; gridY += stepY) {
        for(var gridX = 0; gridX < windowWidth; gridX += stepX) {
            fill(gridX, 100, 100);
            rect(gridX, gridY, stepX, stepY);
        }
    }
}

function keyPressed(){
    if(key==='s' || key==='S'){
        saveCanvas(gd.timestamp() + '_mouseX_' + mouseX, 'png');
    }
}