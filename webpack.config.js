var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  cache: true,
  entry: [
    "./src/app/app.js",
    "./src/scss/styles.scss"
  ],
  devtool: 'source-map',
  output: {
    path: require("path").resolve("./dist"),
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!' +
          'sass?sourceMap'
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};