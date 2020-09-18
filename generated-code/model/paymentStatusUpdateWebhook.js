"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentStatusUpdateWebhook {
    static getAttributeTypeMap() {
        return PaymentStatusUpdateWebhook.attributeTypeMap;
    }
}
PaymentStatusUpdateWebhook.discriminator = undefined;
PaymentStatusUpdateWebhook.attributeTypeMap = [
    {
        "name": "webhook_type",
        "baseName": "webhook_type",
        "type": "string"
    },
    {
        "name": "webhook_code",
        "baseName": "webhook_code",
        "type": "string"
    },
    {
        "name": "payment_id",
        "baseName": "payment_id",
        "type": "string"
    },
    {
        "name": "new_payment_status",
        "baseName": "new_payment_status",
        "type": "string"
    },
    {
        "name": "old_payment_status",
        "baseName": "old_payment_status",
        "type": "string"
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "Error"
    }
];
exports.PaymentStatusUpdateWebhook = PaymentStatusUpdateWebhook;
//# sourceMappingURL=paymentStatusUpdateWebhook.js.map