var xoff1 = 0;
var xoff2 = 1000; //two xoffs so that you're pulling values from two different points in time so that the x and y coordinates are not the same
var inc = 0.1; //change how smooth the graph is; smaller the number the smoother it is
var start = 0; //make the starting point of the graph a variable so that you can change it so that the graph moves rather than stays stagnant
let static;
let desert;
let state = 'flowmode';
var scl = 20;
var cols, rows;
var zoff = 0;
var particles = [];
var flowfield;

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

  cols = floor(width / scl); //floor makes sure no decimals
  rows = floor(height / scl);

  pixelDensity(0.5);

  for (var i = 0; i < 400; i++) {
    particles[i] = new Particle();
  }

  flowfield = new Array(cols * rows);
  background(255);

}

function draw() {

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
  desert.loop();
  desert.setVolume(0.05);
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y * cols);
      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(0.5);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);

    }
    yoff += inc;

    zoff += 0.0001;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}
