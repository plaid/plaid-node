"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerificationExpiredWebhook {
    static getAttributeTypeMap() {
        return VerificationExpiredWebhook.attributeTypeMap;
    }
}
VerificationExpiredWebhook.discriminator = undefined;
VerificationExpiredWebhook.attributeTypeMap = [
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
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    }
];
exports.VerificationExpiredWebhook = VerificationExpiredWebhook;
//# sourceMappingURL=verificationExpiredWebhook.js.map