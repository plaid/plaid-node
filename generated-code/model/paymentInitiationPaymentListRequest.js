"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationPaymentListRequest {
    static getAttributeTypeMap() {
        return PaymentInitiationPaymentListRequest.attributeTypeMap;
    }
}
PaymentInitiationPaymentListRequest.discriminator = undefined;
PaymentInitiationPaymentListRequest.attributeTypeMap = [
    {
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.PaymentInitiationPaymentListRequest = PaymentInitiationPaymentListRequest;
//# sourceMappingURL=paymentInitiationPaymentListRequest.js.map