"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationRecipientGetRequest {
    static getAttributeTypeMap() {
        return PaymentInitiationRecipientGetRequest.attributeTypeMap;
    }
}
PaymentInitiationRecipientGetRequest.discriminator = undefined;
PaymentInitiationRecipientGetRequest.attributeTypeMap = [
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
        "name": "recipient_id",
        "baseName": "recipient_id",
        "type": "string"
    }
];
exports.PaymentInitiationRecipientGetRequest = PaymentInitiationRecipientGetRequest;
//# sourceMappingURL=paymentInitiationRecipientGetRequest.js.map