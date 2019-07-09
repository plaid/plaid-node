'use strict';

/* global before, beforeEach, describe, it */

const crypto = require('crypto');

const async = require('async');
const P = require('bluebird');
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
    pCl = new plaid.Client(
      CLIENT_ID,
      SECRET,
      PUBLIC_KEY,
      plaid.environments.sandbox,
      {version: '2019-05-29'}
    );
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
      pCl.sandboxPublicTokenCreate(testConstants.INSTITUTION,
                                   testConstants.PRODUCTS, {},
                                   (err, successResponse) => {
        expect(err).to.be(null);
        pCl.exchangePublicToken(successResponse.public_token,
                                (err, successResponse) => {
          expect(err).to.be(null);
          testAccessToken = successResponse.access_token;
        });
      });
      cb();
    });

    describe('item', () => {

      describe('itemManagement', () => {

        it('create and exchange a public token', cb => {
          async.waterfall([
            cb => {
              pCl.sandboxPublicTokenCreate(testConstants.INSTITUTION,
                                           testConstants.PRODUCTS, {},
                                           (err, successResponse) => {
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

        it('invalidate an access_token, then remove the item', cb => {
          async.waterfall([
            cb => {
              pCl.sandboxPublicTokenCreate(testConstants.INSTITUTION,
                                           testConstants.PRODUCTS, {},
                                           (err, successResponse) => {
                expect(err).to.be(null);
                cb(null, successResponse);
              });
            },
            (publicTokenResponse, cb) => {
              pCl.exchangePublicToken(publicTokenResponse.public_token,
                                      (err, successResponse) => {
                expect(err).to.be(null);
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
              pCl.sandboxPublicTokenCreate(testConstants.INSTITUTION,
                                           testConstants.PRODUCTS, {},
                                           (err, successResponse) => {
                expect(err).to.be(null);
                cb(null, successResponse);
              });
            },
            (publicTokenResponse, cb) => {
              pCl.exchangePublicToken(publicTokenResponse.public_token,
                                      (err, successResponse) => {
                expect(err).to.be(null);
                cb(null, successResponse);
              });
            },
            (successResponse, cb) => {
              const accessToken = successResponse.access_token;
              pCl.updateItemWebhook(accessToken,
                                    'https://httpstat.us/200',
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
          expect(successResponse.accounts).to.be.ok();
          for (const acc of successResponse.accounts) {
            expect(acc.owners).to.be.ok();
            for (const owner of acc.owners) {
              for (const addr of owner.addresses) {
                expect(addr.data.country).to.not.be(undefined);
                expect(addr.data.postal_code).to.not.be(undefined);
                expect(addr.data.region).to.not.be(undefined);
                expect(addr.data.street).to.not.be(undefined);
                expect(addr.data.city).to.not.be(undefined);
              }
            }
          }
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

      it('liabilities', cb => {
        pCl.getLiabilities(testAccessToken, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();
          expect(successResponse.accounts).to.be.ok();
          expect(successResponse.liabilities).to.be.ok();

          cb();
        });
      });

      it('holdings', cb => {
        pCl.getHoldings(testAccessToken, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();
          expect(successResponse.accounts).to.be.ok();
          expect(successResponse.holdings).to.be.ok();
          expect(successResponse.securities).to.be.ok();

          cb();
        });
      });

      it('investmentTransactions', cb => {
        pCl.getInvestmentTransactions(
          testAccessToken, '2019-01-01', '2019-06-10', {},
          (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();
          expect(successResponse.accounts).to.be.ok();
          expect(successResponse.investment_transactions).to.be.an(Array);
          expect(successResponse.securities).to.be.ok();

          cb();
        });
      });

      describe('transactions', () => {
        let accessToken;

        var getTransactionsWithRetries = (accessToken, startDate, endDate,
          count, offset, num_retries_remaining, cb) => {
          if (num_retries_remaining <= 0) {
            throw new
              Error('Ran out of retries while polling for transactions');
          }
          pCl.getTransactions(accessToken, startDate, endDate,
            {count: count, offset: offset}, (err, response) => {
            if (err) {
              if (err.status_code === 400 &&
                  err.error_code === 'PRODUCT_NOT_READY') {
                setTimeout(() => {
                  getTransactionsWithRetries(
                    accessToken, startDate, endDate, count,
                    offset, num_retries_remaining - 1, cb
                  );
                }, 1000);
              } else {
                throw new Error(
                  'Unexpected error while polling for transactions', err);
              }
            } else {
              cb(null, response);
            }
          });
        };

        var getAllTransactionsWithRetries = (accessToken, startDate, endDate,
          num_retries_remaining, cb) => {
          if (num_retries_remaining <= 0) {
            throw new Error(
              'Ran out of retries while polling for all transactions');
          }
          pCl.getAllTransactions(accessToken, startDate, endDate,
            (err, response) => {
            if (err) {
              if (err.status_code === 400 &&
                  err.error_code === 'PRODUCT_NOT_READY') {
                setTimeout(() => {
                  getAllTransactionsWithRetries(
                    accessToken, startDate, endDate,
                    num_retries_remaining - 1, cb);
                }, 1000);
              } else {
                throw new Error(
                  'Unexpected error while polling for all transactions', err);
              }
            } else {
              cb(null, response);
            }
          });
        };

        beforeEach(done => {
          pCl.sandboxPublicTokenCreate(
            testConstants.INSTITUTION, testConstants.PRODUCTS, {
            transactions: {start_date: now, end_date: now},
          }, (err, successResponse) => {
            expect(err).to.be(null);
            pCl.exchangePublicToken(successResponse.public_token,
                                    (err, successResponse) => {
              expect(err).to.be(null);
              accessToken = successResponse.access_token;
              done();
            });
          });
        });

        it('normal flow', cb => {
          getTransactionsWithRetries(accessToken, now, now, 100, 0, 5,
          (err, successResponse) => {
            expect(err).to.be(null);
            expect(successResponse).to.be.ok();
            expect(successResponse.transactions).to.be.an(Array);

            cb();
          });
        });

        it('all transactions', cb => {
          getAllTransactionsWithRetries(accessToken, now, now, 5,
          (err, transactions) => {
            expect(err).to.be(null);
            expect(transactions.accounts).to.not.be(null);
            expect(transactions.item).to.not.be(null);
            expect(transactions.total_transactions).to.not.be(null);
            expect(transactions.transactions).to.be.an(Array);

            cb();
          });
        });

        it('all transactions (promise)', cb => {
          P.promisify(getAllTransactionsWithRetries)
          (accessToken, now, now, 5).then(
            transactions => {
            expect(transactions.accounts).to.not.be(null);
            expect(transactions.item).to.not.be(null);
            expect(transactions.total_transactions).to.not.be(null);
            expect(transactions.transactions).to.be.an(Array);

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
              expect(transactions.accounts).to.not.be(null);
              expect(transactions.item).to.not.be(null);
              expect(transactions.total_transactions).to.not.be(null);
              expect(transactions.transactions).to.eql(R.range(0, 200));

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
            expect(transactions.accounts).to.not.be(null);
            expect(transactions.item).to.not.be(null);
            expect(transactions.total_transactions).to.not.be(null);
            expect(transactions.transactions).to.eql(R.range(0, 200));

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
              expect(transactions.accounts).to.not.be(null);
              expect(transactions.item).to.not.be(null);
              expect(transactions.total_transactions).to.not.be(null);
              expect(transactions.transactions).to.eql(R.range(0, 1200));

              pCl.getTransactions.restore();
              cb();
            });
        });

        // Temporarily skipped
        // See https://github.com/plaid/plaid-node/issues/186
        it.skip('all > 500 transactions with correct pagination (promise)',
          cb => {
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

          getAllTransactionsWithRetries(accessToken, now, now).then(
            transactions => {
            expect(transactions.accounts).to.not.be(null);
            expect(transactions.item).to.not.be(null);
            expect(transactions.total_transactions).to.not.be(null);
            expect(transactions.transactions).to.eql(R.range(0, 1200));

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
        webhook: 'https://httpstat.us/200',
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

        pCl.getAssetReport(asset_report_token, include_insights,
          (err, response) => {
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

          for (const item of response.report.items) {
            for (const account of item.accounts) {
              // The transactions of an Asset Report with Insights should have
              // a non-null `name` (when available).
              for (const transaction of account.transactions) {
                expect(transaction.name).to.be.ok();
              }

              for (const owner of account.owners) {
                for (const addr of owner.addresses) {
                  expect(addr.data.city).to.be.ok();
                  expect(addr.data.state).to.be.ok();
                  expect(addr.data.zip).to.be.ok();
                  expect(addr.data.street).to.be.ok();
                }
              }
            }
          }

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

      it('get with include_optional_metadata', cb => {
        pCl.getInstitutions(10, 0, {include_optional_metadata: true},
          (err, successResponse) => {
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

      it('getById with include_optional_metadata', cb => {
        pCl.getInstitutionById(testConstants.INSTITUTION,
          {include_optional_metadata: true},
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

      it('searches with options include_optional_metadata', cb => {
        pCl.searchInstitutionsByName(testConstants.INSTITUTION, null, {
          include_optional_metadata: true
        },
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
      it('sandboxItemFireWebhook', cb => {
        async.waterfall([
          cb => {
            pCl.sandboxPublicTokenCreate(
              testConstants.INSTITUTION,
              testConstants.PRODUCTS, {
                webhook: 'https://httpstat.us/200'
              }, (err, successResponse) => {
              expect(err).to.be(null);
              cb(null, successResponse);
            });
          },
          (publicTokenResponse, cb) => {
            pCl.exchangePublicToken(publicTokenResponse.public_token,
                                    (err, successResponse) => {
              expect(err).to.be(null);
              cb(null, successResponse);
            });
          },
          (successResponse, cb) => {
            const accessToken = successResponse.access_token;
            pCl.sandboxItemFireWebhook(accessToken,
                                  'DEFAULT_UPDATE',
                                  (err, successResponse) => {
              expect(err).to.be(null);
              expect(successResponse).to.be.ok();
              expect(successResponse.status_code).to.be(200);
              expect(successResponse.webhook_fired).to.be(true);
              cb(null, accessToken);
            });
          }
        ], cb);
      });
    });

    describe('errors', () => {
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

  describe('promises', () => {
    let testPublicToken;
    let testAccessToken;

    beforeEach(cb => {
      const createItem = pCl.sandboxPublicTokenCreate(
        testConstants.INSTITUTION, testConstants.PRODUCTS, {});
      createItem.then(successResponse => {
        testPublicToken = successResponse.public_token;
      }).then(() => {
        pCl.exchangePublicToken(testPublicToken).then(successResponse => {
          testAccessToken = successResponse.access_token;
          cb();
        });
      }).catch(err => {
        void err;
        throw new Error('Unreachable code block for test');
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
    });
  });
});
