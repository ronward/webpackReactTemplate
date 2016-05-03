/*global require, module, __dirname */
var webpack, path, RootDir, BUILD_DIR, APP_DIR, config;
webpack = require("webpack");
path = require("path");
RootDir = path.resolve(__dirname);
BUILD_DIR = path.resolve(__dirname, "dist");
APP_DIR = path.resolve(__dirname, "src");

config = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    APP_DIR + "/index.jsx",
    "webpack-hot-middleware/client"
  ],
  resolve:{
    root:[RootDir],
    extensions:["", ".js", ".jsx"],
    moduleDirectories:["node_modules"]
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loaders:["babel"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
