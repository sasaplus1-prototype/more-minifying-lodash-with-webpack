'use strict';

const path = require('path');

const webpack = require('webpack');

const LodashWebpackPlugin = require('lodash-webpack-plugin');

module.exports = function(env) {
  return {

    context: __dirname,

    target: 'web',

    entry: {
      dest: path.normalize(`${__dirname}/src.js`),
    },

    output: {
      path: path.normalize(__dirname),
      publicPath: './',
      filename: '[name].js',
    },

    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          use: [
            { loader: 'babel-loader' },
          ],
        },
      ],
    },

    resolve: {
      extensions: [
        '.js',
      ],
    },

    plugins: [
      new LodashWebpackPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
    ],

  };
};
