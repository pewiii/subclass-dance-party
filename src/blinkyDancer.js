var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  Dancer.prototype.step.call(this);
  this.$node = $('<img class ="dancer" src ="/img/luigi.jpeg" width="200" height="160"></img>');
  Dancer.prototype.setPosition.call(this, top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

var oldStep = BlinkyDancer.prototype.step;
BlinkyDancer.prototype.step = function() {
  oldStep.call(this);
  this.$node.toggle();
};