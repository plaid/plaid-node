'use strict';

/* global before, describe, it */

var assert = require('assert');

var CANON = require('canon');
var _ = require('underscore');

var plaid = require('..');
var utils = require('./utils');


/**
 * Variables.
 */
var keys = utils.getKeys();
var userInfo = utils.getUser();
var fakeUserInfo = {
  username: 'plaid_test',
  password: 'fake',
  type: 'amex',
  email: 'philippe.modard@gmail.com'
};
var userToken = ''; // Token received after connecting a user


/**
 * Tests
 */
describe('initialization', function() {

  it('fails if no authentication is passed', function() {
    var p = plaid();
    assert.strictEqual(p.initialized, false);
  });

  it('throws if passed an invalid config object', function() {
    assert.throws(function() {
      plaid({foo: 42});
    }, function(err) {
      return err.constructor === Error &&
             err.message === 'Invalid config object';
    });
  });

  it('does not mutate the config object', function() {
    var config = {client_id: 'foo', secret: 'bar'};
    plaid(config);
    assert.strictEqual(CANON.stringify(config),
                       CANON.stringify({client_id: 'foo', secret: 'bar'}));
  });

});



describe('connect fail', function() {

  it('fails connecting a user if fake client_id', function(done) {

    var p = plaid({client_id: 'fake', secret: keys.secret});
    assert.strictEqual(p.initialized, true);

    p.connect(fakeUserInfo, fakeUserInfo.type, fakeUserInfo.email,
              function(err) {
      assert.strictEqual(err.code, 1102);
      assert.strictEqual(err.message, 'secret or client_id invalid');
      done();
    });

  });

  it('fails connecting a user if fake secret', function(done) {

    var p = plaid({client_id: keys.client_id, secret: 'fake'});
    assert.strictEqual(p.initialized, true);

    p.connect(fakeUserInfo, fakeUserInfo.type, fakeUserInfo.email,
              function(err) {
      assert.strictEqual(err.code, 1102);
      assert.strictEqual(err.message, 'secret or client_id invalid');
      done();
    });

  });

  it('fails connecting a fake user', function(done) {

    var p = plaid(keys);
    assert.strictEqual(p.initialized, true);

    p.connect(fakeUserInfo, fakeUserInfo.type, fakeUserInfo.email,
              function(err) {
      assert.strictEqual(err.code, 1200);
      assert.strictEqual(err.message, 'invalid credentials');
      done();
    });

  });

});


/**
 * Bank Of America.
 */
describe('connect success (Bank Of America)', function() {

  var p, type;

  before(function(done) {
    type = 'bofa';
    p = plaid(keys);
    assert.strictEqual(p.initialized, true);
    done();
  });

  it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options,
              function(err, res, mfa) {
      assert.strictEqual(err, null);

      assert.strictEqual(_.has(res, 'access_token'), true);
      userToken = res.access_token;

      assert.strictEqual(mfa, true);
      assert.strictEqual(res.type, 'questions');
      assert.strictEqual(repr(res.mfa), '[object Array]');
      assert.strictEqual(res.mfa.length, 1);
      assert.strictEqual(_.has(res.mfa[0], 'question'), true);

      /**
       * Answer the question.
       */
      var answer = userInfo.mfa_question;

      p.step(userToken, answer, options, function(err, res) {
        assert.strictEqual(err, null);

        assert.strictEqual(_.has(res, 'access_token'), true);
        assert.strictEqual(_.has(res, 'accounts'), true);
        assert.strictEqual(repr(res.transactions), '[object Array]');
        assert.strictEqual(res.transactions.length, 0);
        userToken = res.access_token;

        done();
      });

    });

  });

  it('successfully get a user transactions', function(done) {

    p.get(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(_.has(res, 'accounts'), true);
      assert.strictEqual(_.has(res, 'transactions'), true);
      done();
    });

  });

  it('successfully remove a user', function(done) {

    p.remove(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res.message, 'Successfully removed from system');
      done();
    });

  });

});


/**
 * American Express.
 */
