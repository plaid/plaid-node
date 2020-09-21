import { ProductStatusBreakdown } from './productStatusBreakdown';
export declare class ProductStatus {
    'status'?: string;
    'last_status_change'?: string;
    'breakdown'?: ProductStatusBreakdown;
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
