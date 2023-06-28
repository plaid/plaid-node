import 'mocha';
import { expect } from 'chai';
import {
    createPlaidClient,
} from './clientHelper';
import { 
        IdentityVerificationGetRequest, 
        IdentityVerificationListRequest, 
        IdentityVerificationCreateRequest,
        IdentityVerificationCreateRequestUser,
        IdentityVerificationRequestUser, 
        IdentityVerificationRetryRequest, 
        PlaidApi, 
        Strategy 
} from '../dist';

const TEMPLATE_ID = "flwtmp_aWogUuKsL6NEHU";
const CLIENT_USER_ID = "idv-user-" + Math.floor(new Date().getTime() / 1000);
const EMAIL = CLIENT_USER_ID + "@example.com";


describe('Identity Verification', () => {
    let plaidClient: PlaidApi;

    before(async () => {
        plaidClient = createPlaidClient();
    });

    it('create identity verification with retry', async () => {
        const user: IdentityVerificationCreateRequestUser = {
            email_address: EMAIL,
        };
        const create_request: IdentityVerificationCreateRequest = {
            client_user_id: CLIENT_USER_ID,
            is_shareable: true,
            template_id: TEMPLATE_ID,
            gave_consent: true,
            user: user,
        };

        const create_response = await plaidClient.identityVerificationCreate(create_request);
        expect(create_response).to.be.ok;
        expect(create_response.data.shareable_url).to.be.not.null;
        expect(create_response.data.status).to.be.equals("active");

        const retryUser: IdentityVerificationRequestUser = {
          email_address: EMAIL,
        }
        const retry_request: IdentityVerificationRetryRequest = {
            template_id: TEMPLATE_ID,
            client_user_id: CLIENT_USER_ID,
            strategy: Strategy.Reset,
            user: retryUser,
        };
        const retry_response = await plaidClient.identityVerificationRetry(retry_request);
        expect(retry_response).to.be.ok;
        expect(retry_response.data.shareable_url).to.be.not.null;
        expect(retry_response.data.status).to.be.equals("active");
    });

    it('get and list identity verification', async () => {
        const list_request: IdentityVerificationListRequest = {
            template_id: TEMPLATE_ID,
            client_user_id: CLIENT_USER_ID,
        };

        const list_response = await plaidClient.identityVerificationList(list_request);
        expect(list_response).to.be.ok;
        expect(list_response.data.identity_verifications[0]).to.exist;
        expect(list_response.data.identity_verifications[0].client_user_id).to.be.equals(CLIENT_USER_ID);

        const identity_verification_id = list_response.data.identity_verifications[0].id;
        const get_request: IdentityVerificationGetRequest = {
            identity_verification_id: identity_verification_id
        }
        const get_response = await plaidClient.identityVerificationGet(get_request);
        expect(get_response).to.be.ok;
        expect(get_response.data.id).to.be.equals(identity_verification_id);
    });
});
