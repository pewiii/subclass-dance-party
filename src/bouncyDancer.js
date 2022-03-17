var BouncyDancer = function(top, left, bounceTime) {
  Dancer.call(this, top, left, bounceTime);
  Dancer.prototype.step.call(this);
  Dancer.prototype.setPosition.call(this, top, left);
  this.margin = bounceTime / 20;
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  this.$node.animate({
    'margin-top': '-' + this.margin + 'px',
    'height': '0px'
  },
  'swing',
  () => {
    var step = this.step.bind(this);
    this.$node.animate({
      'margin-top': this.margin + 'px',
      'height': '3px'
    }, 'swing', step);
  });
};