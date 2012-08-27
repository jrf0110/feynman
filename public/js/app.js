require.config({
  hbt: {
    extension: 'html'
  }
});

define(function(require){
  var
    // 3rd Party Dependencies
    domready    = require('domReady')

    // App Dependencies
  , hand        = require('hand')
  , Views       = require('views')
  , Models      = require('models')
  , Collections = require('collections')

    // Module Variables
    app         = {}
  ;
  domready(function(){
    app.notes = new Views.NoteBook({
      el: document.body
    , collection: new Collections.Notes()
    });
  });

  return app;
});
