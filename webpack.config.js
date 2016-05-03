/*global require, module, __dirname */
var webpack, path, RootDir, BUILD_DIR, APP_DIR, config;
webpack = require("webpack");
path = require("path");
RootDir = path.resolve(__dirname);
BUILD_DIR = path.resolve(__dirname, "dist");
APP_DIR = path.resolve(__dirname, "src");

config = {
  devtool: "source-map",
  entry: APP_DIR + "/index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  resolve:{
    root:[RootDir],
    extensions:["", ".js", ".jsx"],
    moduleDirectories:["node_modules"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: "babel"
      }
    ]
  }
};

module.exports = config;
