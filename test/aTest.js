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
const { SECRET, CLIENT_ID } = process.env;


describe('plaid.Client', () => {
  const configs = {
    clientID: CLIENT_ID,
    secret: SECRET,
    env: plaid.environments.sandbox,
    options: {
      version: '2020-09-14',
    },
  };

  describe('endpoints', () => {
    let pCl;
    let testAccessToken

    beforeEach(cb => {
      pCl = new plaid.Client(configs);
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
               //The transactions of an Asset Report with Insights should have
               //a non-null `name` (when available).
	       for (const transaction of account.transactions) {
		 // this could also be a problem
		 expect(transaction.name).to.be.ok();
	       }

	       for (const owner of account.owners) {
		 // seems this is the problem
		 for (const addr of owner.addresses) {
		   expect(addr.data.city).to.be.ok();
		   expect(addr.data.region).to.be.ok();
		   expect(addr.data.postal_code).to.be.ok();
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
	const auditor_id = CLIENT_ID;
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
  });
});
