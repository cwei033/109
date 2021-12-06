var xoff1 = 0;
var xoff2 = 1000; //two xoffs so that you're pulling values from two different points in time so that the x and y coordinates are not the same
var inc = 0.01; //change how smooth the graph is; smaller the number the smoother it is
var start = 0; //make the starting point of the graph a variable so that you can change it so that the graph moves rather than stays stagnant

function preload() {


}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  if (windowHeight > windowWidth) {
    height = windowWidth * 0.7;
  }
  textAlign(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);

  pixelDensity(1);

}

function draw() {
  background(255);
  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, width);
  // xoff1 += 0.01; //larger number = faster speed
  // xoff2 += 0.01; //larger number = faster speed
  // fill(55);
  // ellipse(x, y, 24, 24);

  // stroke(55);
  // noFill();
  // beginShape();
  // var xoff = start;
  // for (var x = 0; x < width; x++){
  //   stroke(55);
  //   // var y = random(height);
  //   var y = noise(xoff) * height;
  //   vertex(x, y);
  //   xoff += inc;
  // }
  // endShape();
  //start += inc;

  //check pixels video (perlin 1.5 descripbox);
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 4;
      var r = random(255);
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = r;
    }
  }
  updatePixels();

}
