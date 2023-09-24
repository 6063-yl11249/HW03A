let cDiam = 30;
let xSpacing = 100;
let ySpacing = 100;

let vDiam = 10;
let yPos2 = yPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(229, 208, 50);
  noStroke();

  for (let xPos = 0; xPos <= width ; xPos += xSpacing){
    for (let xPos2 = xPos + 50; xPos2 <= width; xPos2 += xSpacing) {
      for (let yPos = 0; yPos <= height; yPos += ySpacing ) {
        for (let yPos2 = yPos; yPos2 <= height; yPos2 += ySpacing){
            fill (0)
            ellipse (xPos, yPos, cDiam);
            ellipse (xPos2, yPos2, vDiam)
        }
      }
    }
  }

  for (let xPos = 50; xPos <= width ; xPos += xSpacing){
    for (let xPos2 = xPos + 50; xPos2 <= width; xPos2 += xSpacing) {
      for (let yPos = 50; yPos <= height; yPos += ySpacing ) {
        for (let yPos2 = yPos; yPos2 <= height; yPos2 += ySpacing){
            fill (0)
            ellipse (xPos, yPos, cDiam);
            ellipse (xPos2, yPos2, vDiam)
        }
      }
    }
  }
}
