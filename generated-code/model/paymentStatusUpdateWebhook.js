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
        "name": "webhookType",
        "baseName": "webhook_type",
        "type": "string"
    },
    {
        "name": "webhookCode",
        "baseName": "webhook_code",
        "type": "string"
    },
    {
        "name": "paymentId",
        "baseName": "payment_id",
        "type": "string"
    },
    {
        "name": "newPaymentStatus",
        "baseName": "new_payment_status",
        "type": "string"
    },
    {
        "name": "oldPaymentStatus",
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