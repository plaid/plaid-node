import { Location } from './location';
import { PaymentMeta } from './paymentMeta';
import { TransactionCode } from './transactionCode';
export declare class Transaction {
    'transactionType'?: string;
    'transactionId'?: string;
    'accountOwner'?: string | null;
    'pendingTransactionId'?: string | null;
    'pending'?: boolean;
    'paymentChannel'?: string;
    'paymentMeta'?: PaymentMeta;
    'name'?: string;
    'merchantName'?: string | null;
    'location'?: Location;
    'authorizedDate'?: string | null;
    'date'?: string;
    'categoryId'?: string;
    'category'?: Array<string> | null;
    'unofficialCurrencyCode'?: string | null;
    'isoCurrencyCode'?: string | null;
    'amount'?: number;
    'accountId'?: string;
    'transactionCode'?: TransactionCode | null;
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
