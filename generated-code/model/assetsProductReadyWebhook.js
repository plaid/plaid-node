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
        "name": "assetReportId",
        "baseName": "asset_report_id",
        "type": "string"
    }
];
exports.AssetsProductReadyWebhook = AssetsProductReadyWebhook;
//# sourceMappingURL=assetsProductReadyWebhook.js.map