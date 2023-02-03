const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  devtool: 'inline-source-map',
  entry: {
    index: '/src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  watchOptions: {
    ignored: '/node_modules/',
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Homepage',
      filename: 'index.html',
      template: '/src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/inline',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    watchFiles: {
      paths: ['src/*.html'],
    },
  },
};
