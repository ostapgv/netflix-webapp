const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    bundle: './index'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'built'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  devtool: 'inline-source-map'
};
