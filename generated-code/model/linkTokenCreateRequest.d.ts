import { LinkTokenCreateRequestAccountFilters } from './linkTokenCreateRequestAccountFilters';
import { LinkTokenCreateRequestPaymentInitiation } from './linkTokenCreateRequestPaymentInitiation';
import { LinkTokenCreateRequestUser } from './linkTokenCreateRequestUser';
export declare class LinkTokenCreateRequest {
    'client_id': string;
    'secret': string;
    'client_name': string;
    'language': string;
    'country_codes': Array<string>;
    'user': LinkTokenCreateRequestUser;
    'products'?: Array<string>;
    'webhook'?: string;
    'access_token'?: string;
    'link_customization_name'?: string;
    'redirect_uri'?: string;
    'android_package_name'?: string;
    'account_filters'?: LinkTokenCreateRequestAccountFilters;
    'institution_id'?: string;
    'payment_initiation'?: LinkTokenCreateRequestPaymentInitiation;
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
