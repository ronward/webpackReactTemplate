/*global window */
import React  from "react";
import ReactDOM from "react-dom";

(function(){
  "use strict";
  var App, createStore, store, initState, render, contentElem;
  App = require("./app");
  createStore = require("./store").createStore;
  contentElem = window.document.getElementById("content");
  initState = {greeting:"Hello there", name:"Joe"};

  render=(store)=>{
    var state;
    state = store.getState();
    window.state = state;
    ReactDOM.render(<App state={state}/>, contentElem);
  }

  store = createStore(initState, render);
  window.store = store;
  window.actions = store.actions;
  window.render = render;
  store.addAction("setName", (state, name)=>{
    //return state;
    return Object.assign({}, state, {name});
  });
  //render(store);    // trigger the first render
  store.actions.setName("Fred");

  if(module.hot){
    console.log("-HOT module has been loaded-");
    //module.hot.accept();
    module.hot.accept("./app", ()=>{
      var NextApp;
      console.log("-accepting a new ./app module-");
      NextApp = require("./app");
      App = NextApp;
      render(store);
    });
  }
}());
