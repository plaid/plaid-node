'use strict';

var environments = require('./plaidEnvironments.js');
var Client = require('./PlaidClient.js');

module.exports = {
  environments: environments,
  Client: Client
};
