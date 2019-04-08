/**
 * @Author: Weily
 * @Date: 2019/4/4
 * @Description:
 * @Last Modified by: Weily
 * @Last Modified time: 2019/4/4
*/
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3333,
    open: true
  }
});
