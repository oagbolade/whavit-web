'use strict';

const webpack              = require('webpack');
const merge                = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const helpers              = require('./helpers');
const commonConfig         = require('./webpack.config.common');
const environment = require('./env/dev.env');
const HtmlWebpackPlugin = require("html-webpack-plugin");


const webpackConfig = merge(commonConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  output: {
    path: helpers.root("dist"),
    filename: "index_bundle.js",
    //filename: "js/[name].bundle.js",
    publicPath: "/",
    chunkFilename: "js/[id].chunk.js"
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin(environment),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: "assets/index.html"
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    port: 8000,
    stats: {
      normal: true
    }
  }
});

module.exports = webpackConfig;