import 'mocha';
import { expect } from 'chai';
import { createPlaidClient } from './clientHelper';
import {
  AccountsGetRequest,
  DepositSwitchCreateRequest,
  DepositSwitchGetRequest,
  ItemImportRequest,
  PlaidApi,
  Products
} from '../dist';

describe('Deposit Switch', () => {
  let plaidClient: PlaidApi;

  before(async () => {
    plaidClient = createPlaidClient();
  });

  it('successfully goes through the entire deposit switch flow', async () => {
    // 1. Import Item
    const request: ItemImportRequest = {
      products: [Products.Identity, Products.Auth],
      user_auth: { user_id: 'user_good', auth_token: 'pass_good' },
    };

    const response = await plaidClient.itemImport(request);
    expect(response.data).to.be.ok;
    expect(response.data.access_token).to.be.ok;

    // 2. Get Account(s)
    const accountsRequest: AccountsGetRequest = {
      access_token: response.data.access_token as string,
    };

    const accountsResponse = await plaidClient.accountsGet(accountsRequest);
    expect(accountsResponse.data).to.be.ok;
    expect(accountsResponse.data.accounts).to.be.ok;

    // 3. Create Deposit Switch
    const createRequest: DepositSwitchCreateRequest = {
      target_account_id: accountsResponse.data.accounts.filter(
        (a) => a.type === 'depository',
      )[0].account_id as string,
      target_access_token: response.data.access_token as string,
    };

    const createResponse = await plaidClient.depositSwitchCreate(createRequest);
    expect(createResponse.data).to.be.ok;
    expect(createResponse.data.deposit_switch_id).to.be.ok;

    // 4. Get Deposit Switch
    const getRequest: DepositSwitchGetRequest = {
      deposit_switch_id: createResponse.data.deposit_switch_id as string,
    };

    const getResponse = await plaidClient.depositSwitchGet(getRequest);
    expect(getResponse.data).to.be.ok;
    expect(getResponse.data.deposit_switch_id).to.be.ok;
    expect(getResponse.data.target_item_id).to.be.ok;
    expect(getResponse.data.target_account_id).to.be.ok;
    expect(getResponse.data.date_created).to.be.ok;
    expect(getResponse.data.state).to.be.ok;

    // 5. Create Deposit Switch Token
    const createTokenRequest: DepositSwitchGetRequest = {
      deposit_switch_id: createResponse.data.deposit_switch_id as string,
    };

    const createTokenResponse = await plaidClient.depositSwitchTokenCreate(
      createTokenRequest,
    );
    expect(createTokenResponse.data).to.be.ok;
    expect(createTokenResponse.data.deposit_switch_token).to.be.ok;
    expect(createTokenResponse.data.deposit_switch_token_expiration_time).to.be
      .ok;
  });
});
