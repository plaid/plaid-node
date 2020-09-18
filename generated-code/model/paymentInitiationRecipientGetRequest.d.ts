export declare class PaymentInitiationRecipientGetRequest {
    'client_id': string;
    'secret': string;
    'recipient_id': string;
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
