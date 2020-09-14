import { LinkTokenCreateRequestAccountFilters } from './linkTokenCreateRequestAccountFilters';
import { LinkTokenCreateRequestPaymentInitiation } from './linkTokenCreateRequestPaymentInitiation';
import { LinkTokenCreateRequestUser } from './linkTokenCreateRequestUser';
export declare class LinkTokenCreateRequest {
    'clientId': string;
    'secret': string;
    'clientName': string;
    'language': string;
    'countryCodes': Array<string>;
    'user': LinkTokenCreateRequestUser;
    'products'?: Array<string>;
    'webhook'?: string;
    'accessToken'?: string;
    'linkCustomizationName'?: string;
    'redirectUri'?: string;
    'androidPackageName'?: string;
    'accountFilters'?: LinkTokenCreateRequestAccountFilters;
    'institutionId'?: string;
    'paymentInitiation'?: LinkTokenCreateRequestPaymentInitiation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
