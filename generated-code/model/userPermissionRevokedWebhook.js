"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserPermissionRevokedWebhook {
    static getAttributeTypeMap() {
        return UserPermissionRevokedWebhook.attributeTypeMap;
    }
}
UserPermissionRevokedWebhook.discriminator = undefined;
UserPermissionRevokedWebhook.attributeTypeMap = [
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
        "name": "error",
        "baseName": "error",
        "type": "Error"
    }
];
exports.UserPermissionRevokedWebhook = UserPermissionRevokedWebhook;
//# sourceMappingURL=userPermissionRevokedWebhook.js.map