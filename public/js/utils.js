define(function(require){
   var
    // 3rd Party Dependencies
    $         = require('jquery')
  , _         = require('underscore')
  , amanda    = require('amanda')

    // App Dependencies

    // Module Variables
  , utils     = {}
  ;

  utils.dom = $;

  utils.Events = Backbone.Events;
  utils.Router = Backbone.Router;

  utils.mvc = {
    Model: Backbone.Model
  , View: Backbone.View
  , Collection: Backbone.Collection
  };

  utils = _.extend(utils, _);

  return utils;
});
