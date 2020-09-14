import { PaymentInitiationPaymentListRequestOptions } from './paymentInitiationPaymentListRequestOptions';
export declare class PaymentInitiationPaymentListRequest {
    'clientId': string;
    'secret': string;
    'options'?: PaymentInitiationPaymentListRequestOptions;
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
