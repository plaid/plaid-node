'use strict';

/* global describe, it */

const assert = require('assert');


const nock = require('nock');
const nockingbird = require('nockingbird');

const plaid = require('../');
const plaidRequest = require('../lib/plaidRequest');

const eq = assert.strictEqual;

describe('plaid.plaidRequest', () => {
  it('gracefully handles invalid JSON from the API', done => {
      const scope = nock('https://sandbox.plaid.com');
      nockingbird.load(scope, './test/mocks/api-invalid-json.nb');

      plaidRequest({
        env: plaid.environments.sandbox,
        public_key: 'xxx',
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
});
