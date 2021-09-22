let bg;
let bgRotate = 0;
let rSpeed = 0.2;

function preload() {
  bg = loadImage('assets/bgstripe.jpg');
  tent = loadImage('assets/tent.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(bg);
  textAlign(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);

}

function draw() {
  drawRotatebg(bgRotate);
  bgRotate += rSpeed
  image(tent, width/2, 500, 1368, 900);
}

function drawRotatebg(rotation) {
  push();
  background(255);
  translate(width/2, height);
  rotate(rotation);
  image(bg, 0, 0, 3000, 3000);
  pop();

}
