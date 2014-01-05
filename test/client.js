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
			console.log('err : ', err);
			console.log('res : ', res);
			console.log('mfa : ', mfa);
			res.should.be.type('string');
			res = JSON.parse(res);
			res.should.have.property('success', false);
			res.should.have.property('error', 'Invalid Login Credentials');
			should.not.exist(mfa);
			done();
		})
		
	});

});