define(function(require){
  var
  // 3rd Party Dependencies

  // App Dependencies
    utils = require('utils')

  // Module Variables
  , id    = 1
  ;

  return utils.Model.extend({
    defaults: {
      content : "Click the edit button in the top right to edit me :)"
    , x         : 200
    , y         : 100
    , width     : 600
    , markdown  : false
    }
  , initialize: function(data){
      if (data && data.content) this.setContent(data.content);
    }
  , setContent: function(content){
      // Strip html
      // parse markdown
      // etc
      console.log('[Model.Note] - settings content: ', content)
      this.set('content', content);
    }
  , get: function(property){
      if (property === "content" && this.markdown) return this.attributes.parsedContent;
      return utils.Model.prototype.get.call(this, property);
    }
  });
});
