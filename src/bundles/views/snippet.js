import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';

import {
  popoverMainTpl as _PopoverMain,
  popoverInputTpl as _PopoverInput,
  popoverSelectTpl as _PopoverSelect,
  popoverTextareaSplitTpl as _PopoverTextAreaSplit,
  popoverCheckboxTpl as _PopoverCheckbox,
  snippetTemplatesTpl as _snippetTemplates
} from '../templates/templates';

//TODO: Figure out how to import bootstrap without polluting global scope.

export default Backbone.View.extend({
  tagName: "div"
  , className: "component" 
  , initialize: function(){
    this.template = _.template(_snippetTemplates[this.model.idFriendlyTitle()])
    this.popoverTemplates = {
      "input" : _.template(_PopoverInput)
      , "select" : _.template(_PopoverSelect)
      , "textarea" : _.template(_PopoverTextArea)
      , "textarea-split" : _.template(_PopoverTextAreaSplit)
      , "checkbox" : _.template(_PopoverCheckbox)
    }
  }
  , render: function(withAttributes){
    var that = this;
    var content = _.template(_PopoverMain)({
      "title": that.model.get("title"),
      "items" : that.model.get("fields"),
      "popoverTemplates": that.popoverTemplates
    });
    if (withAttributes) {
      return this.$el.html(
        that.template(that.model.getValues())
      ).attr({
        "data-content"     : content
        , "data-title"     : that.model.get("title")
        , "data-trigger"   : "manual"
        , "data-html"      : true
      });
    } else {
      return this.$el.html(
        that.template(that.model.getValues())
      )
    }
  }
});
