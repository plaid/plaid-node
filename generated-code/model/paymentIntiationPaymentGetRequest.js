"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentIntiationPaymentGetRequest {
    static getAttributeTypeMap() {
        return PaymentIntiationPaymentGetRequest.attributeTypeMap;
    }
}
PaymentIntiationPaymentGetRequest.discriminator = undefined;
PaymentIntiationPaymentGetRequest.attributeTypeMap = [
    {
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "paymentId",
        "baseName": "payment_id",
        "type": "string"
    }
];
exports.PaymentIntiationPaymentGetRequest = PaymentIntiationPaymentGetRequest;
//# sourceMappingURL=paymentIntiationPaymentGetRequest.js.map