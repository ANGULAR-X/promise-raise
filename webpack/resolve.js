'use strict';

const path = require('path');
const helpers = require('./helpers');

module.exports = {
  extensions: ['.ts', '.js', '.json', '.css', '.less', '.html'],
  modules: [helpers.root('src'), 'node_modules'],
  alias: {
    jquery: "jquery/dist/jquery.min.js"
  }
};
