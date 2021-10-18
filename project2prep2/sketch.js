var mouseTarget; // the display object currently under the mouse, or being dragged
var dragStarted; // indicates whether we are currently in a drag operation
var offset;
var update = true;
var stage1;
var canvas1;
var clickID = "click";

function loadSound() {
  createjs.Sound.registerSound("assets/click.wav", clickID);
}

function init() {
  canvas1 = document.getElementById("demoCanvas1");
  stage1 = new createjs.Stage(canvas1);
  canvas1.style.backgroundColor = "#cfc29b";


  // enable touch interactions if supported on the current device:
  // createjs.Touch.enabled(stage1);

  // enabled mouse over / out events
  stage1.enableMouseOver(10);
  stage1.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

  // load the source image:
  var image2 = new Image();
  image2.src = "assets/clover3.PNG";
  image2.onload = handleImageLoad;
  var image = new Image();
  image.src = "assets/clover1.PNG";
  image.onload = handleImageLoad;
  var image1 = new Image();
  image1.src = "assets/clover2.PNG";
  image1.onload = handleImageLoad;

  stage1.update();
}

function stop() {
  createjs.Ticker.removeEventListener("tick", tick);
}

function handleImageLoad(event) {
  var image = event.target;
  var bitmap;
  var container = new createjs.Container();
  stage1.addChild(container);

  // create and populate the screen with random daisies:
  for (var i = 0; i < 110; i++) {
    //A Bitmap represents an Image, Canvas, or Video in the display list. A Bitmap can be instantiated using an existing HTML element, or a string.
    bitmap = new createjs.Bitmap(image);
    container.addChild(bitmap);
    bitmap.x = canvas1.width * Math.random() | 0;
    bitmap.y = canvas1.height * Math.random() | 0;
    bitmap.rotation = 360 * Math.random() | 0;
    bitmap.regX = bitmap.image.width / 2 | 0;
    bitmap.regY = bitmap.image.height / 2 | 0;
    bitmap.scale = bitmap.originalScale = Math.random() * 0.06 + 0.08;
    bitmap.name = "bmp_" + i;
    bitmap.cursor = "pointer";

    // using "on" binds the listener to the scope of the currentTarget by default
    // in this case that means it executes in the scope of the button.
    bitmap.on("mousedown", function(evt) {
      this.parent.addChild(this);
      this.offset = {
        x: this.x - evt.stageX,
        y: this.y - evt.stageY
      };
      playSound();
    });

    // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
    bitmap.on("pressmove", function(evt) {
      this.x = evt.stageX + this.offset.x;
      this.y = evt.stageY + this.offset.y;
      // indicate that the stage should be updated on the next tick:
      update = true;
    });

    bitmap.on("rollover", function(evt) {
      this.scale = this.originalScale * 1.2;
      update = true;
    });

    bitmap.on("rollout", function(evt) {
      this.scale = this.originalScale;
      update = true;
    });

  }

  // examples.hideDistractor();
  createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
  // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
  if (update) {
    update = false; // only update once
    stage1.update(event);
  }
}

function playSound() {
  createjs.Sound.play(clickID);
}
