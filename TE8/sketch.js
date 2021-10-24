var mousePoint = view.center;
var amount = 30;
var colors = ['yellow', 'orange', 'pink', 'orange', 'white'];

for (var i = 0; i < amount; i++) {
  var rect = new Rectangle([0, 0], [25, 25]);
  rect.center = mousePoint;
  var path = new Path.Rectangle(rect, 3);
  path.fillColor = colors[i % 5];
  var scale = (1 - i / amount) * 10;
  path.scale(scale);
}

function onMouseMove(event) {
  mousePoint = event.point;
}

function onKeyDown(event) {
  if (event.key == 'space') {
    // Scale the path by 110%:
    for (var i = 0; i < amount; i++) {
      var path = new Path.Rectangle(rect, 3);
      path.fillColor = colors[i % 5];
      var scale = (1 - i / amount) * 10;
      path.scale(scale);

    }
    // Prevent the key event from bubbling
    return false;
  }
}

var children = project.activeLayer.children;

function onFrame(event) {
  for (var i = 0, l = children.length; i < l; i++) {
    var item = children[i];
    var delta = (mousePoint - item.position) / (i + 5);
    item.rotate(Math.sin((event.count + i) / 20) * 20);
    if (delta.length > 0.1)
      item.position += delta;
  }
}
