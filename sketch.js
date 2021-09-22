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
  createCanvas(1920, 1080);
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
  image(tent, 0, -450, width - 600, height - 180);
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
