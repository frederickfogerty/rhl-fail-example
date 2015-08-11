var path = require('path')

var webpack = require('webpack')

var atImport = require('postcss-import')
var customMedia = require('postcss-custom-media')
var minmax = require('postcss-media-minmax')
var autoprefixer = require('autoprefixer-core')
var cssnext = require('cssnext')
var nested = require('postcss-nested')
var objectAssign = require('object-assign')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './app/main.js'
  ],

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
      'app'
    ],
    extensions: ['', '.js', '.jsx', '.json'],
    fallback: path.join(__dirname, 'node_modules')
  },

  resolveLoader: { fallback: path.join(__dirname, 'node_modules') },

  plugins: [
    new webpack.DefinePlugin({
      __DEVTOOLS__: false,
      __DEV__: true,
      __CURRENT_ENV__: 'development'
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new HtmlWebpackPlugin({
      title: 'HOLIS',
      template: './app/index.html.template',
      inject: true,
      minify: true,
      favicon: './assets/favicon.png',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {test: /\.json/, loader: 'json'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=image/svg+xml'},
      {test: /\.png/, loader: 'url'},
      {test: /\.jsx?$/, loaders: [ 'react-hot', 'babel' ], include: path.join(__dirname, 'app')},
      {test: /\.css/, loader: 'style!css?module&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader'},
      {test: /\.less/, loader: 'style!css!autoprefixer?browsers=last 2 version!less'},
    ],
  },

  postcss: function () {
    return [atImport({
      // see postcss-import docs to learn about onImport callback
      // https://github.com/postcss/postcss-import
      onImport: function (files) {
        files.forEach(this.addDependency)
      }.bind(this)
    }), minmax, customMedia, nested, cssnext, autoprefixer]
  }

}
