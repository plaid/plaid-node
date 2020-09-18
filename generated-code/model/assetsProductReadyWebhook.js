"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetsProductReadyWebhook {
    static getAttributeTypeMap() {
        return AssetsProductReadyWebhook.attributeTypeMap;
    }
}
AssetsProductReadyWebhook.discriminator = undefined;
AssetsProductReadyWebhook.attributeTypeMap = [
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
        "name": "asset_report_id",
        "baseName": "asset_report_id",
        "type": "string"
    }
];
exports.AssetsProductReadyWebhook = AssetsProductReadyWebhook;
//# sourceMappingURL=assetsProductReadyWebhook.js.map