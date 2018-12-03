'use strict';

/* global before, beforeEach, describe, it */

const crypto = require('crypto');

const async = require('async');
const dotenv = require('dotenv');
const expect = require('expect.js');
const moment = require('moment');
const R = require('ramda');
const sinon = require('sinon');

const plaid = require('../');
const testConstants = require('./testConstants.js');

dotenv.config();
const {SECRET, PUBLIC_KEY, CLIENT_ID} = process.env;

describe('plaid.Client', () => {

  let pCl;
  beforeEach(() => {
    pCl = new plaid.Client(CLIENT_ID, SECRET, PUBLIC_KEY,
      plaid.environments.sandbox);
  });

  describe('constructor', () => {
    it('throws for missing client_id', () => {
      expect(() => {
        plaid.Client(null, SECRET, PUBLIC_KEY, plaid.environments.sandbox);
      }).to.throwException(e => {
        expect(e).to.be.ok();
        expect(e.message).to.equal('Missing Plaid "client_id"');
      });
    });

    it('throws for missing secret', () => {
      expect(() => {
        plaid.Client(CLIENT_ID, null, PUBLIC_KEY,  plaid.environments.sandbox);
      }).to.throwException(e => {
        expect(e).to.be.ok();
        expect(e.message).to.equal('Missing Plaid "secret"');
      });
    });

    it('throws for missing public_key', () => {
      expect(() => {
        plaid.Client(CLIENT_ID, SECRET, null, plaid.environments.sandbox);
      }).to.throwException(e => {
        expect(e).to.be.ok();
        expect(e.message).to.equal('Missing Plaid "public_key"');
      });
    });

    it('throws for invalid environment', () => {
      expect(() => {
        plaid.Client(CLIENT_ID, SECRET, PUBLIC_KEY, 'gingham');
      }).to.throwException(e => {
        expect(e).to.be.ok();
        expect(e.message).to.equal('Invalid Plaid environment');
      });
    });

    it('succeeds with all arguments', () => {
      expect(() => {
        R.forEachObjIndexed(env => {
          plaid.Client(CLIENT_ID, SECRET, PUBLIC_KEY, env);
        }, plaid.environments);
      }).not.to.throwException();
    });
  });

  describe('endpoints', () => {

    const now = moment().format('YYYY-MM-DD');
    let testAccessToken;

    before(cb => {
      pCl.createItem({
        username: testConstants.USERNAME,
        password: testConstants.PASSWORDS.GOOD
      }, testConstants.INSTITUTION, testConstants.PRODUCTS, {},
      (err, mfaResponse, successResponse) => {
        expect(err).to.be(null);
        expect(mfaResponse).to.be(null);
        testAccessToken = successResponse.access_token;

        cb();
      });
    });

    describe('item', () => {

      describe('createItem', () => {
        it('normal flow', cb => {
          pCl.createItem({
            username: testConstants.USERNAME,
            password: testConstants.PASSWORDS.GOOD
          }, testConstants.INSTITUTION, testConstants.PRODUCTS, {},
          (err, mfaResponse, successResponse) => {
            expect(err).to.be(null);
            expect(mfaResponse).to.be(null);
            expect(successResponse).to.be.ok();
            expect(successResponse.status_code).to.be(200);
            expect(successResponse.request_id).to.be.ok();

            cb();
          });
        });

        it('normal flow (w/o options arg)', cb => {
          pCl.createItem({
            username: testConstants.USERNAME,
            password: testConstants.PASSWORDS.GOOD
          }, testConstants.INSTITUTION, testConstants.PRODUCTS,
          (err, mfaResponse, successResponse) => {
            expect(err).to.be(null);
            expect(mfaResponse).to.be(null);
            expect(successResponse).to.be.ok();
            expect(successResponse.status_code).to.be(200);
            expect(successResponse.request_id).to.be.ok();

            cb();
          });
        });

        it('mfa flow', cb => {
          pCl.createItem({
            username: testConstants.USERNAME,
            password: testConstants.PASSWORDS.MFA_SELECTIONS
          }, testConstants.INSTITUTION, testConstants.PRODUCTS, {},
          (err, mfaResponse, successResponse) => {
            expect(err).to.be(null);
            expect(successResponse).to.be(null);
            expect(mfaResponse).to.be.ok();
            expect(mfaResponse.status_code).to.be(210);
            expect(mfaResponse.request_id).to.be.ok();

            cb();
          });
        });

        it('err flow (invalid credentials)', cb => {
           pCl.createItem({
            username: testConstants.USERNAME,
            password: testConstants.PASSWORDS.INVALID,
          }, testConstants.INSTITUTION, testConstants.PRODUCTS, {},
          (err, mfaResponse, successResponse) => {
            expect(err).to.be.ok();
            expect(err.status_code).to.be(400);
            expect(err.request_id).to.be.ok();
            expect(successResponse).not.to.be.ok();
            expect(mfaResponse).not.to.be.ok();

            cb();
          });
        });
      });

      describe('itemManagement', () => {

        it('mfa', cb => {
          async.waterfall([
            cb => {
             pCl.createItem({
                username: testConstants.USERNAME,
                password: testConstants.PASSWORDS.MFA_SELECTIONS
              }, testConstants.INSTITUTION, testConstants.PRODUCTS, {},
              (err, mfaResponse, successResponse) => {
                expect(err).to.be(null);
                expect(successResponse).to.be(null);
                expect(mfaResponse).to.be.ok();

                cb(err, mfaResponse);
              });
            },
            (mfaResponse, cb) => {
              const accessToken = mfaResponse.access_token;

              pCl.answerItemMFA(accessToken, mfaResponse.mfa_type,
                testConstants.MFA_RESPONSES.SELECTIONS, {},
              (err, mfaResponse, successResponse) => {
                expect(err).to.be(null);
                expect(mfaResponse).to.be(null);
                expect(successResponse).to.be.ok();
                expect(successResponse.status_code).to.be(200);

                cb();
              });
            }
          ], cb);
        });

        it('mfa (w/o options arg)', cb => {
          async.waterfall([
            cb => {
             pCl.createItem({
                username: testConstants.USERNAME,
                password: testConstants.PASSWORDS.MFA_SELECTIONS
              }, testConstants.INSTITUTION, testConstants.PRODUCTS, {},
              (err, mfaResponse, successResponse) => {
                expect(err).to.be(null);
                expect(successResponse).to.be(null);
                expect(mfaResponse).to.be.ok();

                cb(err, mfaResponse);
              });
            },
            (mfaResponse, cb) => {
              const accessToken = mfaResponse.access_token;

              pCl.answerItemMFA(accessToken, mfaResponse.mfa_type,
                testConstants.MFA_RESPONSES.SELECTIONS,
              (err, mfaResponse, successResponse) => {
                expect(err).to.be(null);
                expect(mfaResponse).to.be(null);
                expect(successResponse).to.be.ok();
                expect(successResponse.status_code).to.be(200);

                cb();
              });
            }
          ], cb);
        });

        it('update credentials, update credentials (w/o options arg)', cb => {
          async.waterfall([
            cb => {
             pCl.createItem({
                username: testConstants.USERNAME,
                password: testConstants.PASSWORDS.GOOD
              }, testConstants.INSTITUTION, testConstants.PRODUCTS, {},
              (err, mfaResponse, successResponse) => {
                expect(err).to.be(null);
                expect(mfaResponse).to.be(null);
                expect(successResponse).to.be.ok();

                cb(null, successResponse);
              });
            },
            (successResponse, cb) => {
              const accessToken = successResponse.access_token;

              pCl.resetLogin(accessToken, (err, successResponse) => {
                expect(err).to.be(null);
                expect(successResponse.reset_login);

                cb(null, accessToken);
              });
            },
            (accessToken, cb) => {
              pCl.updateItemCredentials(accessToken, {
                username: testConstants.USERNAME,
                password: testConstants.PASSWORDS.GOOD
              }, {}, (err, mfaResponse, successResponse) => {
                expect(err).to.be(null);
                expect(mfaResponse).to.be(null);
                expect(successResponse).to.be.ok();
                expect(successResponse.status_code).to.be(200);

                cb(null, accessToken);
              });
            }, (accessToken, cb) => {
              pCl.resetLogin(accessToken, (err, successResponse) => {
                expect(err).to.be(null);
                expect(successResponse.reset_login);

                cb(null, accessToken);
              });
            },
            (accessToken, cb) => {
              // juggled version
              pCl.updateItemCredentials(accessToken, {
                username: testConstants.USERNAME,
                password: testConstants.PASSWORDS.GOOD
              }, (err, mfaResponse, successResponse) => {
                expect(err).to.be(null);
                expect(mfaResponse).to.be(null);
                expect(successResponse).to.be.ok();
                expect(successResponse.status_code).to.be(200);

                cb(null, accessToken);
              });
            }
          ], cb);
        });

        it('create and exchange a public token', cb => {
          async.waterfall([
            cb => {
             pCl.createItem({
                username: testConstants.USERNAME,
                password: testConstants.PASSWORDS.GOOD
              }, testConstants.INSTITUTION, testConstants.PRODUCTS, {},
              (err, mfaResponse, successResponse) => {
                expect(err).to.be(null);
                expect(mfaResponse).to.be(null);
                expect(successResponse).to.be.ok();

                cb(null, successResponse);
              });
            },
            (successResponse, cb) => {
              const accessToken = successResponse.access_token;

              pCl.createPublicToken(accessToken, (err, successResponse) => {
                expect(err).to.be(null);
                expect(successResponse.status_code).to.be(200);
                expect(successResponse.public_token).to.be.ok();

                cb(null, successResponse.public_token);
              });
            },
            (publicToken, cb) => {
              pCl.exchangePublicToken(publicToken, (err, successResponse) => {
                expect(err).to.be(null);
                expect(successResponse.status_code).to.be(200);
                expect(successResponse.access_token).to.be.ok();

                cb();
              });
            }
          ], cb);
        });

        it('update access token version', cb => {
          // Generate a dummy legacy access token, a 160 character hex string
          // We only test the failure case here since we can't generate a
          // valid legacy access_token
          const dummyAccessToken = crypto.randomBytes(80).toString('hex');
          pCl.updateAccessTokenVersion(dummyAccessToken,
            (err, successResponse) => {
              void successResponse;
              expect(err).to.be.ok();
              expect(err.status_code).to.be(400);
              expect(err.error_code).to.be('INVALID_ACCESS_TOKEN');

              cb();
          });
        });

        it('invalidate an access_token, then delete the item', cb => {
          async.waterfall([
            cb => {
              pCl.createItem({
                username: testConstants.USERNAME,
                password: testConstants.PASSWORDS.GOOD
              }, testConstants.INSTITUTION, testConstants.PRODUCTS, {},
              (err, mfaResponse, successResponse) => {
                expect(err).to.be(null);
                expect(mfaResponse).to.be(null);
                expect(successResponse).to.be.ok();

                cb(null, successResponse);
              });
            },
            (successResponse, cb) => {
              pCl.invalidateAccessToken(successResponse.access_token,
              (err, successResponse) => {
                expect(err).to.be(null);
                expect(successResponse).to.be.ok();
                expect(successResponse.status_code).to.be(200);

                cb(null, successResponse.new_access_token);
              });
            },
            (newAccessToken, cb) => {
              pCl.deleteItem(newAccessToken, (err, successResponse) => {
                expect(err).to.be(null);
                expect(successResponse).to.be.ok();
                expect(successResponse.deleted).to.be(true);

                cb();
              });
            }
          ], cb);
        });

        it('invalidate an access_token, then remove the item', cb => {
          async.waterfall([
            cb => {
              pCl.createItem({
                username: testConstants.USERNAME,
                password: testConstants.PASSWORDS.GOOD
              }, testConstants.INSTITUTION, testConstants.PRODUCTS, {},
              (err, mfaResponse, successResponse) => {
                expect(err).to.be(null);
                expect(mfaResponse).to.be(null);
                expect(successResponse).to.be.ok();

                cb(null, successResponse);
              });
            },
            (successResponse, cb) => {
              pCl.invalidateAccessToken(successResponse.access_token,
              (err, successResponse) => {
                expect(err).to.be(null);
                expect(successResponse).to.be.ok();
                expect(successResponse.status_code).to.be(200);

                cb(null, successResponse.new_access_token);
              });
            },
            (newAccessToken, cb) => {
              pCl.removeItem(newAccessToken, (err, successResponse) => {
                expect(err).to.be(null);
                expect(successResponse).to.be.ok();
                expect(successResponse.removed).to.be(true);

                cb();
              });
            }
          ], cb);
        });

        it('update webhook', cb => {
          async.waterfall([
            cb => {
             pCl.createItem({
                username: testConstants.USERNAME,
                password: testConstants.PASSWORDS.GOOD
              }, testConstants.INSTITUTION, testConstants.PRODUCTS, {},
              (err, mfaResponse, successResponse) => {
                expect(err).to.be(null);
                expect(mfaResponse).to.be(null);
                expect(successResponse).to.be.ok();

                cb(null, successResponse);
              });
            },
            (successResponse, cb) => {
              const accessToken = successResponse.access_token;
              pCl.updateItemWebhook(accessToken,
                                    'https://fooWebhook.com',
                                    (err, successResponse) => {
                expect(err).to.be(null);
                expect(successResponse).to.be.ok();
                expect(successResponse.status_code).to.be(200);

                cb(null, accessToken);
              });
            }
          ], cb);
        });
      });
    });

    describe('product access', () => {

      it('item', cb => {
        pCl.getItem(testAccessToken, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();

          cb();
        });
      });

      it('accounts', cb => {
        pCl.getAccounts(testAccessToken, {}, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();
          expect(successResponse.accounts).to.be.ok();

          cb();
        });
      });

      it('accounts (w/o options arg)', cb => {
        pCl.getAccounts(testAccessToken, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();
          expect(successResponse.accounts).to.be.ok();

          cb();
        });
      });

      it('balance', cb => {
        pCl.getBalance(testAccessToken, {}, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();
          expect(successResponse.accounts).to.be.ok();

          cb();
        });
      });

      it('balance (w/o options arg)', cb => {
        pCl.getBalance(testAccessToken, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();
          expect(successResponse.accounts).to.be.ok();

          cb();
        });
      });

      it('auth', cb => {
        pCl.getAuth(testAccessToken, {}, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();
          expect(successResponse.accounts).to.be.ok();
          expect(successResponse.numbers).to.be.ok();

          cb();
        });
      });

      it('auth (w/o options arg)', cb => {
        pCl.getAuth(testAccessToken, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();
          expect(successResponse.accounts).to.be.ok();
          expect(successResponse.numbers).to.be.ok();

          cb();
        });
      });

      it('identity', cb => {
        pCl.getIdentity(testAccessToken, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();
          expect(successResponse.identity).to.be.ok();

          cb();
        });
      });

      it('credit details', cb => {
        pCl.getCreditDetails(testAccessToken, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();
          expect(successResponse.credit_details).to.be.ok();

          cb();
        });
      });

      describe('transactions', () => {
        let accessToken;
        beforeEach(done => {
          pCl.createItem({
            username: testConstants.USERNAME,
            password: testConstants.PASSWORDS.GOOD
          }, testConstants.INSTITUTION, testConstants.PRODUCTS, {
            transactions: {
              start_date: now,
              end_date: now,
              await_results: true
            }
          },
          (err, mfaResponse, successResponse) => {
            expect(err).to.be(null);
            expect(successResponse).to.be.ok();

            accessToken = successResponse.access_token;
            done();
          });
        });

        it('normal flow', cb => {
          pCl.getTransactions(accessToken, now, now, {},
          (err, successResponse) => {
            expect(err).to.be(null);
            expect(successResponse).to.be.ok();
            expect(successResponse.transactions).to.be.an(Array);

            cb();
          });
        });

        it('all transactions', cb => {
          pCl.getAllTransactions(accessToken, now, now,
          (err, transactions) => {
            expect(err).to.be(null);
            expect(transactions).to.be.an(Array);

            cb();
          });
        });

        it('all transactions (promise)', cb => {
          pCl.getAllTransactions(accessToken, now, now).then(transactions => {
            expect(transactions).to.be.an(Array);

            cb();
          }).catch(err => cb(err));
        });

        it('all transactions (error)', cb => {
          pCl.getAllTransactions(accessToken, now, -1,
          (err, transactions) => {
            expect(err).to.be.ok();
            expect(err.status_code).to.be(400);
            expect(err.request_id).to.be.ok();
            expect(err.error_code).to.equal('INVALID_FIELD');
            expect(transactions).to.not.be.ok();

            cb();
          });
        });

        it('all transactions (error) (promise)', cb => {
          pCl.getAllTransactions(accessToken, now, -1).then(() => {
            cb(new Error('unexpected code path for test'));
          }).catch(err => {
            expect(err).to.be.ok();
            expect(err.status_code).to.be(400);
            expect(err.request_id).to.be.ok();
            expect(err.error_code).to.equal('INVALID_FIELD');

            cb();
          });
        });

        it('all < 500 transactions with correct pagination', cb => {
          sinon.stub(pCl, 'getTransactions').callsFake(
            (access_token, start_date, end_date, options) => {
              if (options.offset === 0) {
                return Promise.resolve({
                  transactions: R.range(0, 200),
                  total_transactions: 200,
                });
              } else {
                throw new Error('Invalid nonzero offset value');
              }
            });

          pCl.getAllTransactions(accessToken, now, now,
            (err, transactions) => {
              expect(err).to.be(null);
              expect(transactions).to.eql(R.range(0, 200));

              pCl.getTransactions.restore();
              cb();
            });
        });

        it('all < 500 transactions with correct pagination (promise)', cb => {
          sinon.stub(pCl, 'getTransactions').callsFake(
            (access_token, start_date, end_date, options) => {
              if (options.offset === 0) {
                return Promise.resolve({
                  transactions: R.range(0, 200),
                  total_transactions: 200,
                });
              } else {
                throw new Error('Invalid nonzero offset value');
              }
            });

          pCl.getAllTransactions(accessToken, now, now).then(transactions => {
            expect(transactions).to.eql(R.range(0, 200));

            pCl.getTransactions.restore();
            cb();
          }).catch(err => {
            pCl.getTransactions.restore();
            cb(err);
          });
        });

        it('all > 500 transactions with correct pagination', cb => {
          sinon.stub(pCl, 'getTransactions').callsFake(
            (access_token, start_date, end_date, options) => {
              let transactionsResponse = {
                total_transactions: 1200,
              };
              if (options.offset === 0) {
                transactionsResponse.transactions = R.range(0, 500);
              } else if (options.offset === 500) {
                transactionsResponse.transactions = R.range(500, 1000);
              } else if (options.offset === 1000) {
                transactionsResponse.transactions = R.range(1000, 1200);
              } else {
                throw new Error('Invalid offset value');
              }
              return Promise.resolve(transactionsResponse);
            });

          pCl.getAllTransactions(accessToken, now, now,
            (err, transactions) => {
              expect(err).to.be(null);
              expect(transactions).to.eql(R.range(0, 1200));

              pCl.getTransactions.restore();
              cb();
            });
        });

        it('all > 500 transactions with correct pagination (promise)', cb => {
          sinon.stub(pCl, 'getTransactions').callsFake(
            (access_token, start_date, end_date, options) => {
              let transactionsResponse = {
                total_transactions: 1200,
              };
              if (options.offset === 0) {
                transactionsResponse.transactions = R.range(0, 500);
              } else if (options.offset === 500) {
                transactionsResponse.transactions = R.range(500, 1000);
              } else if (options.offset === 1000) {
                transactionsResponse.transactions = R.range(1000, 1200);
              } else {
                throw new Error('Invalid offset value');
              }
              return Promise.resolve(transactionsResponse);
            });

          pCl.getAllTransactions(accessToken, now, now).then(transactions => {
            expect(transactions).to.eql(R.range(0, 1200));

            pCl.getTransactions.restore();
            cb();
          }).catch(err => {
            pCl.getTransactions.restore();
            cb(err);
          });
        });

        it('transactions (w/o options arg) (with 400)', cb => {
          pCl.getTransactions('invalid token', now, now,
          (err, successResponse) => {
            expect(err).to.be.ok();
            expect(successResponse).not.to.be.ok();
            expect(err.status_code).to.be(400);
            expect(err.request_id).to.be.ok();
            expect(err.error_code).to.be('INVALID_ACCESS_TOKEN');

            cb();
          });
        });
      });
    });

    describe('assets', () => {
      var days_requested = 60;
      var options = {
        client_report_id: 'reportid123',
        webhook: 'http://wwww.example.com',
        user: {
          client_user_id: 'userid123',
          first_name: 'first',
          middle_name: 'middle',
          last_name: 'last',
          ssn: '999-60-1111',
          phone_number: '(123)456-7890',
          email: 'hello@test.com',
        },
      };
      var auditor_id = CLIENT_ID;

      var createAssetReport = (cb) => {
        pCl.createAssetReport([testAccessToken], days_requested, options,
        (err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();
          expect(response.request_id).to.be.ok();
          expect(response.asset_report_token).to.be.ok();
          expect(response.asset_report_id).to.be.ok();

          cb(null, response.asset_report_token);
        });
      };

      var getAssetReportWithRetries =
        (asset_report_token, num_retries_remaining, cb) => {
        if (num_retries_remaining <= 0) {
          throw new Error('Ran out of retries while polling for asset report');
        }

        // By default, we don't want to retrieve the report as an Asset Report
        // with Insights. For information about Asset Reports with Insights,
        // see https://plaid.com/docs/#retrieve-json-report-request.
        var include_insights = false;

        pCl.getAssetReport(asset_report_token, include_insights, (err, response) => {
          if (err) {
            if (err.status_code === 400 &&
                err.error_code === 'PRODUCT_NOT_READY') {
              setTimeout(() => {
                getAssetReportWithRetries(
                  asset_report_token, num_retries_remaining - 1, cb);
              }, 1000);
            } else {
              throw new Error(
                'Unexpected error while polling for asset report', err);
            }
          } else {
            expect(err).to.be(null);
            expect(response).to.be.ok();
            expect(response.report).to.be.ok();

            cb(null, asset_report_token);
          }
        });
      };

      var getAssetReportWithInsights = (asset_report_token, cb) => {
        pCl.getAssetReport(asset_report_token, true, (err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();
          expect(response.report).to.be.ok();

          // The transactions in an Asset Report with Insights should have a
          // non-null `name` (when available).
          expect(response.report.items[0].accounts[0].transactions[0].name).to.not.be(null);

          cb(null, asset_report_token, response.report);
        });
      };

      var filterAssetReport = (asset_report_token, report, cb) => {
        var account_ids_to_exclude = [report.items[0].accounts[0].account_id];

        pCl.filterAssetReport(asset_report_token,
                              account_ids_to_exclude,
                              (err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();

          cb(null, asset_report_token);
        });
      };

      var refreshAssetReport = (asset_report_token, cb) => {
        pCl.refreshAssetReport(asset_report_token, 60, {}, (err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();

          cb(null, asset_report_token);
        });
      };

      var getAssetReportPdf = (asset_report_token, cb) => {
        pCl.getAssetReportPdf(asset_report_token, (err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();

          cb(null, asset_report_token);
        });
      };

      var createAuditCopy = (asset_report_token, cb) => {
        pCl.createAuditCopy(asset_report_token, auditor_id,
          (err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();
          expect(response.audit_copy_token).to.be.ok();

          cb(null, asset_report_token, response.audit_copy_token);
        });
      };

      var getAuditCopy = (asset_report_token, audit_copy_token, cb) => {
        pCl.getAuditCopy(audit_copy_token, (err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();

          cb(null, asset_report_token, audit_copy_token);
        });
      };

      var removeAuditCopy = (asset_report_token, audit_copy_token, cb) => {
        pCl.removeAuditCopy(audit_copy_token, (err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();
          expect(response.removed).to.be(true);

          cb(null, asset_report_token);
        });
      };

      var removeAssetReport = (asset_report_token, cb) => {
        pCl.removeAssetReport(asset_report_token, (err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();
          expect(response.removed).to.be(true);

          cb();
        });
      };

      it('successfully goes through the entire flow', cb => {
        async.waterfall([
          createAssetReport,
          (asset_report_token, cb) => {
            getAssetReportWithRetries(asset_report_token, 60, cb);
          },
          getAssetReportWithInsights,
          filterAssetReport,
          refreshAssetReport,
          getAssetReportPdf,
          createAuditCopy,
          getAuditCopy,
          removeAuditCopy,
          removeAssetReport,
        ], cb);
      });
    });

    describe('institutions', () => {

      it('get', cb => {
        pCl.getInstitutions(10, 0, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.institutions).to.be.an(Array);

          cb();
        });
      });

      it('getById', cb => {
        pCl.getInstitutionById(testConstants.INSTITUTION, {},
        (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.institution).to.be.ok();

          cb();
        });
      });

      it('getById (w/o options arg)', cb => {
        pCl.getInstitutionById(testConstants.INSTITUTION,
        (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.institution).to.be.ok();

          cb();
        });
      });

      it('search', cb => {
        pCl.searchInstitutionsByName(testConstants.INSTITUTION, null, {},
        (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.institutions).to.be.an(Array);

          cb();
        });
      });

      it('search (w/o options arg)', cb => {
        pCl.searchInstitutionsByName(testConstants.INSTITUTION, null,
        (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.institutions).to.be.an(Array);

          cb();
        });
      });
    });

    describe('categories', () => {
      it('get', cb => {
        pCl.getCategories((err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.categories).to.be.an(Array);

          cb();
        });
      });
    });

    describe('sandbox-only', () => {
      it('sandboxPublicTokenCreate', cb => {
        pCl.sandboxPublicTokenCreate(
          testConstants.INSTITUTION, [testConstants.PRODUCTS[0]], {},
          (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.public_token).to.be.ok();
          // Ensure the generated public_token can be
          // exchanged for an access_token
          pCl.exchangePublicToken(successResponse.public_token,
                                  (err, exchangeSuccessResponse) => {
            expect(err).to.be(null);
            expect(exchangeSuccessResponse).to.be.ok();
            expect(exchangeSuccessResponse.access_token).to.be.ok();
            cb();
          });
        });
      });
    });

    describe('errors', () => {
      it('MFA bad request (library error)', cb => {
        // branch is only reachable by mucking with Client's internal state
        pCl.env = null;

        pCl.updateItemCredentials(testAccessToken, {
          username: testConstants.USERNAME,
          password: testConstants.PASSWORDS.GOOD,
        },
        (err, mfaResponse, successResponse) => {
          expect(err).to.be.ok();
          expect(err.status_code).not.to.be.ok();
          expect(mfaResponse).not.to.be.ok();
          expect(successResponse).not.to.be.ok();

          cb();
        });
      });

      it('no MFA bad request (library error)', cb => {
        pCl.env = null;

        pCl.getItem(null, (err, successResponse) => {
          expect(err).to.be.ok();
          expect(err.status_code).not.to.be.ok();
          expect(successResponse).not.to.be.ok();

          cb();
        });
      });
    });
  });

  describe('create an item and complete MFA flow', () => {
    it('device', cb => {
      const credentials = {
        username: testConstants.USERNAME,
        password: testConstants.PASSWORDS.MFA_DEVICE
      };

      let accessToken;

      async.waterfall([
        cb => {
          pCl.createItem(credentials, testConstants.INSTITUTION,
            testConstants.PRODUCTS, cb);
        },
        (mfaResponse, successResponse, cb) => {
          expect(successResponse).to.be(null);
          expect(mfaResponse).to.be.ok();
          expect(mfaResponse.mfa_type).to.be('device_list');
          expect(mfaResponse.device_list).to.be.ok();
          accessToken = mfaResponse.access_token;

          // arbitrarily choose the first device option
          const chosenDevice = R.head(mfaResponse.device_list);

          pCl.answerItemMFA(accessToken, mfaResponse.mfa_type,
            [chosenDevice.device_id], cb);
        },
        (mfaResponse, successResponse, cb) => {
          expect(successResponse).to.be(null);
          expect(mfaResponse).to.be.ok();
          expect(mfaResponse.mfa_type).to.be('device');

           pCl.answerItemMFA(accessToken, mfaResponse.mfa_type,
            testConstants.MFA_RESPONSES.DEVICE, cb);
        }
      ], (err, mfaResponse, successResponse) => {
        expect(err).to.be(null);
        expect(mfaResponse).to.be(null);
        expect(successResponse).to.be.ok();
        expect(successResponse.item).to.be.ok();
        expect(successResponse.request_id).to.be.ok();
        expect(successResponse.status_code).to.be(200);

        cb();
      });
    });

    it('selections', cb => {
      const credentials = {
        username: testConstants.USERNAME,
        password: testConstants.PASSWORDS.MFA_SELECTIONS
      };

      async.waterfall([
        cb => {
          pCl.createItem(credentials, testConstants.INSTITUTION,
            testConstants.PRODUCTS, cb);
        },
        (mfaResponse, successResponse, cb) => {
          expect(successResponse).to.be(null);
          expect(mfaResponse).to.be.ok();
          expect(mfaResponse.mfa_type).to.be('selections');
          expect(mfaResponse.device_list).to.be(null);

          pCl.answerItemMFA(mfaResponse.access_token, mfaResponse.mfa_type,
            testConstants.MFA_RESPONSES.SELECTIONS, cb);
        }
      ], (err, mfaResponse, successResponse) => {
        expect(err).to.be(null);
        expect(mfaResponse).to.be(null);
        expect(successResponse).to.be.ok();
        expect(successResponse.item).to.be.ok();
        expect(successResponse.request_id).to.be.ok();
        expect(successResponse.status_code).to.be(200);

        cb();
      });
    });

    it('questions_1_1', cb => {
      // 2 rounds, 2 questions each
      const credentials = {
        username: testConstants.USERNAME,
        password: testConstants.PASSWORDS.MFA_QUESTIONS_1_1
      };

      let accessToken;

      async.waterfall([
        cb => {
          pCl.createItem(credentials, testConstants.INSTITUTION,
            testConstants.PRODUCTS, cb);
        },
        (mfaResponse, successResponse, cb) => {
          expect(successResponse).to.be(null);
          expect(mfaResponse).to.be.ok();
          expect(mfaResponse.mfa_type).to.be('questions');
          expect(mfaResponse.device_list).to.be(null);
          accessToken = mfaResponse.access_token;

          pCl.answerItemMFA(accessToken, mfaResponse.mfa_type,
            testConstants.MFA_RESPONSES.QUESTIONS_1_1[0], cb);
        },
      ], (err, mfaResponse, successResponse) => {
        expect(err).to.be(null);
        expect(mfaResponse).to.be(null);
        expect(successResponse).to.be.ok();
        expect(successResponse.item).to.be.ok();
        expect(successResponse.request_id).to.be.ok();
        expect(successResponse.status_code).to.be(200);

        cb();
      });
    });

    it('questions_2_2', cb => {
      // 2 rounds, 2 questions each
      const credentials = {
        username: testConstants.USERNAME,
        password: testConstants.PASSWORDS.MFA_QUESTIONS_2_2
      };

      let accessToken;

      async.waterfall([
        cb => {
          pCl.createItem(credentials, testConstants.INSTITUTION,
            testConstants.PRODUCTS, cb);
        },
        (mfaResponse, successResponse, cb) => {
          expect(successResponse).to.be(null);
          expect(mfaResponse).to.be.ok();
          expect(mfaResponse.mfa_type).to.be('questions');
          expect(mfaResponse.device_list).to.be(null);
          accessToken = mfaResponse.access_token;

          pCl.answerItemMFA(accessToken, mfaResponse.mfa_type,
            testConstants.MFA_RESPONSES.QUESTIONS_2_2[0], cb);
        },
        (mfaResponse, successResponse, cb) => {
          expect(successResponse).to.be(null);
          expect(mfaResponse).to.be.ok();
          expect(mfaResponse.mfa_type).to.be('questions');
          expect(mfaResponse.device_list).to.be(null);

          pCl.answerItemMFA(accessToken, mfaResponse.mfa_type,
            testConstants.MFA_RESPONSES.QUESTIONS_2_2[1], cb);
        }
      ], (err, mfaResponse, successResponse) => {
        expect(err).to.be(null);
        expect(mfaResponse).to.be(null);
        expect(successResponse).to.be.ok();
        expect(successResponse.item).to.be.ok();
        expect(successResponse.request_id).to.be.ok();
        expect(successResponse.status_code).to.be(200);

        cb();
      });
    });
  });

  describe('promises', () => {
    let testAccessToken;

    beforeEach(cb => {
      const createItem = pCl.createItem({
        username: testConstants.USERNAME,
        password: testConstants.PASSWORDS.GOOD
      }, testConstants.INSTITUTION, testConstants.PRODUCTS, {});

      createItem.then(([mfaResponse, successResponse]) => {
        testAccessToken = successResponse.access_token;
      }).catch(err => {
        void err;
        throw new Error('Unreachable code block for test');
      }).then(() => {
        cb();
      });
    });

    describe('success path', () => {
      it('normal', cb => {
         pCl.searchInstitutionsByName(testConstants.INSTITUTION, null, {})
         .then(successResponse => {
          expect(successResponse).to.be.ok();
          expect(successResponse.institutions).to.be.an(Array);
        }).catch(err => {
          void err;
          throw new Error('Unreachable code block for test');
        }).then(() => {
          cb();
        });
      });

      it('normal (w/o options arg)', cb => {
        pCl.searchInstitutionsByName(testConstants.INSTITUTION, null)
        .then(successResponse => {
          expect(successResponse).to.be.ok();
          expect(successResponse.institutions).to.be.an(Array);
        }).catch(err => {
          void err;
          throw new Error('Unreachable code block for test');
        }).then(() => {
          cb();
        });
      });

      it('mfa (success)', cb => {
        pCl.createItem({
          username: testConstants.USERNAME,
          password: testConstants.PASSWORDS.GOOD
        }, testConstants.INSTITUTION, testConstants.PRODUCTS, {})
        .then(([mfaResponse, successResponse]) => {
          expect(mfaResponse).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.status_code).to.be(200);
          expect(successResponse.request_id).to.be.ok();
        }).catch(err => {
          void err;
          throw new Error('Unreachable code block for test');
        }).then(() => {
          cb();
        });
      });

      it('mfa (success) (w/o options arg)', cb => {
        pCl.createItem({
          username: testConstants.USERNAME,
          password: testConstants.PASSWORDS.GOOD
        }, testConstants.INSTITUTION, testConstants.PRODUCTS)
        .then(([mfaResponse, successResponse])  => {
          expect(mfaResponse).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.status_code).to.be(200);
          expect(successResponse.request_id).to.be.ok();
        }).catch(err => {
          void err;
          throw new Error('Unreachable code block for test');
        }).then(() => {
          cb();
        });
      });

      it('mfa (mfa)', cb => {
        pCl.createItem({
          username: testConstants.USERNAME,
          password: testConstants.PASSWORDS.MFA_DEVICE
        }, testConstants.INSTITUTION, testConstants.PRODUCTS, {})
        .then(([mfaResponse, successResponse]) => {
          expect(successResponse).to.be(null);
          expect(mfaResponse).to.be.ok();
          expect(mfaResponse.status_code).to.be(210);
          expect(mfaResponse.request_id).to.be.ok();
        }).catch(err => {
          void err;
          throw new Error('Unreachable code block for test');
        }).then(() => {
          cb();
        });
      });

      it('mfa (mfa) (w/o options arg)', cb => {
        pCl.createItem({
          username: testConstants.USERNAME,
          password: testConstants.PASSWORDS.MFA_DEVICE
        }, testConstants.INSTITUTION, testConstants.PRODUCTS)
        .then(([mfaResponse, successResponse]) => {
          expect(successResponse).to.be(null);
          expect(mfaResponse).to.be.ok();
          expect(mfaResponse.status_code).to.be(210);
          expect(mfaResponse.request_id).to.be.ok();
        }).catch(err => {
          void err;
          throw new Error('Unreachable code block for test');
        }).then(() => {
          cb();
        });
      });
    });

    describe('error path', () => {
      it('normal', cb => {
        pCl.getAccounts('promise', {}).then(successResponse => {
          void successResponse;
          throw new Error('Unreachable code block for test');
        }).catch(err => {
          expect(err).to.be.ok();
          expect(err.status_code).to.be(400);
        }).then(() => {
          cb();
        });
      });

      it('normal (w/o options arg)', cb => {
        pCl.getAccounts('promise').then(successResponse => {
          void successResponse;
          throw new Error('Unreachable code block for test');
        }).catch(err => {
          expect(err).to.be.ok();
          expect(err.status_code).to.be(400);
        }).then(() => {
          cb();
        });
      });

      it('mfa', cb => {
        pCl.createItem({
          username: testConstants.USERNAME,
          password: testConstants.INVALID
        }, testConstants.INSTITUTION, testConstants.PRODUCTS, {})
        .then(([mfaResponse, successResponse])  => {
          void successResponse;
          throw new Error('Unreachable code block for test');
        }).catch(err => {
          expect(err).to.be.ok();
          expect(err.status_code).to.be(400);
        }).then(() => {
          cb();
        });
      });

      it('mfa (w/o options arg)', cb => {
        pCl.createItem({
          username: testConstants.USERNAME,
          password: testConstants.INVALID
        }, testConstants.INSTITUTION, testConstants.PRODUCTS)
        .then(([mfaResponse, successResponse])  => {
          void successResponse;
          throw new Error('Unreachable code block for test');
        }).catch(err => {
          expect(err).to.be.ok();
          expect(err.status_code).to.be(400);
        }).then(() => {
          cb();
        });
      });
    });
  });
});
