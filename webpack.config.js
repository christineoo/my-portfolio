var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');
var ROOT_DIR = path.resolve(__dirname, 'src');

var config = {
    devTools: 'source-map',

    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        APP_DIR + '/index.jsx',
        ROOT_DIR + '/index.html'

    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [
          {
              test: /\.jsx?/,
              include: APP_DIR,
              loader: 'babel'
          },
          {
              test: /\.html$/,
              loader: 'file?name=[name].[ext]'
          },
          {
              test: /\.scss$/,
              loaders: [
                  'style', 'css?sourceMap', 'sass?sourceMap'
              ]
          },
          {
              test: /\.json$/,
              loader: 'json-loader'
          },
          {
              test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
              loader: 'url?limit=8192'
          },
          {
              test: /\.(jpe?g|png|gif)$/i,
              loaders: [
                  'url?limit=8192', 'img'
              ]
          }
      ]
    }
};

module.exports = config;