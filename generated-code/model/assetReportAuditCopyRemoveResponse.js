"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportAuditCopyRemoveResponse {
    static getAttributeTypeMap() {
        return AssetReportAuditCopyRemoveResponse.attributeTypeMap;
    }
}
AssetReportAuditCopyRemoveResponse.discriminator = undefined;
AssetReportAuditCopyRemoveResponse.attributeTypeMap = [
    {
        "name": "removed",
        "baseName": "removed",
        "type": "boolean"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.AssetReportAuditCopyRemoveResponse = AssetReportAuditCopyRemoveResponse;
//# sourceMappingURL=assetReportAuditCopyRemoveResponse.js.map