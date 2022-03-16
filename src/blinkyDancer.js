var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  Dancer.prototype.step.call(this);
  Dancer.prototype.setPosition.call(this, top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

var oldStep = BlinkyDancer.prototype.step;

BlinkyDancer.prototype.step = function() {
  oldStep.call(this);
  this.$node.toggle();
};