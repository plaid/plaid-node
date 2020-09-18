export declare class InflowModel {
    'type': string;
    'income_amount'?: number;
    'payment_day_of_month'?: number;
    'transaction_name'?: string;
    'statement_day_of_month'?: string;
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
