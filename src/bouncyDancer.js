var BouncyDancer = function(top, left, bounceTime) {
  Dancer.call(this, top, left, bounceTime);
  Dancer.prototype.step.call(this);
  Dancer.prototype.setPosition.call(this, top, left);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  var margin = this.timeBetweenSteps / 20;
  var instanceStep = this.step.bind(this);
  this.$node.animate({
    'margin-top': '-' + margin + 'px',
    'height': '0px'
  },
  'linear',
  () => {
    this.$node.animate({
      'margin-top': margin + 'px',
      'height': '3px'
    }, 'linear', instanceStep);
  });
};