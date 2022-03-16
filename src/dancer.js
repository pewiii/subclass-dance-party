// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class ="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function() {
  var step = this.step.bind(this);
  var time = this.timeBetweenSteps;
  setTimeout(step, time);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};