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
        "name": "reference_number",
        "baseName": "reference_number",
        "type": "string"
    },
    {
        "name": "ppd_id",
        "baseName": "ppd_id",
        "type": "string"
    },
    {
        "name": "payee",
        "baseName": "payee",
        "type": "string"
    },
    {
        "name": "by_order_of",
        "baseName": "by_order_of",
        "type": "string"
    },
    {
        "name": "payer",
        "baseName": "payer",
        "type": "string"
    },
    {
        "name": "payment_method",
        "baseName": "payment_method",
        "type": "string"
    },
    {
        "name": "payment_processor",
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