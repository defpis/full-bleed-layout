import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  entry: __dirname + '/src/main.tsx',
  output: {
    path: __dirname + '/dist/',
    filename: 'main.[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': __dirname + '/src/',
      '@assets': __dirname + '/src/assets/',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      hash: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: __dirname + '/public/',
          to: './',
        },
      ],
    }),
  ],

  stats: false,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
};
