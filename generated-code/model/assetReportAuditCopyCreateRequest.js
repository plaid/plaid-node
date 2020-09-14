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
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "assetReportToken",
        "baseName": "asset_report_token",
        "type": "string"
    },
    {
        "name": "auditorId",
        "baseName": "auditor_id",
        "type": "string"
    }
];
exports.AssetReportAuditCopyCreateRequest = AssetReportAuditCopyCreateRequest;
//# sourceMappingURL=assetReportAuditCopyCreateRequest.js.map