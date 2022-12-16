import 'mocha';
import {expect} from 'chai';
import {createPlaidClient} from './clientHelper';
import {
  TransactionsEnrichGetRequest,
  EnrichTransactionDirection,
  ClientProvidedTransaction,
  PlaidApi
} from '../dist';

const SAMPLE_TRANSACTIONS_TO_ENRICH: Array<ClientProvidedTransaction> = [
  {
    id: "1",
    description: "DDA PURCHASE *XXXX XXXXXXXX FAMILY DOLLAR",
    amount: 10.21,
    iso_currency_code: "USD",
    location: {
      city: "Philadelphia",
      region: "PA",
    },
    direction: EnrichTransactionDirection.Outflow,
  },
  {
    id: "2",
    description: "PURCHASE JUNIATA SUPE PHILADELPHIA PA CARDXXXX",
    amount: 10.21,
    iso_currency_code: "USD",
    direction: EnrichTransactionDirection.Outflow
  },
  {
    id: "3",
    description: "DEBIT CARD PURCHASE",
    amount: 10.21,
    iso_currency_code: "USD",
    direction: EnrichTransactionDirection.Outflow
  },
  {
    id: "4",
    description: "DIRECT DEP* UBER.COM",
    amount: 150.21,
    iso_currency_code: "USD",
    direction: EnrichTransactionDirection.Inflow
  },
]

describe('Enrich', () => {
  let plaidClient: PlaidApi;

  before(async () => {
    plaidClient = createPlaidClient();
  });

  it('successfully enriches transactions', async () => {
    const request: TransactionsEnrichGetRequest = {
      account_type: "depository",
      transactions: SAMPLE_TRANSACTIONS_TO_ENRICH
    };

    const response = await plaidClient.transactionsEnrich(request);
    expect(response).to.be.ok;

    const enrichedTransactions = response.data.enriched_transactions;
    expect(enrichedTransactions).to.be.ok;
    expect(enrichedTransactions.length).equals(SAMPLE_TRANSACTIONS_TO_ENRICH.length);

    enrichedTransactions.forEach((item) => {
      expect(item['amount']).to.be.ok;
      expect(item['description']).to.be.ok;
      expect(item['direction']).to.be.ok;
      expect(item['enrichments']).to.be.ok;
      expect(item['id']).to.be.ok;
    });
  });
});
