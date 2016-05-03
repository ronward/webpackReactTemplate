/*global module, console, window */
(function(){
  "use strict";
  var createStore;

  createStore = function(initState, cb){
    var store, state, actions, triggers
      , addAction, addTrigger
    ;
    state = initState || {};
    actions = {};
    triggers = {};

    addAction = (name, handler, publish)=>{
      actions[name]=(data)=>{
        state = handler(state, data);
        if(publish!==false){ 
          cb(store);
        }
      };
    };

    addTrigger = (name, handler)=>{
      triggers[name]=(data, state, store)
    };

    store = {getState:()=>state, actions, triggers, addAction};
    return store;
  };

  module.exports = {createStore};
}());