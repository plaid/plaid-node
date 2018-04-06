'use strict';

/* global describe, it */

const assert = require('assert');
const eq = assert.strictEqual;

const plaid = require('../');

describe('plaid.isPlaidError', () => {
  it('returns false for a null input', done => {
    eq(plaid.isPlaidError(null), false);
    done();
  });

  it('returns false for a normal error', done => {
    eq(plaid.isPlaidError(new Error('Bad request')), false);
    done();
  });

  it('returns false for a network error', done => {
    eq(plaid.isPlaidError({
      Error: 'Not found',
      code: 'ENOTFOUND',
      errno: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      port: 80,
    }), false);
    done();
  });

  it('returns false for a Plaid error with missing fields', done => {
    eq(plaid.isPlaidError({
      error_type: 'API_ERROR',
      error_code: 'INTERNAL_SERVER_ERROR',
    }), false);
    done();
  });

  it('returns true for a Plaid error with a null display_message', done => {
    eq(plaid.isPlaidError({
      error_type: 'API_ERROR',
      status_code: 500,
      error_code: 'INTERNAL_SERVER_ERROR',
      error_message: 'Something bad happened.',
      display_message: 'An error occurred. Try again.',
    }), true);
    done();
  });

  it('returns true for a Plaid error with a string display_message', done => {
    eq(plaid.isPlaidError({
      error_type: 'API_ERROR',
      status_code: 500,
      error_code: 'INTERNAL_SERVER_ERROR',
      error_message: 'Something bad happened.',
      display_message: null,
      request_id: null,
    }), true);
    done();
  });
});
