declare module 'plaid' {
  import * as request from 'request';

  type Callback<T> = (err: Error, response: T) => void;

  interface AccessTokenFn<T> {
    (access_token: string): Promise<T>;
    (access_token: string, cb: Callback<T>): void;
  }

  // OPTIONS /////////////////////////////////////////////////////////////////

  interface ItemRequestOptions {
    account_ids?: Array<string>;
  }

  interface TransactionsRequestOptions extends ItemRequestOptions {
    count?: number;
    offset?: number;
  }

  // DATA TYPES //////////////////////////////////////////////////////////////

  interface Category {
    type: string;
    hierarchy: Array<string>;
    id: string;
  }

  interface Account {
    account_id: string;
    balances: {
      available: number;
      current: number;
      limit: number;
    };
    mask: string;
    name: string;
    official_name: string;
    subtype: string;
  }

  interface Transaction {
    account_id: string;
    account_owner: string | null;
    amount: number;
    category: Array<string> | null;
    category_id: string | null;
    date: string;
    location: {
      address: string | null;
      city: string | null;
      lat: number | null;
      lon: number | null;
      state: string | null;
      store_number: string | null;
      zip: string | null;
    };
    name: string;
    payment_meta: {
      by_order_of: null;
      payee: null;
      payer: null;
      payment_method: null;
      payment_processor: null;
      ppd_id: null;
      reason: null;
      reference_number: null
    };
    pending: boolean;
    pending_transaction_id: string | null;
    transaction_id: string;
    transaction_type: string | null;
  }

  interface PlaidError {
    error_type: string;
    error_code: string;
    error_message: string;
    display_message: string | null;
  }

  interface Item {
    available_products: Array<string>;
    billed_products: Array<string>;
    error: PlaidError | null;
    institution_id: string;
    item_id: string;
    webhook: string;
  }

  interface CredentialField {
    name: string;
    label: string;
    type: 'text' | 'password';
  }

  interface Institution {
    institution_id: string;
    credentials: Array<CredentialField>;
    has_mfa: boolean;
    mfa: Array<string>;
    name: string;
    products: Array<string>;
  }

  interface IncomeStream {
    confidence: number;
    days: number;
    monthly_income: number;
    name: string;
  }

  interface Income {
    income_streams: Array<IncomeStream>;
    last_year_income: number;
    last_year_income_before_tax: number;
    projected_yearly_income: number;
    projected_yearly_income_before_tax: number;
    max_number_of_overlapping_income_streams: number;
    number_of_income_streams: number;
  }

  interface Address {
    accounts: Array<string>;
    data: {
      city: string;
      state: string;
      zip: string;
      street: string;
    }
    primary: boolean;
  }

  interface Email {
    data: string;
    primary: string;
    type: string;
  }

  interface PhoneNumber {
    primary: boolean;
    type: string;
    data: string;
  }

  interface Identity {
    addresses: Array<Address>;
    emails: Array<Email>;
    names: Array<string>;
    phone_numbers: Array<PhoneNumber>;
  }

  // RESPONSES

  interface BaseResponse {
    request_id: string;
  }

  interface TokenResponse extends BaseResponse {
    access_token: string;
    item_id: string;
  }

  interface TransactionsResponse extends BaseResponse {
    accounts: Array<Account>;
    total_transactions: number;
    transactions: Array<Transaction>;
    item: Item;
  }

  interface AccountsResponse extends BaseResponse {
    accounts: Array<Account>;
    item: Item;
  }

  interface CreditDetailsResponse extends AccountsResponse {

  }


  interface IncomeResponse extends AccountsResponse {
    income: Income;
  }


  interface IdentityResponse extends AccountsResponse {
    identity: Identity;
  }

  interface ItemResponse extends BaseResponse {
    item: Item;
  }

  interface CreatePublicTokenResponse extends BaseResponse {
    public_token: string;
  }

  interface RotateAccessTokenResponse extends BaseResponse {
    new_access_token: string;
  }

  interface ItemDeleteResponse extends BaseResponse {
    deleted: true;
  }

  interface ResetLoginResponse extends BaseResponse {
    reset_login: true;
  }

  interface GetInstitutionsResponse extends BaseResponse {
    institutions: Array<Institution>;
  }

  interface GetInstitutionByIdResponse extends BaseResponse {
    institution: Institution;
  }

