const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: '[name].min.js'
  },

  plugins: [
    new CleanWebpackPlugin(['built']),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      favicon: '../public/favicon.ico',
      hash: true,
      template: '../public/index.html'
    })
  ],
});
