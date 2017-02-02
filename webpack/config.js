var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var nib = require('nib')
var rupture = require('rupture')

module.exports = {
  entry: path.resolve(__dirname, '../app/index.js'),

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js',
    publicPath: '/'
  },

  resolve: {
    root: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../app')
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
      },
      {
        test: /.(txt)$/i,
        loaders: ['static']
      }
    ]
  },

  stylus: {
    use: [ nib(), rupture() ],
    import: [
      path.resolve(__dirname, '../node_modules/nib/lib/nib/index.styl'),
      path.resolve(__dirname, '../app/styles/global')
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/assets/index.html'),
      filename: '200.html',
      inject: 'body',
      favicon: path.resolve(__dirname, '../app/assets/favicon.ico')
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 8080,
    historyApiFallback: true,
    noInfo: true
  }
}
