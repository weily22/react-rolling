/**
 * @Author: Weily
 * @Date: 2019/4/4
 * @Description:
 * @Last Modified by: Weily
 * @Last Modified time: 2019/4/4
*/
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }],
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
    new CleanWebpackPlugin()
  ]
};

