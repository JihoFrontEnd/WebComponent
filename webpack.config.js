var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval',
  devServer: {
    hot: true,
    port: 9000,
  },
  module: {
    rules: [
      { test: /\.scss$/i, use: ['to-string-loader', 'css-loader', 'sass-loader'] },
      { test: /\.html$/i, use: ['html-loader'] },
      { test: /\.ts?$/i, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.js?$/i, use: "babel-loader", exclude: /node_module/ },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".js"],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
  ],
};
