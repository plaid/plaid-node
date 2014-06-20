'use strict';

module.exports = {

  getKeys: function() {
    return {
      client_id: process.env.PLAID_CLIENTID || 'test_id',
      secret: process.env.PLAID_SECRET || 'test_secret'
    };
  },

  getUser: function() {
    return {
      username: 'plaid_test',
      password: 'plaid_good',
      locked_password: 'plaid_locked',
      type: 'bofa',
      email: 'test@plaid.com',
      mfa_question: 'tomato',
      mfa_code: '1234',
    };
  },

};
