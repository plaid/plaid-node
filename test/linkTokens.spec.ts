import 'mocha';
import { expect } from 'chai';
import { createPlaidClient } from './clientHelper';
import {
  CountryCode,
  LinkTokenCreateRequest,
  LinkTokenGetRequest,
  PlaidApi,
  Products,
} from '../dist';
import { AccountSubtype } from '../dist';

describe('Link Tokens', () => {
  let plaidClient: PlaidApi;

  before(() => {
    plaidClient = createPlaidClient();
  });

  it('can create link tokens with required', async () => {
    const request: LinkTokenCreateRequest = {
      user: {
        client_user_id: new Date().getTime().toString(),
      },
      client_name: 'Plaid App',
      products: [Products.Auth, Products.Transactions],
      language: 'en',
      country_codes: [CountryCode.Us],
    };

    const response = await plaidClient.linkTokenCreate(request);
    expect(response.data.link_token).to.match(/^link-sandbox-/);
    expect(response.data.expiration).to.be.ok;
  });

  it('can create link tokens with optional', async () => {
    const request: LinkTokenCreateRequest = {
      user: {
        client_user_id: new Date().getTime().toString(),
        legal_name: 'John Doe',
        phone_number: '+1 415 555 0123',
        phone_number_verified_time: '2020-01-01T00:00:00Z',
        email_address: 'example@plaid.com',
        email_address_verified_time: '2020-01-01T00:00:00Z',
      },
      client_name: 'Plaid App',
      products: [Products.Auth, Products.Transactions],
      country_codes: [CountryCode.Gb],
      language: 'en',
      webhook: 'https://sample-web-hook.com',
      account_filters: {
        depository: {
          account_subtypes: [AccountSubtype.Checking, AccountSubtype.Savings],
        },
      },
    };

    const response = await plaidClient.linkTokenCreate(request);
    expect(response.data.link_token).to.match(/^link-sandbox-/);
    expect(response.data.expiration).to.be.ok;
  });

  it('can get link tokens', async () => {
    const request: LinkTokenCreateRequest = {
      user: {
        client_user_id: new Date().getTime().toString(),
        legal_name: 'John Doe',
        phone_number: '+1 415 555 0123',
        phone_number_verified_time: '2020-01-01T00:00:00Z',
        email_address: 'example@plaid.com',
        email_address_verified_time: '2020-01-01T00:00:00Z',
      },
      client_name: 'Plaid App',
      products: [Products.Auth, Products.Transactions],
      country_codes: [CountryCode.Gb],
      language: 'en',
      webhook: 'https://sample-web-hook.com',
      account_filters: {
        depository: {
          account_subtypes: [AccountSubtype.Checking, AccountSubtype.Savings],
        },
      },
    };
    const response = await plaidClient.linkTokenCreate(request);
    expect(response.data.link_token).to.match(/^link-sandbox-/);
    expect(response.data.expiration).to.be.ok;

    const getRequest: LinkTokenGetRequest = {
      link_token: response.data.link_token as string,
    };

    const getResponse = await plaidClient.linkTokenGet(getRequest);
    expect(getResponse.data.link_token).to.equal(
      response.data.link_token as string,
    );
    expect(getResponse.data.metadata?.client_name).to.equal('Plaid App');
    expect(getResponse.data.metadata?.initial_products).to.deep.equal([
      'auth',
      'transactions',
    ]);
    expect(getResponse.data.metadata?.country_codes).to.deep.equal([CountryCode.Gb]);
    expect(getResponse.data.metadata?.language).to.equal('en');
    expect(getResponse.data.metadata?.webhook).to.equal(
      'https://sample-web-hook.com',
    );
    expect(getResponse.data.metadata?.account_filters).to.deep.equal({
      depository: {
        account_subtypes: [AccountSubtype.Checking, AccountSubtype.Savings],
      },
    });
  });
});
