define(function(require){
  var
    // 3rd Party Dependencies

    // App Dependencies
    utils     = require('utils')
  , templates = require('templates')
  , NoteView  = require('views/note')
  , NoteModel = require('models/note')

    // Module Variables
  ;
  return utils.View.extend({
    className: 'notebook'
  , modelView: {}
  , initialize: function(){
      this.collection.on('add', this._add, this);
      this.collection.on('remove', this._remove, this);
      this.collection.on('reset', this._addAll, this);
      this.collection.fetch();
    }
  , add: function(noteModel){
      this.collection.add(noteModel);
    }
  , appendNote: function(note){
      note.render();
      this.$el.append(note.$el);
    }
  , remove: function(){
      utils.Collection.remove.apply(this.collection, Array.prototype.slice(0, arguments));
    }
  , _add: function(noteModel){
      console.log("adding new note ", noteModel)
      var view = new NoteView({ model: noteModel });
      this.appendNote(view);
      this.modelView[noteModel.cid] = view; // Cache the view by model for later refernce
    }
  , _addAll: function(){
      console.log("fetched ", this.collection.length);
      if (this.collection.length === 0) return this.collection.add(new NoteModel());
      this.collection.each(this._add, this);
    }
  });
});
