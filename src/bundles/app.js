import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import SnippetsCollection from './collections/snippets';
import MyFormSnippetsCollection from './collections/my-form-snippets';
import TabView from './views/tab';
import MyFormView from './views/my-form';

import inputJSON from './data/input';
import radioJSON from './data/radio';
import selectJSON from './data/select';
import buttonsJSON from './data/buttons';

import {render as renderTab, settings as settingsTab} from './templates/templates.js';


export default {
  initialize: function(){
    //Bootstrap tabs from json.

    new TabView({
      title: "Input"
        , collection: new SnippetsCollection(inputJSON)
    });
    new TabView({
      title: "Radios / Checkboxes"
        , collection: new SnippetsCollection(radioJSON)
    });
    new TabView({
      title: "Select"
        , collection: new SnippetsCollection(selectJSON)
    });
    new TabView({
      title: "Buttons"
        , collection: new SnippetsCollection(buttonsJSON)
    });
    new TabView({
      title: "Rendered"
        , content: renderTab
    });
    new TabView({
      title: "Settings"
        , content: settingsTab
    });

    //Make the first tab active!
    $("#components .tab-pane").first().addClass("active");
    //$("#formtabs li").first().addClass("active");
    $("#formtabs li a").first().addClass("active");
    console.log($('#formtabs li').first());
    // Bootstrap "My Form" with 'Form Name' snippet.
    new MyFormView({
      title: "Original"
        , collection: new MyFormSnippetsCollection([
      { "title" : "Form Name"
            , "fields": {
          "name" : {
            "label"   : "Form Name"
                , "type"  : "input"
                , "value" : "Form Name"
          }
            }
      }
        ])
    });
  }
};
