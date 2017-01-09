'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// var env=process.env.NODE_ENV;
// var isProd=env==='prod';

module.exports = {
  rules: [
    {
      test: /\.ts$/,
      loader: [
        '@ngtools/webpack'
      ]
      // use: [
      //     'awesome-typescript-loader?transpileOnly=false&forkChecker=false&doTypeCheck=false',
      //     'angular2-template-loader','angular-router-loader'
      // ]
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.css$/,
      include: path.resolve(process.cwd(), 'src', 'app'),
      loaders: ['to-string-loader', 'css-loader']
    },
    {
      test: /\.css$/,
      exclude: path.resolve(process.cwd(), 'src', 'app'),
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader'
      })
    },
    {
      test: /\.html$/,
      loader: 'html-loader?attrs=img:src img:data-src'
    },
    {
      test: /\.(png|jpeg|jpg|JPG|JPEG|gif|ico)$/,
      loader : 'url-loader?limit=8192&name=[name].[ext]'
    },
    {
      test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
      loader: 'url-loader'
    },
    {
      test : /\.(ttf|eot)(\?[\s\S]+)?$/,
      loader: 'file-loader'
    }
  ]
};
