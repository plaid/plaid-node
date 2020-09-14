import { Amount } from './amount';
import { PaymentInitiationPaymentCreateRequestSchedule } from './paymentInitiationPaymentCreateRequestSchedule';
export declare class PaymentInitiationPaymentCreateRequest {
    'clientId': string;
    'secret': string;
    'recipientId': string;
    'reference': string;
    'amount': Amount;
    'schedule'?: PaymentInitiationPaymentCreateRequestSchedule;
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
