/*global module, console, window */
import React from "react";

(function(){
  "use strict";
  var App;
  App = (props)=>{
    var state=props.state;
console.log("App testing");
    return <div>
      Justing testing! 
      {" "}{state.greeting}{" "}
      <strong style={{color:"blue"}}>{state.name}</strong>.
    </div>;
  };
  
  module.exports = App;
}());
