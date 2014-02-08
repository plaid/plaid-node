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
var userCredentials = {
	username : 'plaid_test'
	, password : 'plaid_good'
};
var userEmail = 'test@plaid.com';
var fakeUserInfo = {
	username: 'fake'
	, password: 'test'
	, type    : 'amex'
	, email   : 'philippe.modard@gmail.com'
};
var userToken = ''; // Token received after connecting a user
var userConnected = false; // User connected to the bank

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
			should.exist(err);
			err.should.equal('secret or client_id invalid');
			should.not.exist(mfa);
			done();
		})
		
	});

	it('fails connecting a user if fake secret', function(done) {

		var p = plaid({client_id: keys.client_id, secret: 'fake'});
		p.initialized.should.be.true;

		p.connect(fakeUserInfo, fakeUserInfo.type, fakeUserInfo.email, function(err, res, mfa) {
			should.exist(err);
			err.should.equal('secret or client_id invalid');
			should.not.exist(mfa);
			done();
		})
		
	});

	it('fails connecting a fake user', function(done) {

		var p = plaid(keys);
		p.initialized.should.be.true;

		p.connect(fakeUserInfo, fakeUserInfo.type, fakeUserInfo.email, function(err, res, mfa) {
			should.exist(err);
			err.should.equal('invalid credentials');
			should.not.exist(mfa);
			done();
		})
		
	});

	it('fails connecting a locked user', function(done) {

		var p = plaid(keys);
		p.initialized.should.be.true;

		p.connect({username: 'plaid_test', password: 'plaid_locked'}, fakeUserInfo.type, fakeUserInfo.email, function(err, res, mfa) {
			should.exist(err);
			err.should.equal('account locked');
			should.not.exist(mfa);
			done();
		})
	});

});



describe('connect success', function() {

	var p;

	before(function(done) {
		p = plaid(keys);
		p.initialized.should.be.true;
		done();
	});


	it('successfully connect a user to amex', function(done) {
		var options = {login: true};

		p.connect(userCredentials, 'amex', userEmail, options, function(err, res, mfa) {
			should.not.exist(err);
			mfa.should.be.false;
			res.should.have.property('access_token');
			res.should.have.property('accounts');
			res.should.have.property('transactions');
			if (options.login === true) {
				res.transactions.should.have.lengthOf(0);
			}
			userToken = res.access_token;
			done();
		});
	});

	it('successfully connect a user to bofa', function(done) {
		var options = {login: true};

		p.connect(userCredentials, 'bofa', userEmail, options, function(err, res, mfa) {
			should.not.exist(err);
			
			res.should.have.property('access_token');
			userToken = res.access_token;

			mfa.should.be.true;
			res.type.should.equal("questions");
			res.should.have.property('mfa').with.lengthOf(1);
			res.mfa[0].should.have.property('question');

			var question = res.mfa[0].question;
			var answer = "tomato"
			
			/**
			 * Send the answer.
			 */
			p.step(userToken, answer, options, function(err, res) {
				should.not.exist(err);
				res.should.have.property('access_token');
				res.should.have.property('accounts');
				res.should.have.property('transactions');
				if (options.login === true) {
					res.transactions.should.have.lengthOf(0);
				}
				userToken = res.access_token;
				done();
			});
		});
	});

	it('successfully connect a user to chase', function(done) {
		var options = {login: true};

		p.connect(userCredentials, 'chase', userEmail, options, function(err, res, mfa) {
			should.not.exist(err);
			mfa.should.be.true;

			res.type.should.equal("device");
			res.should.have.property('mfa');
			res.mfa.should.have.property('message');

			var question = res.mfa.message;
			var answer = "1234";

			/**
			 * Send the answer.
			 */
			p.step(userToken, answer, options, function(err, res) {
				should.not.exist(err);
				res.should.have.property('access_token');
				res.should.have.property('accounts');
				res.should.have.property('transactions');
				if (options.login === true) {
					res.transactions.should.have.lengthOf(0);
				}
				userToken = res.access_token;
				done();
			});
		});
	});

	it('successfully connect a user to citi', function(done) {
		var options = {login: true};

		p.connect(userCredentials, 'citi', userEmail, options, function(err, res, mfa) {
			should.not.exist(err);
			mfa.should.be.false;
			res.should.have.property('access_token');
			res.should.have.property('accounts');
			res.should.have.property('transactions');
			if (options.login === true) {
				res.transactions.should.have.lengthOf(0);
			}
			userToken = res.access_token;
			done();
		});
	});

	it('successfully connect a user to wells', function(done) {
		var options = {login: true};

		p.connect(userCredentials, 'wells', userEmail, options, function(err, res, mfa) {
			should.not.exist(err);
			mfa.should.be.false;
			res.should.have.property('access_token');
			res.should.have.property('accounts');
			res.should.have.property('transactions');
			if (options.login === true) {
				res.transactions.should.have.lengthOf(0);
			}
			userToken = res.access_token;
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
		})
		
	});

});
