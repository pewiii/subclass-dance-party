var BouncyDancer = function(top, left, bounceTime) {
  Dancer.call(this, top, left, bounceTime);
  Dancer.prototype.step.call(this);
  Dancer.prototype.setPosition.call(this);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

var oldStep = BouncyDancer.prototype.step;

BouncyDancer.prototype.step = function() {
  //oldStep.call(this);
  // do stuff to bounce
  var step = oldStep.bind(this);
  this.$node.animate({
    height: '100px',
    width: '100px'  },'swing', step);
};