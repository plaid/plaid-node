'use strict';

/* global describe, it */

var assert = require('assert');

var R = require('ramda');
var proxyquire = require('proxyquire');

var eq = assert.strictEqual;

var Plaid = require('../');

describe('Plaid.getCategory', function() {

  it('returns a code 1501 error if the category does not exist',
    function(done) {
    Plaid.getCategory('xxx', Plaid.environments.tartan, function(err, res) {
      eq(err.code, 1501);
      eq(err.statusCode, 404);
      eq(res, null);

      done();
    });
  });

  it('returns a category for a valid category id', function(done) {
    Plaid.getCategory('10000000', Plaid.environments.tartan,
      function(err, res) {
      eq(err, null);

      eq(res.type, 'special');
      eq(res.hierarchy.length, 1);
      done();
    });
  });

  it('handles connection errors gracefully', function(done) {
    var mocked_plaid = proxyquire('../', {
      request: function(body, callback) {
        callback(new Error('foobar'));
      },
    });

    mocked_plaid.getCategory('10000000', Plaid.environments.tartan,
      function(err, res) {
      eq(res, null);

      eq(err.toString(), 'Error: foobar');

      done();
    });
  });

});

describe('Plaid.getCategories', function() {

  it('returns a list of Plaid categories', function(done) {
    Plaid.getCategories(Plaid.environments.tartan, function(err, res) {
      eq(err, null);

      assert(R.is(Array, res));

      done();
    });
  });

});

describe('Plaid.getInstitution', function() {

  it('returns a code 1301 error if the institution does not exist',
    function(done) {
    Plaid.getInstitution('xxx', Plaid.environments.tartan, function(err, res) {
      eq(err.code, 1301);
      eq(err.statusCode, 404);
      eq(res, null);

      done();
    });
  });

  it('returns an institution for a valid institution id', function(done) {
    Plaid.getInstitution('5301a93ac140de84910000e0', Plaid.environments.tartan,
      function(err, res) {
      eq(err, null);

      eq(res.type, 'bofa');

      done();
    });
  });

});

describe('Plaid.getInstitutions', function() {

  it('returns a list of Plaid institutions', function(done) {
    Plaid.getInstitutions(Plaid.environments.tartan, function(err, res) {
      eq(err, null);

      assert(R.is(Array, res));

      done();
    });
  });

});

describe('Plaid.searchInstitutions', function() {

  it('returns long tail Plaid institutions with search term and product', function(done) {
    Plaid.searchInstitutions('charles', 'connect', null, Plaid.environments.tartan, function(err, res) {
      eq(err, null);

      assert(R.is(Array, res));

      done();
    });
  });

  it('returns one institution if id is passed and ignores other params', function(done) {
    Plaid.searchInstitutions('charles', 'connect', '15671', Plaid.environments.tartan, function(err, res) {
      eq(err, null);

      assert(R.is(Object, res));

      done();
    });
  });

});
