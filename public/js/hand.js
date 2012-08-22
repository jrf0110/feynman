/**
 * Static class for pickup elements
 */

define(function(require){
  var
    // 3rd Party Dependencies
    $         = require('jquery')

    // App Dependencies

    // Module Variables
    $pickedUp = $()
  , hand = {
      start: function(){
        window.addEventListener('mousemove', hand.onMouseMove);
      }
    , stop: function(){
        window.removeEventListener('mousemove', hand.onMouseMove);
      }
    , grab: function($el){
        if ($pickedUp.length === 0) hand.start();
        $pickedUp = $pickedUp.add($el);
      }
    , drop: function($el){
        $pickedUp = $pickedUp.not($el);
        if ($pickedUp.length === 0) hand.stop();
      }
    , translateElements: function(x, y){
        $pickedUp.css('transform', 'translate(' + x + 'px,' + y + 'px)');
      }
    , onMouseMove: function(e){
        hand.translateElements(e.clientX, e.clientY);
      }
    }
  ;
  return hand;
});
