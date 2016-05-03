/*global require, console, __dirname */
(function(){
  "use strict";
  var path, express, webpack, config, app, compiler;
  path = require('path');
  express = require('express');
  webpack = require('webpack');
  config = require('./webpack.config.dev');

  app = express();
  compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(3000, '0.0.0.0', function(err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Listening at http://0.0.0.0:3000');
  });
}());
