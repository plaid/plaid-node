'use strict';

const environments = require('./plaidEnvironments.js');
const Client = require('./PlaidClient.js');

module.exports = {
  environments: environments,
  Client: Client
};
