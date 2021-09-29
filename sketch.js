let bg;
let bgRotate = 0;
let rSpeed = 0.2;
let tent;
let song;
let songIsLooping = false;
let tiger;
let elephant;
let giraffe;
let star;
let rye;
let cnv;

let state = 'initial';
let elephantAnimate = false;
let giraffeAnimate = false;
let star1 = [0, 30];
let star2 = [0, 30];
let starsStart = false;

// let w = windowWidth;
// let h = windowHeight;

function preload() {
  bg = loadImage('assets/IMG_2471.JPG');
  tent = loadImage('assets/tent.png');
  song = loadSound('assets/clowning-around.mp3');
  tiger = loadImage('assets/tiger.JPG');
  elephant = loadImage('assets/elephant.JPG');
  giraffe = loadImage('assets/giraffe.JPG');
  star = loadImage('assets/star.PNG')
  rye = loadFont('assets/Rye-Regular.ttf')

}

class Stars1 {
  constructor(_x, _y, _rotation) {
    this.x = _x;
    this.y = _y;
    this.rotation = _rotation;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    image(star, 0, 0, width * .015, width * .015);
    pop();
  }

  move() {
    this.y += 2;
    this.rotation += .8;
  }
}

class Stars2 {
  constructor(_x, _y, _rotation) {
    this.x = _x;
    this.y = _y;
    this.rotation = _rotation;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    image(star, 0, 0, width * .008, width * .008);
    pop();
  }

  move() {
    this.y += 3;
    this.rotation -= .9;
  }
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  if (windowHeight > windowWidth) {
    height = windowWidth * 0.7;
  }
  textAlign(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);

  for (let i = 0; i < 30; i++) {
    star1[i] = new Stars1(random(width), random(height * -1.2, height * -.1), random(-90, 90));
  }
  for (let i = 0; i < 30; i++) {
    star2[i] = new Stars2(random(width), random(height * -1.2, height * -.1), random(-90, 90));
  }
}

function draw() {
  drawRotatebg(bgRotate);
  bgRotate += rSpeed;

  push();
  translate(width / 2, height);
  let h = width * 0.47;
  image(tent, 0, -h / 2, width * 0.8, h);
  pop();

  if (elephantAnimate == true) {
    drawElephant();
  }

  if (giraffeAnimate == true) {
    drawGiraffe();
  }

  if (state == "initial") {
    cnv.mouseClicked(initialMouseClicked);
    clickText();
  }

  if (state == 'start') {
    drawTiger();
    cnv.mouseClicked(nothing);
  }

  if (starsStart == true) {
    for (let i = 0; i < 30; i++) {
      star1[i].display();
      star1[i].move();
      star2[i].display();
      star2[i].move();

      if (star1[i].y > height * 1.05) {
        star1[i].y = height * -.05;
        star1[i].x = random(width);
      }
      if (star2[i].y > height * 1.05) {
        star2[i].y = height * -.05;
        star2[i].x = random(width);
      }
    }
  }
}

function drawRotatebg(rotation) {
  push();
  background(255);
  translate(width / 2, height);
  rotate(rotation);
  image(bg, 0, 0, 3000, 3000);
  pop();
}

function clickText() {
  push();
  translate(width / 2, height);
  let h = width * 0.47;
  textSize(width*.008);
  textFont('rye');
  text(`CLICK SCREEN TO PREVIEW OUR ATTRACTIONS!`, 0, -h/3);
  pop();
}

function initialMouseClicked() {
  state = 'start';
  song.loop();
}

function nothing() {}


function drawTiger() {
  push();
  let tigerX = width / 2;
  let tigerY = height * 0.69;
  if (mouseX > width * 0.41 && mouseX < width * 0.59 && mouseY > tigerY - (width * 0.125) && mouseY < tigerY + (width * 0.125)) {
    tigerX = width * 0.495;
    tigerY = height * 0.683;
  }
  image(tiger, tigerX, tigerY, width * 0.18, width * 0.25);
  setTimeout(stopPopUp, 2000);
  pop();
}

function stopPopUp() {
  giraffeAnimate = true;
}

function drawElephant() {
  push();
  let elephantX = width * 0.82;
  let elephantY = height * 0.55;
  if (mouseX > width * 0.73 && mouseX < width * 0.91 && mouseY > elephantY - (width * .125) && mouseY < elephantY + (width * 0.125)) {
    elephantX = width * 0.815;
    elephantY = height * 0.543;
  }
  image(elephant, elephantX, elephantY, width * 0.18, width * 0.25);
  setTimeout(drawStars, 500);
  pop();
}

function stopPopUp1() {
  elephantAnimate = true;
}

function drawGiraffe() {
  push();
  let giraffeX = width * 0.18;
  let giraffeY = height * 0.55;
  if (mouseX > width * 0.09 && mouseX < width * 0.27 && mouseY > giraffeY - (width * .125) && mouseY < giraffeY + (width * 0.125)) {
    giraffeX = width * 0.175;
    giraffeY = height * 0.543;
  }
  image(giraffe, giraffeX, giraffeY, width * 0.18, width * 0.25);
  setTimeout(stopPopUp1, 2500);
  pop();
}

function drawStars() {
  starsStart = true;
}
