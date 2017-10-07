var path = require("path");
var webpack = require("webpack");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new webpack.ProvidePlugin({
      THREE: "three",
      CANNON: "cannon"
    }),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      // title: 'Production',
      filename: "index.html"
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist"
  }
};
