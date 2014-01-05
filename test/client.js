/**
 * Keys.
 */
var utils  = require('./utils')
	, keys 	 = utils.getKeys()
	;

/**
 * Module dependencies.
 */
var plaid  = require('../')
  , should = require('should')
  , assert = require('assert')
  ;

/**
 * Variables.
 */
var userInfo = utils.getUser()
	, fakeUserInfo = {
				username: 'fake'
			, password: 'test'
			, type    : 'amex'
			, email   : 'philippe.modard@gmail.com'
		}
	, userToken = ''
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

describe('connect', function() {

	it('fails connecting a user if fake client_id', function(done) {

		var p = plaid({client_id: 'fake', secret: keys.secret});
		p.initialized.should.be.true;

		p.connect(fakeUserInfo, fakeUserInfo.type, fakeUserInfo.email, function(err, res, mfa) {
			res.should.have.property('success', false);
			res.should.have.property('error', 'secret and/or client_id invalid');
			should.not.exist(mfa);
			done();
		})
		
	});

	it('fails connecting a user if fake secret', function(done) {

		var p = plaid({client_id: keys.client_id, secret: 'fake'});
		p.initialized.should.be.true;

		p.connect(fakeUserInfo, fakeUserInfo.type, fakeUserInfo.email, function(err, res, mfa) {
			res.should.have.property('success', false);
			res.should.have.property('error', 'secret and/or client_id invalid');
			should.not.exist(mfa);
			done();
		})
		
	});

	it('fails connecting a fake user', function(done) {

		var p = plaid(keys);
		p.initialized.should.be.true;

		p.connect(fakeUserInfo, fakeUserInfo.type, fakeUserInfo.email, function(err, res, mfa) {
			res.should.have.property('success', false);
			res.should.have.property('error', 'Invalid Login Credentials');
			should.not.exist(mfa);
			done();
		})
		
	});

	it.skip('successfully connect a user', function(done) {

		var p = plaid(keys);
		p.initialized.should.be.true;

		p.connect(userInfo, userInfo.type, userInfo.email, function(err, res, mfa) {
			should.not.exist(err);
			userToken = res.access_token;
			if (userInfo.type === 'bofa') {
				res.should.have.property('success', false);
				res.should.have.property('mfa');
				res.should.have.property('access_token');
				res.should.have.property('error', 'Invalid Login Credentials');
				mfa.should.be.false;
			} else {} // complete tests for other account types
			done();
		})
		
	});

	it('successfully remove a user', function(done) {

		var p = plaid(keys);
		p.initialized.should.be.true;

		p.remove(userToken, function(err, res, mfa) {
			should.not.exist(err);
			res.should.have.property('success', true);
			res.should.have.property('message', 'Successfully removed from system');
			done();
		})
		
	});

});