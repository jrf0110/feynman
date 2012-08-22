define(function(require){
  var
    // 3rd Party Dependencies

    // App Dependencies
    utils     = require('utils')
  , templates = require('templates')
  , models    = reuqire('models')
  , hand      = require('hand')

    // Module Variables
  ;
  return utils.Mvc.View.extend({
    className: 'note-book'
  , initialize: function(){
      // this.prefix = "note-";
      // this.id     = 0;
      this.notes  = {};
    }
  , add: function(note){
      // this.notes[this.prefix + ++this.id] = note;
      this.$el.add(note.$el);
    }
  , remove: function(note){
      this.$el = this.$el.not(note.$el);
    }
  });
});
