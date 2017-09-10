const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  context: path.join(__dirname, 'src'),

  entry: {
    script: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      './index',
    ]
  },

  output: {
    path: path.join(__dirname, "built"),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
      loaders: [
        "react-hot-loader/webpack",
        "awesome-typescript-loader"
      ],

    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          }, {
            loader: 'typed-css-modules-loader',
            options: {
              camelCase: true,
              outDir: './built/css-modules'
            },
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'Test',
      favicon: '../public/favicon.ico',
      hash: true,
      template: '../public/index.html'
    }),
  ],
};
