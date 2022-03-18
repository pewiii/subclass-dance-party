$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);

    if (window.dancers.length > 2) {
      var randomNum1 = Math.floor(Math.random() * window.dancers.length);
      var randomNum2 = Math.floor(Math.random() * window.dancers.length);
      var pos1 = window.dancers[randomNum1].$node.position();
      var pos2 = window.dancers[randomNum2].$node.position();
      window.dancers[randomNum1].$node.animate(pos2, 3000, 'swing');
      window.dancers[randomNum2].$node.animate(pos1, 3000, 'swing');
    }
  });

  $('.lineUp').on('click', function(event) {
    // loop through the all dancers in window.dancher
    for (var i = 0; i < window.dancers.length; i++) {
      // call the lineUp method in each dancer element
      window.dancers[i].lineUp();
    }
  });

});

