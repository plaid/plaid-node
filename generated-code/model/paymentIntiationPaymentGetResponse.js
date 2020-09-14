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
        "name": "payment",
        "baseName": "payment",
        "type": "PaymentInitiationPayment"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.PaymentIntiationPaymentGetResponse = PaymentIntiationPaymentGetResponse;
//# sourceMappingURL=paymentIntiationPaymentGetResponse.js.map