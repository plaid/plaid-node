import 'mocha';
import { expect } from 'chai';
import { createPlaidClient } from './clientHelper';
import {
  CountryCode,
  InstitutionsGetByIdRequest,
  InstitutionsGetRequest,
  InstitutionsSearchRequest,
  Products,
  PlaidApi,
} from '../dist';
import { TestConstants } from './testConstants';

describe('Institutions', () => {
  let plaidClient: PlaidApi;

  before(async () => {
    plaidClient = createPlaidClient();
  });

  it('get', async () => {
    const request: InstitutionsGetRequest = {
      count: 10,
      offset: 0,
      country_codes: [CountryCode.Us],
    };

    const response = await plaidClient.institutionsGet(request);
    expect(response.data).to.be.ok;
    expect(response.data.institutions).to.be.an('array');

    if (response.data.institutions) {
      for (const inst in response.data.institutions) {
        expect(response.data.institutions[inst]).to.not.haveOwnProperty(
          'primary_color',
        );
      }
    }
  });

  it('get with include_optional_metadata', async () => {
    const request: InstitutionsGetRequest = {
      count: 10,
      offset: 0,
      country_codes: [CountryCode.Us],
      options: {
        include_optional_metadata: true,
      },
    };

    const response = await plaidClient.institutionsGet(request);
    expect(response.data).to.be.ok;
    expect(response.data.institutions).to.be.an('array');

    if (response.data.institutions) {
      for (const inst in response.data.institutions) {
        expect(response.data.institutions[inst]).to.haveOwnProperty(
          'primary_color',
        );
      }
    }
  });

  it('get by id', async () => {
    const request: InstitutionsGetByIdRequest = {
      institution_id: TestConstants.INSTITUTION,
      country_codes: [CountryCode.Us],
    };

    const response = await plaidClient.institutionsGetById(request);
    expect(response.data).to.be.ok;
    expect(response.data.institution).to.be.ok;
    expect(response.data.institution.primary_color).to.be.undefined;
  });

  it('get by id with include_optional_metadata', async () => {
    const request: InstitutionsGetByIdRequest = {
      institution_id: TestConstants.INSTITUTION,
      options: {
        include_optional_metadata: true,
      },
      country_codes: [CountryCode.Us],
    };

    const response = await plaidClient.institutionsGetById(request);
    expect(response.data).to.be.ok;
    expect(response.data.institution).to.be.ok;
    expect(response.data.institution.primary_color).to.be.ok;
  });

  it('search', async () => {
    const request: InstitutionsSearchRequest = {
      query: TestConstants.INSTITUTION,
      products: (null as unknown) as Products[],
      country_codes: [CountryCode.Us],
    };

    const response = await plaidClient.institutionsSearch(request);
    expect(response.data).to.be.ok;
    expect(response.data.institutions).to.be.an('array');

    if (response.data.institutions) {
      for (const inst in response.data.institutions) {
        expect(response.data.institutions[inst]).to.not.haveOwnProperty(
          'primary_color',
        );
      }
    }
  });

  it('searches with optional metadata', async () => {
    const request: InstitutionsSearchRequest = {
      query: TestConstants.INSTITUTION,
      products: (null as unknown) as Products[],
      options: {
        include_optional_metadata: true,
      },
      country_codes: [CountryCode.Us],
    };

    const response = await plaidClient.institutionsSearch(request);
    expect(response.data).to.be.ok;
    expect(response.data.institutions).to.be.an('array');

    if (response.data.institutions) {
      for (const inst in response.data.institutions) {
        expect(response.data.institutions[inst]).to.haveOwnProperty(
          'primary_color',
        );
      }
    }
  });
});
