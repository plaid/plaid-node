import { ItemImportRequestOptions } from './itemImportRequestOptions';
import { ItemImportRequestUserAuth } from './itemImportRequestUserAuth';
export declare class ItemImportRequest {
    'client_id': string;
    'secret': string;
    'products': Array<string>;
    'user_auth': ItemImportRequestUserAuth;
    'options'?: ItemImportRequestOptions;
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
