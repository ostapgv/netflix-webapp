const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

  entry: {
    bundle: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      './index',
    ]
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'Main',
      favicon: '../public/favicon.ico',
      hash: true,
      template: '../public/index.html'
    })
  ]
});
