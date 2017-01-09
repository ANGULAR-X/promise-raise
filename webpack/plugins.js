'use strict';

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ngtools = require('@ngtools/webpack');
const path = require('path');

module.exports = [
  new webpack.ProgressPlugin(),
  new webpack.ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
    path.join(process.cwd(), 'src')
  ),
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    'window.jQuery': 'jquery',
    'window.$': 'jquery'
  }),
  new ForkCheckerPlugin(),
  new CommonsChunkPlugin({
    name: ['polyfill', 'vendor','jquery'].reverse(),
    minChunks : Infinity
  }),
  // new CopyWebpackPlugin([
  //   {
  //     from : './assets',to :'src/assets'
  //   }
  // ]),
  new ExtractTextPlugin({filename:'style.bundle.css'}),
  new ngtools.AotPlugin({
    tsConfigPath: './tsconfig.json',
    entryModule: path.resolve(process.cwd(),'src','app','app.module')+'#MainModule'
  }),
  new HtmlWebpackPlugin({
    template: './index.html',
    chunksSortMode: 'dependency',
    inject: 'head',
    hash : true,
    minify : {
      removeComments : true,
      collapseWhitespace : true
    }
  }),

  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer'
  }),
  new LoaderOptionsPlugin({})
];
