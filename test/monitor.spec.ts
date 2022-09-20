import 'mocha';
import { expect } from 'chai';
import {
    createPlaidClient,
} from './clientHelper';
import { 
        CountryCode,
        WatchlistScreeningIndividualGetRequest,
        WatchlistScreeningIndividualListRequest,
        WatchlistScreeningIndividualUpdateRequest,
        WatchlistScreeningIndividualCreateRequest,
        WatchlistScreeningRequestSearchTerms,
        WatchlistScreeningStatus,
        PlaidApi, 
} from '../dist';

const CLIENT_USER_ID = "monitor-user-" + Math.floor(new Date().getTime() / 1000);
const WATCHLIST_PROGRAM_ID = "prg_egdF5fGjY8fWqk";
const LEGAL_NAME = "Domingo Huang";
const DOCUMENT_NUMBER = "123456789"

describe('Watchlist Monitor', () => {
    let plaidClient: PlaidApi;

    before(async () => {
        plaidClient = createPlaidClient();
    });

    it('create and update individual screening watchlist', async () => {
        const country_code = CountryCode.Us;
        const date_of_birth = new Date().toISOString().slice(0, 10);
        const search_terms: WatchlistScreeningRequestSearchTerms = {
            watchlist_program_id: WATCHLIST_PROGRAM_ID,
            legal_name: LEGAL_NAME,
            country: country_code,
            date_of_birth: date_of_birth,
            document_number: DOCUMENT_NUMBER,
        };
        const create_request: WatchlistScreeningIndividualCreateRequest = {
            client_user_id: CLIENT_USER_ID,
            search_terms: search_terms
        };

        const create_response = await plaidClient.watchlistScreeningIndividualCreate(create_request);
        expect(create_response).to.be.ok;
        expect(create_response.data.search_terms.legal_name).to.be.equals(LEGAL_NAME);
        expect(create_response.data.search_terms.document_number).to.be.equals(DOCUMENT_NUMBER);
        expect(create_response.data.search_terms.date_of_birth).to.be.equals(date_of_birth);
        expect(create_response.data.search_terms.country).to.be.equals(CountryCode.Us);

        const update_request: WatchlistScreeningIndividualUpdateRequest = {
            watchlist_screening_id: create_response.data.id,
            status: WatchlistScreeningStatus.PendingReview,
            
        };
        const update_response = await plaidClient.watchlistScreeningIndividualUpdate(update_request);
        expect(update_response).to.be.ok;
        expect(update_response.data.status).to.be.equals(WatchlistScreeningStatus.PendingReview);
    });

    it('get and list individual screening watchlist', async () => {
        const list_request: WatchlistScreeningIndividualListRequest = {
            watchlist_program_id: WATCHLIST_PROGRAM_ID,
            client_user_id: CLIENT_USER_ID,
        };

        const list_response = await plaidClient.watchlistScreeningIndividualList(list_request);
        expect(list_response).to.be.ok;
        expect(list_response.data.watchlist_screenings.length).to.be.equals(1);

        const get_request: WatchlistScreeningIndividualGetRequest = {
            watchlist_screening_id: list_response.data.watchlist_screenings[0].id,
        };
        const get_response = await plaidClient.watchlistScreeningIndividualGet(get_request);
        expect(get_response).to.be.ok;
        expect(get_response.data.search_terms.legal_name).to.be.equals(LEGAL_NAME);
    });
});
