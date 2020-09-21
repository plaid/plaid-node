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
        "name": "item_id",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "account_id",
        "baseName": "account_id",
        "type": "string"
    }
];
exports.VerificationExpiredWebhook = VerificationExpiredWebhook;
//# sourceMappingURL=verificationExpiredWebhook.js.map