"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationRecipientListRequest {
    static getAttributeTypeMap() {
        return PaymentInitiationRecipientListRequest.attributeTypeMap;
    }
}
PaymentInitiationRecipientListRequest.discriminator = undefined;
PaymentInitiationRecipientListRequest.attributeTypeMap = [
    {
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    }
];
exports.PaymentInitiationRecipientListRequest = PaymentInitiationRecipientListRequest;
//# sourceMappingURL=paymentInitiationRecipientListRequest.js.map