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
  , prompt = require('prompt')
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
	, userToken = '' // Token received after connecting a user
	, userConnected = false // User connected to the bank
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

});



describe('connect success', function() {

	var p;

	before(function() {
		userInfo.type.should.equal('bofa', "So far the tests only work for 'bofa' account type");
	});

	before(function(done) {
		p = plaid(keys);
		p.initialized.should.be.true;
		done();
	});

	it('successfully connect a user', function(done) {
		this.timeout(100000); // time to answer the question

		p.connect(userInfo, userInfo.type, userInfo.email, {login: true}, function(err, res, mfa) {
			should.not.exist(err);

			res.should.have.property('access_token');
			userToken = res.access_token;

			if (userInfo.type === 'bofa') {
				res.should.have.property('success', false);
				mfa.should.be.true;
				res.should.have.property('mfa');
				res.mfa.should.have.property('question');

				/**
				 * Prompt the question.
				 */
				var question = res.mfa.question;
				prompt.start();
				prompt.get(question, function (err, result) {
					var answer = result[question];
					/**
					 * Send the answer.
					 */
					p.step(userToken, answer, function(err, res) {
						should.not.exist(err);
						res.should.have.property('success', true);
						res.should.have.property('access_token');
						userToken = res.access_token;
						console.log('userToken : ', userToken);
						done();
					})

				});

			} else { // complete tests for other account types
				done();
			}
		})
		
	});

	it('successfully get a user transactions', function(done) {

		p.get(userToken, function(err, res) {
			should.not.exist(err);
			res.should.have.property('success', true);
			res.should.have.property('accounts');
			res.should.have.property('transactions');
			done();
		});

	});

	it('successfully remove a user', function(done) {

		p.remove(userToken, function(err, res, mfa) {
			should.not.exist(err);
			res.should.have.property('success', true);
			res.should.have.property('message', 'Successfully removed from system');
			done();
		})
		
	});

});