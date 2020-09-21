"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationPaymentListResponse {
    static getAttributeTypeMap() {
        return PaymentInitiationPaymentListResponse.attributeTypeMap;
    }
}
PaymentInitiationPaymentListResponse.discriminator = undefined;
PaymentInitiationPaymentListResponse.attributeTypeMap = [
    {
        "name": "payments",
        "baseName": "payments",
        "type": "Array<PaymentInitiationPayment>"
    },
    {
        "name": "next_cursor",
        "baseName": "next_cursor",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.PaymentInitiationPaymentListResponse = PaymentInitiationPaymentListResponse;
//# sourceMappingURL=paymentInitiationPaymentListResponse.js.map