  interface CategoriesResponse extends BaseResponse {
    categories: Array<Category>;
  }

  export class Client {
    constructor (
      client_id: string,
      secret: string,
      public_key: string,
      env: environments,
      options?: request.CoreOptions,
    )

    exchangePublicToken(public_token: string): Promise<TokenResponse>;
    exchangePublicToken(public_token: string, cb: Callback<TokenResponse>): void;

    createPublicToken: AccessTokenFn<CreatePublicTokenResponse>;

    createProcessorToken(access_token: string, account_id: string, processor: string, cb: Callback<any>): void;
    createProcessorToken(access_token: string, account_id: string, processor: string): Promise<any>;

    createStripeToken(access_token: string, account_id: string, cb: Callback<any>): void;
    createStripeToken(access_token: string, account_id: string): Promise<any>;

    invalidateAccessToken: AccessTokenFn<RotateAccessTokenResponse>;

    updateAccessTokenVersion(legacy_access_token: string): Promise<TokenResponse>;
    updateAccessTokenVersion(legacy_access_token: string, cb: Callback<TokenResponse>): void;

    deleteItem: AccessTokenFn<ItemDeleteResponse>;

    getItem: AccessTokenFn<ItemResponse>;

    updateItemWebhook(access_token: string, webhook: string): Promise<ItemResponse>;
    updateItemWebhook(access_token: string, webhook: string, cb: Callback<ItemResponse>): void;

    getAccounts(access_token: string, options?: ItemRequestOptions): Promise<AccountsResponse>;
    getAccounts(access_token: string, cb: Callback<AccountsResponse>): void;
    getAccounts(access_token: string, options: ItemRequestOptions, cb: Callback<AccountsResponse>): void;

    getBalance(access_token: string, options?: ItemRequestOptions): Promise<AccountsResponse>;
    getBalance(access_token: string, cb: Callback<AccountsResponse>): void;
    getBalance(access_token: string, options: ItemRequestOptions, cb: Callback<AccountsResponse>): void;

    getAuth(access_token: string, options?: ItemRequestOptions): Promise<AccountsResponse>;
    getAuth(access_token: string, cb: Callback<AccountsResponse>): void;
    getAuth(access_token: string, options: ItemRequestOptions, cb: Callback<AccountsResponse>): void;

    // getIdentity(String, Function)
    getIdentity: AccessTokenFn<IdentityResponse>;
    // getIncome(String, Function)
    getIncome: AccessTokenFn<IncomeResponse>;
    // getCreditDetails(String, Function)
    getCreditDetails: AccessTokenFn<CreditDetailsResponse>;

    // getTransactions(String, Date(YYYY-MM-DD), Date(YYYY-MM-DD), Object?, Function)
    getTransactions(
      access_token: string,
      start_date: string,
      end_date: string,
      options?: TransactionsRequestOptions,
    ): Promise<TransactionsResponse>;
    getTransactions(
      access_token: string,
      start_date: string,
      end_date: string,
      cb: Callback<TransactionsResponse>,
    ): void;
    getTransactions(
      access_token: string,
      start_date: string,
      end_date: string,
      options:  TransactionsRequestOptions,
      cb: Callback<TransactionsResponse>,
    ): void;

    getInstitutions(count: number, offset: number): Promise<GetInstitutionsResponse>;
    getInstitutions(count: number, offset: number, cb: Callback<GetInstitutionsResponse>): void;

    getInstitutionsById(institution_id: string, options?: any): Promise<GetInstitutionByIdResponse>;
    getInstitutionsById(institution_id: string, cb: Callback<GetInstitutionByIdResponse>): void;
    getInstitutionsById(institution_id: string, options: any, cb: Callback<GetInstitutionByIdResponse>): void;

    searchInstitutionsByName(query: string, products: Array<string>, options: any): Promise<GetInstitutionsResponse>;
    searchInstitutionsByName(query: string, products: Array<string>, options: any, cb: Callback<GetInstitutionsResponse>): void;

    getCategories(): Promise<CategoriesResponse>;
    getCategories(cb: Callback<CategoriesResponse>): void;

    resetLogin: AccessTokenFn<ResetLoginResponse>;
  }

  export enum environments {
    production,
    sandbox,
    development,
  }
}
