let bg;
let bgRotate = 0;
let rSpeed = 0.2;
// let w = windowWidth;
// let h = windowHeight;

function preload() {
  bg = loadImage('assets/bgstripe.JPG');
  tent = loadImage('assets/tent.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // if (windowHeight > 3000) {
  //   h = 3000
  // }
  textAlign(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);

}

function draw() {
  drawRotatebg(bgRotate);
  bgRotate += rSpeed;

  push();
  translate(width/2, height);
  let h = width * 0.47;
  image(tent, 0, -h/2, width * 0.8, h);
  pop();
}

function drawRotatebg(rotation) {
  push();
  background(255);
  translate(width / 2, height);
  rotate(rotation);
  image(bg, 0, 0, 3000, 3000);
  pop();

}
