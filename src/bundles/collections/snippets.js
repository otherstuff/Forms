import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import SnippetModel from '../models/snippet';
import TabSnippetView from '../views/tab-snippet';

export default Backbone.Collection.extend({
  model: SnippetModel,
  renderAll: function(){
    console.log(this);
    return this.map(function(snippet){
      return new TabSnippetView({model: snippet}).render();
    });
  }
});
