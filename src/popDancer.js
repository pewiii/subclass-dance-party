// changes between colors
var PopDancer = function(top, left, colorChangingTime) {
  Dancer.call(this, top, left, colorChangingTime);
  Dancer.prototype.step.call(this);
  Dancer.prototype.setPosition.call(this, top, left);
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

var oldStep = PopDancer.prototype.step;

PopDancer.prototype.step = function() {
  oldStep.call(this);

  var randomRed1 = Math.floor(Math.random() * 255);
  var randomGreen1 = Math.floor(Math.random() * 255);
  var randomBlue1 = Math.floor(Math.random() * 255);

  var randomRed2 = Math.floor(Math.random() * 255);
  var randomGreen2 = Math.floor(Math.random() * 255);
  var randomBlue2 = Math.floor(Math.random() * 255);

  var cssColor1 = {
    'border-color': 'rgb(' + randomRed1 + ',' + randomGreen1 + ',' + randomBlue1 + ')'
  };
  this.$node.css(cssColor1);
  var cssColor2 = {
    'border-color': 'rgb(' + randomRed2 + ',' + randomGreen2 + ',' + randomBlue2 + ')'
  };
  var changeColorBack = function() {
    this.$node.css(cssColor2);
  };

  changeColorBack = changeColorBack.bind(this);
  setTimeout(changeColorBack, this.colorChangingTime / 2);
  // setInterval(this.$node.css(cssColorGreen), 1000);
  // setInterval(this.$node.css(cssColorRed), 1000);

  // this.$node.animate(cssColorGreen, 1000, 'swing', () => {
  //   var reAnimate = this.step.bind(this);
  //   this.$node.animate(cssColorRed, 1000, 'swing', reAnimate);
  // });
};