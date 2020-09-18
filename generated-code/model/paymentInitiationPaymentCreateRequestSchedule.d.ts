export declare class PaymentInitiationPaymentCreateRequestSchedule {
    'interval': string;
    'interval_execution_day': number;
    'start_date': string;
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
