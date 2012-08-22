define(function(require){
  var
    // 3rd Party Dependencies
    domReady = require('domReady')

    // App Dependencies
  , hand = require('hand')
    // Views    = require('views')

    // Module Variables
  , app = {
      addNote: function(note){
        note || (note = new Note());
      }
    }
  ;
  domReady(function(){

  });

  return app;
});
