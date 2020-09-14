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
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    }
];
exports.PaymentInitiationRecipientListResponse = PaymentInitiationRecipientListResponse;
//# sourceMappingURL=paymentInitiationRecipientListResponse.js.map