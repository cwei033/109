var mouseTarget; // the display object currently under the mouse, or being dragged
var dragStarted; // indicates whether we are currently in a drag operation
var offset;
var update = true;
var stage1;
var canvas1;
var clickID = "click";

function loadSound() {
  createjs.Sound.registerSound("assets/mixkit-fairy-magic-sparkle-871.wav", clickID);
}

function init() {
  canvas1 = document.getElementById("Canvas1");
  // Register an event listener to call the resizeCanvas() function each time the window is resized.
  window.addEventListener('resize', resizeCanvas, false);
  resizeCanvas();
  stage1 = new createjs.Stage(canvas1);
  canvas1.style.backgroundColor = "#676113";

  // enabled mouse over / out events
  stage1.enableMouseOver(10);
  stage1.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

  // load the source image:
  var image2 = new Image();
  image2.src = "assets/clover3.PNG";
  image2.onload = handleImageLoadDark;

  var image1 = new Image();
  image1.src = "assets/clover2.PNG";
  image1.onload = handleImageLoad;
  var image = new Image();
  image.src = "assets/clover1.PNG";
  image.onload = handleImageLoad;

  var image3 = new Image();
  image3.src = "assets/clover4.PNG";
  image3.onload = handleImageLoadFour;

  stage1.update();

}

function stop() {
  createjs.Ticker.removeEventListener("tick", tick);
}

function resizeCanvas() { // Runs each time the DOM window resize event fires. Resets the canvas dimensions to match window,
  Canvas1.width = window.innerWidth;
  Canvas1.height = window.innerHeight - 40;
}

function handleImageLoadDark(event) {
  var image = event.target;
  var bitmap;
  var container = new createjs.Container();
  stage1.addChild(container);

  for (var i = 0; i < 1800; i++) {
    //A Bitmap represents an Image, Canvas, or Video in the display list. A Bitmap can be instantiated using an existing HTML element, or a string.
    bitmap = new createjs.Bitmap(image);
    container.addChild(bitmap);
    bitmap.x = canvas1.width * Math.random();
    bitmap.y = canvas1.height * Math.random();
    bitmap.rotation = 360 * Math.random() | 0;
    bitmap.regX = bitmap.image.width / 2 | 0;
    bitmap.regY = bitmap.image.height / 2 | 0;
    bitmap.scale = bitmap.originalScale = Math.random() * 0.06 + 0.08;
    bitmap.name = "bmp_" + i;
    bitmap.cursor = "pointer";

    bitmap.on("mousedown", function(evt) {
      this.parent.addChild(this);
      this.offset = {
        x: this.x - evt.stageX,
        y: this.y - evt.stageY
      };
      playClick();
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
  createjs.Ticker.addEventListener("tick", tick);
}

function handleImageLoad(event) {
  var image = event.target;
  var bitmap;
  var container = new createjs.Container();
  stage1.addChild(container);

  // create and populate the screen with random daisies:
  for (var i = 0; i < 1000; i++) {
    //A Bitmap represents an Image, Canvas, or Video in the display list. A Bitmap can be instantiated using an existing HTML element, or a string.
    bitmap = new createjs.Bitmap(image);
    container.addChild(bitmap);
    bitmap.x = canvas1.width * Math.random();
    bitmap.y = canvas1.height * Math.random();
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
      playClick();
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

  createjs.Ticker.addEventListener("tick", tick);
}

function handleImageLoadFour(event) {
  var image = event.target;
  var bitmap;
  var container = new createjs.Container();
  stage1.addChild(container);

  // create and populate the screen with random daisies:
  for (var i = 0; i < 5; i++) {
    //A Bitmap represents an Image, Canvas, or Video in the display list. A Bitmap can be instantiated using an existing HTML element, or a string.
    bitmap = new createjs.Bitmap(image);
    container.addChild(bitmap);
    bitmap.x = canvas1.width * Math.random();
    bitmap.y = canvas1.height * Math.random();
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
      playClick();
    });

    // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
    bitmap.on("pressmove", function(evt) {
      this.x = evt.stageX + this.offset.x;
      this.y = evt.stageY + this.offset.y;
      // indicate that the stage should be updated on the next tick:
      update = true;
    });

    bitmap.on("pressup", function(evt) {
      popUp();
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

  createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
  // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
  if (update) {
    update = false; // only update once
    stage1.update(event);
  }
}

function playClick() {
  var clicksound = createjs.Sound.play(clickID);
  clicksound.volume = .1;
}

function popUp() {
  let wish = prompt("Congratulations on finding the four-leaf clover. What would you like to wish for?", "Please enter your wish.");
  if (wish == "" || wish == "Please enter your wish.") {
    popUp();
  } else if (wish == null) {

  } else {
    alert("Your wish has been recorded. May the four-leaf clover bring you happiness.")
  }
}
