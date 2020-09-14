"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }
}
Transaction.discriminator = undefined;
Transaction.attributeTypeMap = [
    {
        "name": "transactionType",
        "baseName": "transaction_type",
        "type": "string"
    },
    {
        "name": "transactionId",
        "baseName": "transaction_id",
        "type": "string"
    },
    {
        "name": "accountOwner",
        "baseName": "account_owner",
        "type": "string"
    },
    {
        "name": "pendingTransactionId",
        "baseName": "pending_transaction_id",
        "type": "string"
    },
    {
        "name": "pending",
        "baseName": "pending",
        "type": "boolean"
    },
    {
        "name": "paymentChannel",
        "baseName": "payment_channel",
        "type": "string"
    },
    {
        "name": "paymentMeta",
        "baseName": "payment_meta",
        "type": "PaymentMeta"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "merchantName",
        "baseName": "merchant_name",
        "type": "string"
    },
    {
        "name": "location",
        "baseName": "location",
        "type": "Location"
    },
    {
        "name": "authorizedDate",
        "baseName": "authorized_date",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "categoryId",
        "baseName": "category_id",
        "type": "string"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "Array<string>"
    },
    {
        "name": "unofficialCurrencyCode",
        "baseName": "unofficial_currency_code",
        "type": "string"
    },
    {
        "name": "isoCurrencyCode",
        "baseName": "iso_currency_code",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "transactionCode",
        "baseName": "transaction_code",
        "type": "TransactionCode"
    }
];
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map