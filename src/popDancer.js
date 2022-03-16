// changes between colors
var PopDancer = function(top, left, colorChangingTime) {
  Dancer.call(this, top, left, colorChangingTime);
  Dancer.prototype.step.call(this);
  Dancer.prototype.setPosition.call(this);
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

var oldStep = PopDancer.prototype.step;

PopDancer.prototype.step = function() {
  oldStep.call(this);
  // do stuff to change color
  var cssChangeColor = {
    border:10px solid green;
  };
  this.$node.animate(cssChangeColor);
};