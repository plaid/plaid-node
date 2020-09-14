export declare class InflowModel {
    'type': string;
    'incomeAmount'?: number;
    'paymentDayOfMonth'?: number;
    'transactionName'?: string;
    'statementDayOfMonth'?: string;
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
