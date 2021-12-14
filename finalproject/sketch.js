var xoff1 = 0;
var xoff2 = 1000; //two xoffs so that you're pulling values from two different points in time so that the x and y coordinates are not the same
var inc = 0.01; //change how smooth the graph is; smaller the number the smoother it is
var start = 0; //make the starting point of the graph a variable so that you can change it so that the graph moves rather than stays stagnant
let static;
let desert;
let state = 'staticmode'

function preload() {
  static = loadSound('assets/static.wav');
  desert = loadSound('assets/desert.wav');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  if (windowHeight > windowWidth) {
    height = windowWidth * 0.7;
  }
  textAlign(CENTER);
  imageMode(CENTER);
  //angleMode(DEGREES);

  pixelDensity(0.5);

}

function draw() {
  background(255);

  if (state == 'staticmode') {
    staticdetail();
  }
  if (state == 'flowmode') {
    flowdetail();
  }

}

function staticdetail() {
  static.loop();
  static.setVolume(0.05);
  //check pixels video (perlin 1.5 descripbox);
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 3;
      var r = random(255);
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = r;
    }
  }
  updatePixels();
}

function flowdetail() {
  
}
