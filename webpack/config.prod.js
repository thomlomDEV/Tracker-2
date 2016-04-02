var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = require('./config')

config.output.filename = 'app.[hash].js'
config.devtool = false

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"',
      HOME_URL: '"http://dev.simplebuild.co"',
      API_URL: '"https://api.simplebuild.co"'
    }
  }),

  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true
    },
    output: {
      comments: false
    }
  }),
  new ExtractTextPlugin('app.[hash].css')
])

module.exports = config
