"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentMeta {
    static getAttributeTypeMap() {
        return PaymentMeta.attributeTypeMap;
    }
}
PaymentMeta.discriminator = undefined;
PaymentMeta.attributeTypeMap = [
    {
        "name": "referenceNumber",
        "baseName": "reference_number",
        "type": "string"
    },
    {
        "name": "ppdId",
        "baseName": "ppd_id",
        "type": "string"
    },
    {
        "name": "payee",
        "baseName": "payee",
        "type": "string"
    },
    {
        "name": "byOrderOf",
        "baseName": "by_order_of",
        "type": "string"
    },
    {
        "name": "payer",
        "baseName": "payer",
        "type": "string"
    },
    {
        "name": "paymentMethod",
        "baseName": "payment_method",
        "type": "string"
    },
    {
        "name": "paymentProcessor",
        "baseName": "payment_processor",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    }
];
exports.PaymentMeta = PaymentMeta;
//# sourceMappingURL=paymentMeta.js.map