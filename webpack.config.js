
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

module.exports = {
  // devtool: 'source-map',
  context: __dirname,
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hanbongul.js',
    library: 'hanbongul',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
    ],
  },
  plugins: [
    /*
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      minimize: true,
      sourceMap: true,
    }),
    */
  ],
}
