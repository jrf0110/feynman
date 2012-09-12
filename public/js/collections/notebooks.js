define(function(require){
  var
    // 3rd Party Dependencies

    // App Dependencies
    utils   = require('utils')
  , Models  = require('models')

    // Module Variables
  ;

  return utils.Collection.extend({
    model: Models.NoteBook
  , localStorage: new utils.LocalStorage("notebooks")
  });
});
