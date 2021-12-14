function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 2;

  this.prevPos = this.pos.copy();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed); //no matter how much you push the particles they have a max speed
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors) { //make the particles follow the vectors
    var x = floor(this.pos.x / scl); //x is the actual position on the screen and divide by scl to get position relative to the grid
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.show = function() {
    stroke(5, 4);
    strokeWeight(2);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev(); //previous position becomes current position
  }

  this.updatePrev = function() { //make sure the lines connect properly and not where after the point moves, it still connects to the previous point
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function() { //make sure particles wrap around
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y > width) {
      this.pos.y = height;
      this.updatePrev();
    }
  }
}
