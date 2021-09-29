let bg;
let bgRotate = 0;
let rSpeed = 0.2;
let tent;
let song;
// let w = windowWidth;
// let h = windowHeight;

function preload() {
  bg = loadImage('assets/IMG_2471.JPG');
  tent = loadImage('assets/tent.png');
  song = loadSound('assets/clowning-around.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (windowHeight > windowWidth) {
    height = windowWidth * 0.7;
  }
  textAlign(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
}

// function mousePressed() {
//   if (song.isPlaying()) {
//     // .isPlaying() returns a boolean
//     song.stop();
//   } else {
//     song.play();
//   }
// }

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
