"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationRecipientCreateResponse {
    static getAttributeTypeMap() {
        return PaymentInitiationRecipientCreateResponse.attributeTypeMap;
    }
}
PaymentInitiationRecipientCreateResponse.discriminator = undefined;
PaymentInitiationRecipientCreateResponse.attributeTypeMap = [
    {
        "name": "recipientId",
        "baseName": "recipient_id",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.PaymentInitiationRecipientCreateResponse = PaymentInitiationRecipientCreateResponse;
//# sourceMappingURL=paymentInitiationRecipientCreateResponse.js.map