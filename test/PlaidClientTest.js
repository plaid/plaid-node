'use strict';

/* global before, beforeEach, describe, it */

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
const {SECRET, CLIENT_ID} = process.env;

describe('plaid.Client', () => {
  const configs = {
    clientID: CLIENT_ID,
    secret: SECRET,
    env: plaid.environments.sandbox,
    options: {
      version: '2019-05-29',
    },
  };

  let pCl;
  beforeEach(() => {
    pCl = new plaid.Client(configs);
  });

  describe('constructor', () => {
    it('throws for invalid parameter', ()  => {
      expect(() => {
        plaid.Client('client_id');
      }).to.throwException(e => {
        expect(e).to.be.ok();
        expect(e.message).to.equal('Unexpected parameter type. Refer to https://github.com/plaid/plaid-node for how to create a Plaid client.');
      });
    });

    it('throws for missing client_id', () => {
      expect(() => {
        plaid.Client(R.merge(configs, {
          clientID: null,
        }));
      }).to.throwException(e => {
        expect(e).to.be.ok();
        expect(e.message).to.equal('Missing Plaid "client_id"');
      });
    });

    it('throws for missing secret', () => {
      expect(() => {
        plaid.Client(R.merge(configs, {
          secret: null,
        }));
      }).to.throwException(e => {
        expect(e).to.be.ok();
        expect(e.message).to.equal('Missing Plaid "secret"');
      });
    });

    it('throws for invalid environment', () => {
      expect(() => {
        plaid.Client(R.merge(configs, {
          env: 'gingham',
        }));
      }).to.throwException(e => {
        expect(e).to.be.ok();
        expect(e.message).to.equal('Invalid Plaid environment');
      });
    });

    it('throws for too many arguments', () => {
      expect(() => {
        plaid.Client(configs, 'extra arg');
      }).to.throwException(e => {
        expect(e).to.be.ok();
        expect(e.message).to.equal('Too many arguments to constructor');
      });
    });

    it('succeeds with all arguments', () => {
      expect(() => {
        R.forEachObjIndexed(env => {
          plaid.Client(R.merge(configs, {
            env: env,
          }));
        }, plaid.environments);
      }).not.to.throwException();
    });

    it('succeeds without any options', () => {
      expect(() => {
        R.forEachObjIndexed(env => {
          plaid.Client(R.merge(configs, {
            options: null,
            env: env,
          }));
        }, plaid.environments);
      }).not.to.throwException();
    });
  });

  it('can create item add tokens', cb => {
    pCl.createItemAddToken({
      user: {
        client_user_id: (new Date()).getTime().toString(),
      },
    }, (err, successResponse) => {
      expect(err).to.be(null);
      expect(successResponse.add_token).to.match(/^item-add-sandbox-/);
      expect(successResponse.expiration).to.be.ok();
      cb();
    });
  });

  it('can create item add tokens with fields', cb => {
    pCl.createItemAddToken({
      user: {
        client_user_id: (new Date()).getTime().toString(),
        email_address: {
          value: 'name@example.com',
          verified: true,
        },
      },
    }, (err, successResponse) => {
      expect(err).to.be(null);
      expect(successResponse.add_token).to.match(/^item-add-sandbox-/);
      expect(successResponse.expiration).to.be.ok();
      cb();
    });
  });

  it('can create item add tokens with fields with old field name', cb => {
    pCl.createItemAddToken({
      user_identity: {
        client_user_id: (new Date()).getTime().toString(),
        email_address: {
          value: 'name@example.com',
          verified: true,
        },
      },
    }, (err, successResponse) => {
      expect(err).to.be(null);
      expect(successResponse.add_token).to.match(/^item-add-sandbox-/);
      expect(successResponse.expiration).to.be.ok();
      cb();
    });
  });

  describe('endpoints', () => {

    const now = moment().format('YYYY-MM-DD');
    let testAccessToken;

    before(cb => {
      async.waterfall([
        cb => {
          pCl.sandboxPublicTokenCreate(testConstants.INSTITUTION,
            testConstants.PRODUCTS, {}, cb);
        },
        (successResponse, cb) => {
          pCl.exchangePublicToken(successResponse.public_token,
            (err, successResponse) => {
              if (err != null) {
                return cb(err);
              }
              testAccessToken = successResponse.access_token;
              cb();
            });
        },
      ], cb);
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

      it('gets item', cb => {
        pCl.getItem(testAccessToken, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();
          expect(successResponse.item).to.be.ok();
          expect(successResponse.status).to.be.ok();
          expect(successResponse.status.transactions).to.be.ok();
          expect(successResponse.status.investments).to.be.ok();
          expect(successResponse.status.last_webhook).to.be(null);
          cb();
        });
      });

      it('imports item without option', cb => {
        pCl.importItem(
          ['identity', 'auth'],
          {
            user_id: 'user_good',
            auth_token: 'pass_good',
          },
          {},
          (err, successResponse) => {
            expect(err).to.be(null);
            expect(successResponse).to.be.ok();
            expect(successResponse.access_token).to.be.ok();
            cb();
          }
        );
      });

      it('imports item with option', cb => {
        pCl.importItem(
          ['identity', 'auth'],
          {
            user_id: 'user_good',
            auth_token: 'pass_good',
          },
          {
            webhook: 'https://plaid.com/webhook-test',
          },
          (err, successResponse) => {
            expect(err).to.be(null);
            expect(successResponse).to.be.ok();
            expect(successResponse.access_token).to.be.ok();
            cb();
          }
        );
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

      it('transactions refresh', cb => {
        pCl.refreshTransactions(testAccessToken, (err, successResponse) => {
          expect(err).to.be(null);
          expect(successResponse).to.be.ok();

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
                  throw new Error('Unexpected error while polling ' +
                    'for all transactions', err);
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

        it('transactions refresh', cb => {
          pCl.refreshTransactions(accessToken,
            (err, successResponse) => {
              expect(err).to.be(null);
              expect(successResponse).to.be.ok();

              cb();
            });
        });

        it('transactions refresh (with 400)', cb => {
          pCl.refreshTransactions('invalid token',
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
            throw new Error('Ran out of retries while polling for asset ' +
              'report');
          }

          // By default, we don't want to retrieve the report as an
          // Asset Report with Insights. For information about Asset
          // Reports with Insights,
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
                  expect(addr.data.region).to.be.ok();
                  expect(addr.data.postal_code).to.be.ok();
                  expect(addr.data.street).to.be.ok();
                  expect(addr.data.country).to.be.ok();
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

    describe('payment_initiation', () => {
      const address = {
        street: ['street name 999'],
        city: 'city',
        postal_code: '99999',
        country: 'GB',
      };

      const createPaymentRecipient = (cb) => {
        pCl.createPaymentRecipient(
          'John Doe',
          'GB33BUKB20201555555555',
          address,
          (err, response) => {
            expect(err).to.be(null);
            expect(response).to.be.ok();
            expect(response.request_id).to.be.ok();
            expect(response.recipient_id).to.be.ok();

            cb(null, response.recipient_id);
          });
      };

      const getPaymentRecipient = (recipient_id, cb) => {
        pCl.getPaymentRecipient(recipient_id,
          (err, response) => {
            expect(err).to.be(null);
            expect(response).to.be.ok();
            expect(response.request_id).to.be.ok();
            expect(response.recipient_id).to.be.ok();
            expect(response.name).to.be.ok();
            expect(response.iban).to.be.ok();
            expect(response.address).to.be.ok();

            cb(null, recipient_id);
          });
      };

      const listPaymentRecipients = (recipient_id, cb) => {
        pCl.listPaymentRecipients((err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();
          expect(response.request_id).to.be.ok();
          expect(response.recipients).to.be.ok();

          cb(null, recipient_id);
        });
      };

      const createPayment = (recipient_id, cb) => {
        const amount = {
          currency: 'GBP',
          value: 100.00,
        };

        pCl.createPayment(recipient_id, 'TestPayment', amount,
          (err, response) => {
            expect(err).to.be(null);
            expect(response).to.be.ok();
            expect(response.request_id).to.be.ok();
            expect(response.payment_id).to.be.ok();
            expect(response.status).to.be.ok();

            cb(null, response.payment_id);
          });
      };

      const createPaymentToken = (payment_id, cb) => {
        pCl.createPaymentToken(payment_id, (err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();
          expect(response.payment_token).to.be.ok();
          expect(response.payment_token_expiration_time).to.be.ok();

          cb(null, payment_id);
        });
      };

      const getPayment = (payment_id, cb) => {
        pCl.getPayment(payment_id,
          (err, response) => {
            expect(err).to.be(null);
            expect(response).to.be.ok();
            expect(response.request_id).to.be.ok();
            expect(response.payment_id).to.be.ok();
            expect(response.payment_token).to.be.ok();
            expect(response.reference).to.be.ok();
            expect(response.amount).to.be.ok();
            expect(response.status).to.be.ok();
            expect(response.last_status_update).to.be.ok();
            expect(response.payment_token_expiration_time).to.be.ok();
            expect(response.recipient_id).to.be.ok();

            cb(null);
          });
      };

      const listPayments = (cb) => {
        pCl.listPayments({count: 10}, (err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();
          expect(response.payments).to.be.ok();

          cb();
        });
      };

      it('successfully goes through the entire flow', cb => {
        async.waterfall([
          createPaymentRecipient,
          getPaymentRecipient,
          listPaymentRecipients,
          createPayment,
          createPaymentToken,
          getPayment,
          listPayments,
        ], cb);
      });
    });
    describe('deposit switch', () => {
      const getAccessToken = (cb) => {
        pCl.importItem(
          ['identity', 'auth'],
          {'user_id': 'user_good', 'auth_token': 'pass_good'},
          (err, response) => {
            expect(err).to.be(null);
            expect(response).to.be.ok();
            expect(response.access_token).to.be.ok();
            cb(null, response.access_token);
          });
      };

      const getAccountId = (access_token, cb) => {
        pCl.getAccounts(access_token, (err, response) => {
          expect(err).to.be(null);
          expect(response).to.be.ok();
          expect(response.accounts).to.be.ok();
          cb(null, {
            account_id: response.accounts.filter(
              a => a.type === 'depository'
            )[0].account_id,
            access_token: access_token,
          });
        });
      };

      const createDepositSwitch = (switch_params, cb) => {
        pCl.createDepositSwitch(
          switch_params.account_id,
          switch_params.access_token,
          (err, response) => {
            expect(err).to.be(null);
            expect(response).to.be.ok();
            expect(response.deposit_switch_id).to.be.ok();
            cb(null, response.deposit_switch_id);
          });
      };

      const getDepositSwitch = (deposit_switch_id, cb) => {
        pCl.getDepositSwitch(
          deposit_switch_id,
          (err, response) => {
            expect(err).to.be(null);
            expect(response).to.be.ok();
            expect(response.deposit_switch_id).to.be.ok();
            expect(response.target_item_id).to.be.ok();
            expect(response.target_account_id).to.be.ok();
            expect(response.date_created).to.be.ok();
            expect(response.state).to.be.ok();
            cb(null, deposit_switch_id);
          }
        );
      };

      const createDepositSwitchToken = (deposit_switch_id, cb) => {
        pCl.createDepositSwitchToken(
          deposit_switch_id,
          (err, response) => {
            expect(err).to.be(null);
            expect(response).to.be.ok();
            expect(response.deposit_switch_token).to.be.ok();
            expect(response.deposit_switch_token_expiration_time).to.be.ok();
            cb(null, response.deposit_switch_token);
          }
        );
      };

      it('successfully goes through the entire deposit switch flow', cb => {
        async.waterfall([
          getAccessToken,
          getAccountId,
          createDepositSwitch,
          getDepositSwitch,
          createDepositSwitchToken,
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

    describe('webhook-verification', () => {
      it('getWebhookVerificationKey', cb => {
        pCl.getWebhookVerificationKey(
          testConstants.WEBHOOK_VERIFICATION_KEY_ID,
          (err, successResponse) => {
            expect(err).to.be(null);
            expect(successResponse).to.be.ok();
            expect(successResponse.key).to.be.ok();
            expect(successResponse.key.alg).to.be.ok();
            expect(successResponse.key.created_at).to.be.ok();
            expect(successResponse.key.crv).to.be.ok();
            expect(successResponse.key.kid).to.be.ok();
            expect(successResponse.key.kty).to.be.ok();
            expect(successResponse.key.use).to.be.ok();
            expect(successResponse.key.x).to.be.ok();
            expect(successResponse.key.y).to.be.ok();

            cb();
          });
      });

      it('getWebhookVerificationKey error', cb => {
        pCl.getWebhookVerificationKey(
          'invalid key_id',
          (err, successResponse) => {
            expect(err).to.be.ok();
            expect(successResponse).not.to.be.ok();
            expect(err.status_code).to.be(400);
            expect(err.request_id).to.be.ok();
            expect(err.error_code).to.be(
              'INVALID_WEBHOOK_VERIFICATION_KEY_ID');

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
        pCl.searchInstitutionsByName(testConstants.INSTITUTION, ['auth'], {})
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
        pCl.searchInstitutionsByName(testConstants.INSTITUTION, ['auth'])
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
