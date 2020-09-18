import { ProductStatus } from './productStatus';
export declare class InstitutionStatus {
    'item_logins'?: ProductStatus;
    'transactions_updates'?: ProductStatus;
    'auth'?: ProductStatus;
    'balance'?: ProductStatus;
    'identity'?: ProductStatus;
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
