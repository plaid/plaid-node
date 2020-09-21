"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportAuditCopyCreateRequest {
    static getAttributeTypeMap() {
        return AssetReportAuditCopyCreateRequest.attributeTypeMap;
    }
}
AssetReportAuditCopyCreateRequest.discriminator = undefined;
AssetReportAuditCopyCreateRequest.attributeTypeMap = [
    {
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "asset_report_token",
        "baseName": "asset_report_token",
        "type": "string"
    },
    {
        "name": "auditor_id",
        "baseName": "auditor_id",
        "type": "string"
    }
];
exports.AssetReportAuditCopyCreateRequest = AssetReportAuditCopyCreateRequest;
//# sourceMappingURL=assetReportAuditCopyCreateRequest.js.map