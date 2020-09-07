const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: "index.js"
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
  ],
  devServer: {
    open: true,
    port: 3001,
    contentBase: 'src',
    hot: true
  },
  mode: 'development',
  devtool: 'eval-source-map'
}
