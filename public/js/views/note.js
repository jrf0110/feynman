define(function(require){
  var
    // 3rd Party Dependencies

    // App Dependencies
    utils     = require('utils')
  , templates = require('templates')
  , models    = require('models')
  , hand      = require('hand')

    // Module Variables
  ;
  return utils.View.extend({
    className: 'note'
  , events: {
      'click .edit': 'editClick'
    , 'click .close': 'closeClick'
    , 'mousedown .actions': 'dragStart'
    }
  , lastOffsets: {}
  , template: templates.note
  , initialize: function(){
      this.isEditing = false;
      hand.on('stop', this.dragEnd.bind(this));
      return this;
    }
  , render: function(){
      this.$el.css({
        'transform': 'translate3d(' + this.model.get('x') + 'px,' + this.model.get('y') + 'px, 0)'
      });
      this.$el.html(this.template(this.model.toJSON()));
      this.$editIcon = this.$el.find('.edit');
      this.$content = this.$el.find('.content');
      return this;
    }
  , enterEditMode: function(){
      this.isEditing = true;
      this.$editIcon.attr('title', 'checkbox');
      this.$content.attr('contentEditable', true).addClass('editing').focus();
      $(document.body).addClass('editing');
      return this;
    }
  , exitEditMode: function(){
      this.$editIcon.attr('title', 'edit');
      this.$content.removeClass('editing');
      $(document.body).removeClass('editing');
      this.model.setContent(this.$content.html());
      this.$content.html(this.model.get('content'));
      this.$content.attr('contentEditable', false);
      this.isEditing = false;
      this.model.save();
      return this;
    }
  , save: function(){
      this.model.save();
      return this;
    }
  , editClick: function(){
      if (this.isEditing) this.exitEditMode();
      else this.enterEditMode();
      return this;
    }
  , closeClick: function(){
      this.remove();
      this.model.destroy();
    }
  , dragStart: function(e){
      if ($(e.srcElement).hasClass('action')) return;
      hand.grab(this.$el, e);
      this.$el.addClass('dragging');
      this.lastOffsets.x = e.offsetX;
      this.lastOffsets.y = e.offsetY;
      return this;
    }
  , dragEnd: function(e){
      this.$el.removeClass('dragging');
      this.model.set({
        x: e.clientX - this.lastOffsets.x
      , y: e.clientY - this.lastOffsets.y
      });
      this.model.save();
      return this;
    }
  });
});
