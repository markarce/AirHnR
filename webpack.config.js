var path = require('path');
var __src = path.join(__dirname, '/client/src');
var __dist = path.join(__dirname, '/client/dist');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: `${__src}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: __dist
  },
  // plugins: [
  //   new UglifyJSPlugin(),
  //   new HtmlWebpackPlugin({ template: __src+ '/index.html' }),
  //   new CleanWebpackPlugin([__dist], {watch: true}),
  //   new FaviconsWebpackPlugin(__src + '/assets/logo.png')
  // ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: __src,
        loader: 'babel-loader',
        query: {
          presets: ['react', ['env', {loose: true, modules: false}]]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};


//You need these for analyzing bundle size in dev
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// new BundleAnalyzerPlugin({ openAnalyzer: false }),
