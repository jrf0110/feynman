define(function(require){
   var
    // 3rd Party Dependencies
    $         = require('jquery')
  , _         = require('underscore')
  , Backbone  = require('backbone')

    // App Dependencies

    // Module Variables
    utils = {}
  ;
  require('backbone-localStorage');

  utils.dom = $;

  utils.Events        = Backbone.Events;
  utils.Router        = Backbone.Router;
  utils.Model         = Backbone.Model;
  utils.View          = Backbone.View;
  utils.Collection    = Backbone.Collection;
  utils.LocalStorage  = Backbone.LocalStorage;

  utils = _.extend(utils, _);

  return utils;
});
