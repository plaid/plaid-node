"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationRecipientListResponse {
    static getAttributeTypeMap() {
        return PaymentInitiationRecipientListResponse.attributeTypeMap;
    }
}
PaymentInitiationRecipientListResponse.discriminator = undefined;
PaymentInitiationRecipientListResponse.attributeTypeMap = [
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "Array<PaymentInitiationRecipient>"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.PaymentInitiationRecipientListResponse = PaymentInitiationRecipientListResponse;
//# sourceMappingURL=paymentInitiationRecipientListResponse.js.map