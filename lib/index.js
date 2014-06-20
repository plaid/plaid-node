'use strict';

var Client = require('./client');

module.exports = function(options) {
  return new Client(options);
};
