// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  //this.$node = $('<span class ="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
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

Dancer.prototype.lineUp = function() {
  this.$node.animate({
    'top': '200px'
  }, 2000, 'swing');
};

Dancer.prototype.catchMe = function(event) {
  var top = Math.floor(Math.random() * $('body').height());
  var left = Math.floor(Math.random() * $('body').width());
  var position = {
    top: top,
    left: left
  };
  $(this).css(position);
};