export declare class PaymentInitiationPaymentCreateRequestSchedule {
    'interval': string;
    'intervalExecutionDay': number;
    'startDate': string;
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
