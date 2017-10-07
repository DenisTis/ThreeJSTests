var path = require("path");
var webpack = require("webpack");
var IntlPlugin = require("intl-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    devtool: "inline-source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/dist"
    },
    plugins: [
      new webpack.ProvidePlugin({
        THREE: "three",
        CANNON: "cannon"
      }),
      new IntlPlugin({
        search: ['./src/**/*.intl']
      })
    ]
  }
  // ,
  // module: {
  //   rules: [{
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['es2015', 'stage-0']
  //       }
  //     },
  //     {
  //       test: /\.(intl|i18n)$/i,
  //       use: [
  //         IntlPlugin.loader(),
  //         'yaml-loader'
  //       ]
  //     },
  //     { test: /\.css$/, use: "css" },
  //     { test: /\.(eot|gif|jpg|png|svg|ttf|woff)$/, use: "url-loader?limit=100000" }
  //   ]
  // }
;
