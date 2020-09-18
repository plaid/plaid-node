"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationPaymentCreateResponse {
    static getAttributeTypeMap() {
        return PaymentInitiationPaymentCreateResponse.attributeTypeMap;
    }
}
PaymentInitiationPaymentCreateResponse.discriminator = undefined;
PaymentInitiationPaymentCreateResponse.attributeTypeMap = [
    {
        "name": "payment_id",
        "baseName": "payment_id",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.PaymentInitiationPaymentCreateResponse = PaymentInitiationPaymentCreateResponse;
//# sourceMappingURL=paymentInitiationPaymentCreateResponse.js.map