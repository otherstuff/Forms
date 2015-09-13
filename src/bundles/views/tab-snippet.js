import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import SnippetModel from '../models/snippet';
import TempSnippetView from './temp-snippet';
import PubSub from '../helper/pubsub';
import SnippetView from './snippet';

export default SnippetView.extend({
  events:{
    "mousedown" : "mouseDownHandler"
  }
  , mouseDownHandler: function(mouseDownEvent){
    mouseDownEvent.preventDefault();
    mouseDownEvent.stopPropagation();
    //hide all popovers
    $(".popover").hide();
    $("body").append(new TempSnippetView({model: new SnippetModel($.extend(true,{},this.model.attributes))}).render());
    PubSub.trigger("newTempPostRender", mouseDownEvent);
  }
});
