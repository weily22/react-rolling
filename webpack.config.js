const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/mixture/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: ['node_modules'],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.s([ac])ss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(['dist']),
  ],
  devServer: {
    host: 'localhost',
    port: 3333,
    open: true
  }
};
