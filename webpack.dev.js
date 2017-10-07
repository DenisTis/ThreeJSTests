const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  devtool: 'inline-source-map'
    //In order this to work, index.html should be stored somewhere else. I do not know how to do it and if it is really needed
    //,
    // devServer: {
    //   contentBase: './dist'
    // }
});
