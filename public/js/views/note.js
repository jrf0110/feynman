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
    className: 'note'
  , events: {
      'click .edit': 'editClick'
    , 'mousedown': 'dragStart'
    , 'mouseup': 'dragEnd'
    }
  , template: templates.note
  , initialize: function(){
      this.isEditing = false;
    }
  , render: function(){
      this.$el.html(this.template.render(this.model.toJSON()));
      this.$editIcon = this.$el.find('.edit');
      this.$content = this.$el.find('.content');
    }
  , editClick: function(){
      if (this.isEditing) this.exitEditMode();
      else this.enterEditMode();
    }
  , enterEditMode: function(){
      this.$editIcon.attr('title', 'checkbox');
      this.$content.attr('contentEditable', true).addClass('editing').focus();
      $(document.body).addClass('editing');
    }
  , exitEditMode: function(){
      this.$editIcon.attr('title', 'edit');
      this.$content.attr('contentEditable', false).removeClass('editing');;
      $(document.body).removeClass('editing');
    }
    }
  , dragStart: function(){
      hand.pickUp(note.$el);
    }
  , dragEnd: function(){
      hand.drop(note.$el);
    }
  });
});
