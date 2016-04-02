var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './app/index.js',

  output: {
    path: './dist',
    filename: 'app.js',
    publicPath: '/'
  },

  resolve: {
    root: [
      path.resolve('node_modules'),
      path.resolve('app')
    ]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&sourceMap!stylus')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['url?limit=10000&hash=sha512&digest=hex&name=[hash].[ext]']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './app/assets/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],

  devServer: {
    contentBase: './dist',
    port: 8080,
    historyApiFallback: true,
    noInfo: true
  }
}
