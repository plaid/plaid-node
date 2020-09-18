"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationRecipientCreateRequestBacs {
    static getAttributeTypeMap() {
        return PaymentInitiationRecipientCreateRequestBacs.attributeTypeMap;
    }
}
PaymentInitiationRecipientCreateRequestBacs.discriminator = undefined;
PaymentInitiationRecipientCreateRequestBacs.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string"
    },
    {
        "name": "sort_code",
        "baseName": "sort_code",
        "type": "string"
    }
];
exports.PaymentInitiationRecipientCreateRequestBacs = PaymentInitiationRecipientCreateRequestBacs;
//# sourceMappingURL=paymentInitiationRecipientCreateRequestBacs.js.map