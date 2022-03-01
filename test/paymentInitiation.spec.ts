import 'mocha';
import { expect } from 'chai';
import { createPlaidClient } from './clientHelper';
import {
  PaymentAmountCurrencyEnum,
  PaymentInitiationPaymentCreateRequest,
  PaymentInitiationPaymentGetRequest,
  PaymentInitiationPaymentListRequest,
  PaymentInitiationRecipientCreateRequest,
  PaymentInitiationRecipientGetRequest,
  PaymentInitiationRecipientListRequest,
  PlaidApi,
} from '../dist';

const address = {
  street: ['street name 999'],
  city: 'city',
  postal_code: '99999',
  country: 'GB',
};

describe('Payment Initiation', () => {
  let plaidClient: PlaidApi;

  before(() => {
    plaidClient = createPlaidClient();
  });

  it('successfully goes through the entire flow with iban', async () => {
    // 1. Create recipient
    const request: PaymentInitiationRecipientCreateRequest = {
      name: 'John Doe',
      iban: 'GB33BUKB20201555555555',
      address,
    };

    const response = await plaidClient.paymentInitiationRecipientCreate(
      request,
    );
    expect(response.data).to.be.ok;
    expect(response.data.request_id).to.be.ok;
    expect(response.data.recipient_id).to.be.ok;

    // 2. Get recipient
    const getRequest: PaymentInitiationRecipientGetRequest = {
      recipient_id: response.data.recipient_id as string,
    };

    const getResponse = await plaidClient.paymentInitiationRecipientGet(
      getRequest,
    );
    expect(getResponse.data).to.be.ok;
    expect(getResponse.data.request_id).to.be.ok;
    expect(getResponse.data.recipient_id).to.be.ok;
    expect(getResponse.data.name).to.be.ok;
    expect(getResponse.data.iban).to.be.ok;
    expect(getResponse.data.address).to.be.ok;

    // 3. List recipients
    const listRequest: PaymentInitiationRecipientListRequest = {};

    const listResponse = await plaidClient.paymentInitiationRecipientList(
      listRequest,
    );
    expect(listResponse.data).to.be.ok;
    expect(listResponse.data.request_id).to.be.ok;
    expect(listResponse.data.recipients).to.be.ok;

    // 4. Create Payment
    const paymentCreateRequest: PaymentInitiationPaymentCreateRequest = {
      recipient_id: getResponse.data.recipient_id as string,
      reference: 'TestPayment',
      amount: {
        currency: PaymentAmountCurrencyEnum.Gbp,
        value: 100.0,
      },
    };

    const paymentCreateResponse = await plaidClient.paymentInitiationPaymentCreate(
      paymentCreateRequest,
    );
    expect(paymentCreateResponse.data).to.be.ok;
    expect(paymentCreateResponse.data.request_id).to.be.ok;
    expect(paymentCreateResponse.data.payment_id).to.be.ok;
    expect(paymentCreateResponse.data.status).to.be.ok;

    // 5. Get Payment
    const paymentGetRequest: PaymentInitiationPaymentGetRequest = {
      payment_id: paymentCreateResponse.data.payment_id as string,
    };

    const paymentGetResponse = await plaidClient.paymentInitiationPaymentGet(
      paymentGetRequest,
    );
    expect(paymentGetResponse.data).to.be.ok;
    expect(paymentGetResponse.data.request_id).to.be.ok;
    expect(paymentGetResponse.data.payment_id).to.be.ok;
    expect(paymentGetResponse.data.reference).to.be.ok;
    expect(paymentGetResponse.data.amount).to.be.ok;
    expect(paymentGetResponse.data.status).to.be.ok;
    expect(paymentGetResponse.data.last_status_update).to.be.ok;
    expect(paymentGetResponse.data.recipient_id).to.be.ok;

    // 6. List Payments
    const listPaymentsRequest: PaymentInitiationPaymentListRequest = {
      count: 10,
    };

    const listPaymentsResponse = await plaidClient.paymentInitiationPaymentList(
      listPaymentsRequest,
    );
    expect(listPaymentsResponse.data).to.be.ok;
    expect(listPaymentsResponse.data.payments).to.be.ok;
  });

  it('successfully goes through the entire flow with bacs', async () => {
    // 1. Create recipient
    const request: PaymentInitiationRecipientCreateRequest = {
      name: 'John Doe',
      bacs: {
        account: '26207729',
        sort_code: '560029',
      },
      address,
    };

    const response = await plaidClient.paymentInitiationRecipientCreate(
      request,
    );
    expect(response.data).to.be.ok;
    expect(response.data.request_id).to.be.ok;
    expect(response.data.recipient_id).to.be.ok;

    // 2. Get recipient
    const getRequest: PaymentInitiationRecipientGetRequest = {
      recipient_id: response.data.recipient_id as string,
    };

    const getResponse = await plaidClient.paymentInitiationRecipientGet(
      getRequest,
    );
    expect(getResponse.data).to.be.ok;
    expect(getResponse.data.request_id).to.be.ok;
    expect(getResponse.data.recipient_id).to.be.ok;
    expect(getResponse.data.name).to.be.ok;
    expect(getResponse.data.bacs).to.be.ok;
    expect(getResponse.data.address).to.be.ok;

    // 3. List recipients
    const listRequest: PaymentInitiationRecipientListRequest = {};

    const listResponse = await plaidClient.paymentInitiationRecipientList(
      listRequest,
    );
    expect(listResponse.data).to.be.ok;
    expect(listResponse.data.request_id).to.be.ok;
    expect(listResponse.data.recipients).to.be.ok;

    // 4. Create Payment
    const paymentCreateRequest: PaymentInitiationPaymentCreateRequest = {
      recipient_id: getResponse.data.recipient_id as string,
      reference: 'TestPayment',
      amount: {
        currency: PaymentAmountCurrencyEnum.Gbp,
        value: 100.0,
      },
    };

    const paymentCreateResponse = await plaidClient.paymentInitiationPaymentCreate(
      paymentCreateRequest,
    );
    expect(paymentCreateResponse.data).to.be.ok;
    expect(paymentCreateResponse.data.request_id).to.be.ok;
    expect(paymentCreateResponse.data.payment_id).to.be.ok;
    expect(paymentCreateResponse.data.status).to.be.ok;

    // 5. Get Payment
    const paymentGetRequest: PaymentInitiationPaymentGetRequest = {
      payment_id: paymentCreateResponse.data.payment_id as string,
    };

    const paymentGetResponse = await plaidClient.paymentInitiationPaymentGet(
      paymentGetRequest,
    );
    expect(paymentGetResponse.data).to.be.ok;
    expect(paymentGetResponse.data.request_id).to.be.ok;
    expect(paymentGetResponse.data.payment_id).to.be.ok;
    expect(paymentGetResponse.data.reference).to.be.ok;
    expect(paymentGetResponse.data.amount).to.be.ok;
    expect(paymentGetResponse.data.status).to.be.ok;
    expect(paymentGetResponse.data.last_status_update).to.be.ok;
    expect(paymentGetResponse.data.recipient_id).to.be.ok;

    // 6. List Payments
    const listPaymentsRequest: PaymentInitiationPaymentListRequest = {
      count: 10,
    };

    const listPaymentsResponse = await plaidClient.paymentInitiationPaymentList(
      listPaymentsRequest,
    );
    expect(listPaymentsResponse.data).to.be.ok;
    expect(listPaymentsResponse.data.payments).to.be.ok;
  });
});
