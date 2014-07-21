'use strict';

module.exports = {
  protocol: 'https://',
  host: 'tartan.plaid.com',
  endpoint: {
    get: {
      method: 'GET',
      route: 'connect'
    },
    submit: {
      method: 'POST',
      route: 'connect'
    },
    step: {
      method: 'POST',
      route: 'connect/step'
    },
    remove: {
      method: 'DELETE',
      route: 'connect'
    },
    patch: {
      method: 'PATCH',
      route: 'connect'
    }
  }
};
