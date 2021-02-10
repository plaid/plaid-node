import 'mocha';
import { expect } from 'chai';
import { createPlaidClient } from './clientHelper';
import { PlaidApi } from '../dist';

describe('Categories', () => {
  let plaidClient: PlaidApi;

  before(async () => {
    plaidClient = createPlaidClient();
  });

  it('get', async () => {
    const response = await plaidClient.categoriesGet({});
    expect(response.data).to.be.ok;
    expect(response.data.categories).to.be.an('array');
  });
});