describe('connect success (American Express)', function() {

  var p, type;

  before(function(done) {
    type = 'amex';
    p = plaid(keys);
    assert.strictEqual(p.initialized, true);
    done();
  });

  it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options,
              function(err, res, mfa) {
      assert.strictEqual(err, null);

      assert.strictEqual(_.has(res, 'access_token'), true);
      userToken = res.access_token;

      assert.strictEqual(mfa, false);
      assert.strictEqual(_.has(res, 'accounts'), true);
      assert.strictEqual(repr(res.transactions), '[object Array]');
      assert.strictEqual(res.transactions.length, 0);
      done();

    });

  });

  it('successfully get a user transactions', function(done) {

    p.get(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(_.has(res, 'accounts'), true);
      assert.strictEqual(_.has(res, 'transactions'), true);
      done();
    });

  });

  it('successfully remove a user', function(done) {

    p.remove(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res.message, 'Successfully removed from system');
      done();
    });

  });

});


/**
 * Citi.
 */
describe('connect success (Citi)', function() {

  var p, type;

  before(function(done) {
    type = 'citi';
    p = plaid(keys);
    assert.strictEqual(p.initialized, true);
    done();
  });

  it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options,
              function(err, res, mfa) {
      assert.strictEqual(err, null);

      assert.strictEqual(_.has(res, 'access_token'), true);
      userToken = res.access_token;

      assert.strictEqual(mfa, false);
      assert.strictEqual(_.has(res, 'accounts'), true);
      assert.strictEqual(repr(res.transactions), '[object Array]');
      assert.strictEqual(res.transactions.length, 0);
      done();

    });

  });

  it('successfully get a user transactions', function(done) {

    p.get(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(_.has(res, 'accounts'), true);
      assert.strictEqual(_.has(res, 'transactions'), true);
      done();
    });

  });

  it('successfully remove a user', function(done) {

    p.remove(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res.message, 'Successfully removed from system');
      done();
    });

  });

});


/**
 * Wells Fargo.
 */
describe('connect success (Wells Fargo)', function() {

  var p, type;

  before(function(done) {
    type = 'wells';
    p = plaid(keys);
    assert.strictEqual(p.initialized, true);
    done();
  });

  it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options,
              function(err, res, mfa) {
      assert.strictEqual(err, null);

      assert.strictEqual(_.has(res, 'access_token'), true);
      userToken = res.access_token;

      assert.strictEqual(mfa, false);
      assert.strictEqual(_.has(res, 'accounts'), true);
      assert.strictEqual(repr(res.transactions), '[object Array]');
      assert.strictEqual(res.transactions.length, 0);
      done();

    });

  });

  it('successfully get a user transactions', function(done) {

    p.get(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(_.has(res, 'accounts'), true);
      assert.strictEqual(_.has(res, 'transactions'), true);
      done();
    });

  });

  it('successfully remove a user', function(done) {

    p.remove(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res.message, 'Successfully removed from system');
      done();
    });

  });

});


/**
 * Chase.
 */
describe('connect success (Chase)', function() {

  var p, type;

  before(function(done) {
    type = 'chase';
    p = plaid(keys);
    assert.strictEqual(p.initialized, true);
    done();
  });

  it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options,
              function(err, res, mfa) {
      assert.strictEqual(err, null);

      assert.strictEqual(_.has(res, 'access_token'), true);
      userToken = res.access_token;

      assert.strictEqual(mfa, true);
      assert.strictEqual(res.type, 'device');
      assert.strictEqual(res.mfa.message.indexOf('Code sent to'), 0);

      /**
       * Answer the question.
       */
      var answer = userInfo.mfa_code;

      p.step(userToken, answer, options, function(err, res) {
        assert.strictEqual(err, null);

        assert.strictEqual(_.has(res, 'access_token'), true);
        assert.strictEqual(_.has(res, 'accounts'), true);
        assert.strictEqual(repr(res.transactions), '[object Array]');
        assert.strictEqual(res.transactions.length, 0);
        userToken = res.access_token;

        done();
      });

    });

  });

  it('successfully get a user transactions', function(done) {

    p.get(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(_.has(res, 'accounts'), true);
      assert.strictEqual(_.has(res, 'transactions'), true);
      done();
    });

  });

  it('successfully remove a user', function(done) {

    p.remove(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res.message, 'Successfully removed from system');
      done();
    });

  });

});

/**
 * Issue when the same module is called for 2 banks.
 */
