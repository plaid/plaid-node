/**
 * Keys.
 */
var utils  = require('./utils'),
    keys    = utils.getKeys()
  ;

/**
 * Module dependencies.
 */
var plaid  = require('../'),
    should = require('should'),
    assert = require('assert'),
    _      = require('underscore')
  ;

/**
 * Variables.
 */
var userInfo = utils.getUser(),
    fakeUserInfo = {
  username: 'plaid_test',
  password: 'fake',
  type    : 'amex',
  email   : 'philippe.modard@gmail.com'
},
    userToken = '', // Token received after connecting a user
    userConnected = false // User connected to the bank
  ;


/**
 * Tests
 */
describe('require', function() {

  it('fails if no authentification is passed', function() {
    var p = plaid();
    p.initialized.should.be.false;
  });

});



describe('connect fail', function() {

  it('fails connecting a user if fake client_id', function(done) {

    var p = plaid({client_id: 'fake', secret: keys.secret});
    p.initialized.should.be.true;

    p.connect(fakeUserInfo, fakeUserInfo.type, fakeUserInfo.email, function(err, res) {
      err.should.have.property('code', 1102);
      err.should.have.property('message', 'secret or client_id invalid');
      done();
    });

  });

  it('fails connecting a user if fake secret', function(done) {

    var p = plaid({client_id: keys.client_id, secret: 'fake'});
    p.initialized.should.be.true;

    p.connect(fakeUserInfo, fakeUserInfo.type, fakeUserInfo.email, function(err, res) {
      err.should.have.property('code', 1102);
      err.should.have.property('message', 'secret or client_id invalid');
      done();
    });

  });

  it('fails connecting a fake user', function(done) {

    var p = plaid(keys);
    p.initialized.should.be.true;

    p.connect(fakeUserInfo, fakeUserInfo.type, fakeUserInfo.email, function(err, res) {
      err.should.have.property('code', 1200);
      err.should.have.property('message', 'invalid credentials');
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
    p.initialized.should.be.true;
    done();
  });

  it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options, function(err, res, mfa) {
      should.not.exist(err);

      res.should.have.property('access_token');
      userToken = res.access_token;

      mfa.should.be.true;
      res.should.have.property('type', 'questions');
      res.should.have.property('mfa').with.lengthOf(1);
      res.mfa[0].should.have.property('question');

      /**
       * Answer the question.
       */
      var answer = userInfo.mfa_question;

      p.step(userToken, answer, options, function(err, res) {
        should.not.exist(err);

        res.should.have.property('access_token');
        res.should.have.property('accounts');
        res.should.have.property('transactions').with.lengthOf(0);
        userToken = res.access_token;

        done();
      });

    });

  });

  it('successfully get a user transactions', function(done) {

    p.get(userToken, function(err, res) {
      should.not.exist(err);
      res.should.have.property('accounts');
      res.should.have.property('transactions');
      done();
    });

  });

  it('successfully remove a user', function(done) {

    p.remove(userToken, function(err, res, mfa) {
      should.not.exist(err);
      res.should.have.property('message', 'Successfully removed from system');
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
    p.initialized.should.be.true;
    done();
  });

  it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options, function(err, res, mfa) {
      should.not.exist(err);

      res.should.have.property('access_token');
      userToken = res.access_token;

      mfa.should.be.false;
      res.should.have.property('accounts');
      res.should.have.property('transactions').with.lengthOf(0);
      done();

    });

  });

  it('successfully get a user transactions', function(done) {

    p.get(userToken, function(err, res) {
      should.not.exist(err);
      res.should.have.property('accounts');
      res.should.have.property('transactions');
      done();
    });

  });

  it('successfully remove a user', function(done) {

    p.remove(userToken, function(err, res, mfa) {
      should.not.exist(err);
      res.should.have.property('message', 'Successfully removed from system');
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
    p.initialized.should.be.true;
    done();
  });

  it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options, function(err, res, mfa) {
      should.not.exist(err);

      res.should.have.property('access_token');
      userToken = res.access_token;

      mfa.should.be.false;
      res.should.have.property('accounts');
      res.should.have.property('transactions').with.lengthOf(0);
      done();

    });

  });

  it('successfully get a user transactions', function(done) {

    p.get(userToken, function(err, res) {
      should.not.exist(err);
      res.should.have.property('accounts');
      res.should.have.property('transactions');
      done();
    });

  });

  it('successfully remove a user', function(done) {

    p.remove(userToken, function(err, res, mfa) {
      should.not.exist(err);
      res.should.have.property('message', 'Successfully removed from system');
      done();
    });

  });

});


/**
 * Wells Farfo.
 */
describe('connect success (Wells Fargo)', function() {

  var p, type;

  before(function(done) {
    type = 'wells';
    p = plaid(keys);
    p.initialized.should.be.true;
    done();
  });

  it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options, function(err, res, mfa) {
      should.not.exist(err);

      res.should.have.property('access_token');
      userToken = res.access_token;

      mfa.should.be.false;
      res.should.have.property('accounts');
      res.should.have.property('transactions').with.lengthOf(0);
      done();

    });

  });

  it('successfully get a user transactions', function(done) {

    p.get(userToken, function(err, res) {
      should.not.exist(err);
      res.should.have.property('accounts');
      res.should.have.property('transactions');
      done();
    });

  });

  it('successfully remove a user', function(done) {

    p.remove(userToken, function(err, res, mfa) {
      should.not.exist(err);
      res.should.have.property('message', 'Successfully removed from system');
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
    p.initialized.should.be.true;
    done();
  });

  it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options, function(err, res, mfa) {
      should.not.exist(err);

      res.should.have.property('access_token');
      userToken = res.access_token;

      mfa.should.be.true;
      res.should.have.property('type', 'device');
      res.should.have.property('mfa');
      res.mfa.should.have.property('message');
      res.mfa.message.should.containEql('Code sent to');

      /**
       * Answer the question.
       */
      var answer = userInfo.mfa_code;

      p.step(userToken, answer, options, function(err, res) {
        should.not.exist(err);

        res.should.have.property('access_token');
        res.should.have.property('accounts');
        res.should.have.property('transactions').with.lengthOf(0);
        userToken = res.access_token;

        done();
      });

    });

  });

  it('successfully get a user transactions', function(done) {

    p.get(userToken, function(err, res) {
      should.not.exist(err);
      res.should.have.property('accounts');
      res.should.have.property('transactions');
      done();
    });

  });

  it('successfully remove a user', function(done) {

    p.remove(userToken, function(err, res, mfa) {
      should.not.exist(err);
      res.should.have.property('message', 'Successfully removed from system');
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
    p.initialized.should.be.true;
    done();
  });

  it('successfully connect a user', function(done) {

    var options = {login: true};

    p.connect(userInfo, type, userInfo.email, options, function(err, res, mfa) {
      should.not.exist(err);
      userToken = res.access_token;

      var answer = userInfo.mfa_question;
      p.step(userToken, answer, options, function(err, res) {
        should.not.exist(err);
        res.should.have.property('transactions').with.lengthOf(0);

        type = 'amex';
        var info = _.pick(userInfo, 'username', 'password');
        p.connect(info, type, userInfo.email, options, function(err, res, mfa) {
          should.not.exist(err);
          res.should.have.property('transactions').with.lengthOf(0);
          done();
        });

      });

    });

  });

});
