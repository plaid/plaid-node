"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentIntiationPaymentGetResponse {
    static getAttributeTypeMap() {
        return PaymentIntiationPaymentGetResponse.attributeTypeMap;
    }
}
PaymentIntiationPaymentGetResponse.discriminator = undefined;
PaymentIntiationPaymentGetResponse.attributeTypeMap = [
    {
        "name": "payment_id",
        "baseName": "payment_id",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "PaymentAmount"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "recipient_id",
        "baseName": "recipient_id",
        "type": "string"
    },
    {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
    },
    {
        "name": "last_status_update",
        "baseName": "last_status_update",
        "type": "string"
    }
];
exports.PaymentIntiationPaymentGetResponse = PaymentIntiationPaymentGetResponse;
//# sourceMappingURL=paymentIntiationPaymentGetResponse.js.map