describe('Clear global variables', function() {

  var p, type;

  before(function(done) {
    type = 'bofa';
    p = plaid(keys);
    assert.strictEqual(p.initialized, true);
    done();
  });

  it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options, function(err, res) {
      assert.strictEqual(err, null);
      userToken = res.access_token;

      var answer = userInfo.mfa_question;
      p.step(userToken, answer, options, function(err, res) {
        assert.strictEqual(err, null);
        assert.strictEqual(repr(res.transactions), '[object Array]');
        assert.strictEqual(res.transactions.length, 0);

        type = 'amex';
        var info = _.pick(userInfo, 'username', 'password');
        p.connect(info, type, userInfo.email, options, function(err, res) {
          assert.strictEqual(err, null);
          assert.strictEqual(repr(res.transactions), '[object Array]');
          assert.strictEqual(res.transactions.length, 0);
          done();
        });

      });

    });

  });

});


/**
 * US Bank.
 */
describe('connect success (US Bank)', function() {

  var p, type;

  before(function(done) {
    type = 'us';
    p = plaid(keys);
    assert.strictEqual(p.initialized, true);
    done();
  });

   it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options,
              function(err, res, mfa) {
      assert.strictEqual(err, null);

      assert.strictEqual(_.has(res, 'access_token'), true);
      userToken = res.access_token;

      assert.strictEqual(mfa, true);
      assert.strictEqual(res.type, 'questions');
      assert.strictEqual(repr(res.mfa), '[object Array]');
      assert.strictEqual(res.mfa.length, 1);
      assert.strictEqual(_.has(res.mfa[0], 'question'), true);

      /**
       * Answer the question.
       */
      var answer = userInfo.mfa_question;

      p.step(userToken, answer, options, function(err, res) {
        assert.strictEqual(err, null);

        assert.strictEqual(_.has(res, 'access_token'), true);
        assert.strictEqual(_.has(res, 'accounts'), true);
        assert.strictEqual(repr(res.transactions), '[object Array]');
        assert.strictEqual(res.transactions.length, 0);
        userToken = res.access_token;

        done();
      });

    });

  });

  it('successfully get a user transactions', function(done) {

    p.get(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(_.has(res, 'accounts'), true);
      assert.strictEqual(_.has(res, 'transactions'), true);
      done();
    });

  });

  it('successfully remove a user', function(done) {

    p.remove(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res.message, 'Successfully removed from system');
      done();
    });

  });

});


/**
 * USAA.
 */
describe('connect success (USAA)', function() {

  var p, type;

  before(function(done) {
    type = 'usaa';
    p = plaid(keys);
    assert.strictEqual(p.initialized, true);
    done();
  });

   it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect({
      username: 'plaid_test',
      password: 'plaid_good',
      pin: '1234',
    }, type, userInfo.email, options, function(err, res, mfa) {
      assert.strictEqual(err, null);

      assert.strictEqual(_.has(res, 'access_token'), true);
      userToken = res.access_token;

      assert.strictEqual(mfa, true);
      assert.strictEqual(res.type, 'questions');
      assert.strictEqual(repr(res.mfa), '[object Array]');
      assert.strictEqual(res.mfa.length, 1);
      assert.strictEqual(_.has(res.mfa[0], 'question'), true);

      /**
       * Answer the question.
       */
      var answer = userInfo.mfa_question;

      p.step(userToken, answer, options, function(err, res) {
        assert.strictEqual(err, null);

        assert.strictEqual(_.has(res, 'access_token'), true);
        assert.strictEqual(_.has(res, 'accounts'), true);
        assert.strictEqual(repr(res.transactions), '[object Array]');
        assert.strictEqual(res.transactions.length, 0);
        userToken = res.access_token;

        done();
      });

    });

  });

  it('successfully get a user transactions', function(done) {

    p.get(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(_.has(res, 'accounts'), true);
      assert.strictEqual(_.has(res, 'transactions'), true);
      done();
    });

  });

  it('successfully remove a user', function(done) {

    p.remove(userToken, function(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res.message, 'Successfully removed from system');
      done();
    });

  });

});

// repr :: a -> String
function repr(val) {
  return Object.prototype.toString.call(val);
}
