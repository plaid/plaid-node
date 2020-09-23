'use strict';

/* global describe, it */

const assert = require('assert');


const nock = require('nock');
const nockingbird = require('nockingbird');

const plaid = require('../');
const plaidRequest = require('../lib/plaidRequest');

const eq = assert.strictEqual;
const deepEqual = assert.deepEqual;

describe('plaid.plaidRequest', () => {
  const scope = nock('https://sandbox.plaid.com');

  it('gracefully handles invalid JSON from the API', done => {
    nockingbird.load(scope, './test/mocks/api-invalid-json.nb');

    plaidRequest({
      env: plaid.environments.sandbox,
      client_id: 'xxx',
      secret: 'yyy',
    }, {
      path: '/institutions/get_by_id',
      body: {institution_id: 'ins_3'},
    }, {}, (err, res) => {
      eq(res, undefined);
      eq(err.error_code, 'INTERNAL_SERVER_ERROR');
      scope.done();
      done();
    });
  });

  it('resolves with request_id and data on happy path (non-MFA)', done => {
    nockingbird.load(scope, './test/mocks/api-valid-json.nb');

    const expectedRes = {
      request_id: '1234abcd',
      buffer: {
        // from response body
        institution_id: 'ins_1',
        description: 'more money, more problems',
        // added by plaidRequest
        status_code: 200
      }
    };

    plaidRequest({
      env: plaid.environments.sandbox,
      client_id: 'www',
      secret: 'vvv',
    }, {
      path: '/institutions/get_by_id',
      body: {institution_id: 'ins_1'},
    }, {}, (err, res) => {


      deepEqual(res, expectedRes);
      eq(err, null);
      scope.done();
      done();
    });
  });
});
