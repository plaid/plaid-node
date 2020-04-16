'use strict';

/* global describe, it */

const expect = require('expect.js');
const helpers = require('../lib/_helpers');

describe('helpers', () => {

  describe('processUserFields', () => {
    const emailA = 'name@example.com';
    const dateOneString = '2020-04-06T09:47:01.058Z';
    const dateOne = new Date(dateOneString);
    const noDateSupplied = new Date(0).toISOString();

    function runWith(fields, expected) {
      const result = helpers.processUserFields(fields);
      expect(result).to.eql(expected);
    }

    it('handles client_user_id', () => {
      runWith({
        client_user_id: '123456',
        email_address: {
          value: emailA,
          verified: true,
        },
      }, {
        user: {
          client_user_id: '123456',
          email_address: emailA,
          email_address_verified_time: noDateSupplied,
        },
      });
    });
    it('handles field only', () => {
      runWith({
        email_address: {
          value: emailA
        },
      }, {
        user: {
          email_address: emailA,
        },
      });
    });
    it('handles verified', () => {
      runWith({
        email_address: {
          value: emailA,
          verified: true,
        },
      }, {
        user: {
          email_address: emailA,
          email_address_verified_time: noDateSupplied,
        },
      });
    });
    it('handles verified at', () => {
      runWith({
        email_address: {
          value: emailA,
          verified_at: dateOne,
        },
      }, {
        user: {
          email_address: emailA,
          email_address_verified_time: dateOneString,
        },
      });
    });
    it('handles both verification fields', () => {
      expect(() => {
        helpers.processUserFields({
          email_address: {
            value: emailA,
            verified: false,
            verified_at: dateOne,
          },
        });
      }).to.throwError(/accepts only one/);
    });
    it('handles multiple fields', () => {
      runWith({
        email_address: {
          value: emailA,
        },
        phone_number: {
          value: '1234',
        },
      }, {
        user: {
          email_address: emailA,
          phone_number: '1234',
        },
      });

    });
    it('handles empty', () => {
      runWith({}, {});
    });
  });

});
