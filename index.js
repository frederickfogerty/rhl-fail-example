
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var webpackConfig = require('./webpack.config')

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: '/',

  // contentBase: './app/',

  // inline: true,

  hot: true,

  stats: {
    colors: true,
    exclude: [
      /node_modules[\\\/]react(-router)?[\\\/]/
    ]
  },

  historyApiFallback: true,

  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3001',
    'Access-Control-Allow-Headers': 'X-Requested-With'
  }
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err)
  }

  console.log('webpack dev server listening on localhost:3000')
})
