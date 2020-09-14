import { Item } from './item';
import { ItemStatus } from './itemStatus';
export declare class ItemGetResponse {
    'item'?: Item;
    'status'?: ItemStatus;
    'requestId'?: string;
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
