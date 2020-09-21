"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportAuditCopyGetRequest {
    static getAttributeTypeMap() {
        return AssetReportAuditCopyGetRequest.attributeTypeMap;
    }
}
AssetReportAuditCopyGetRequest.discriminator = undefined;
AssetReportAuditCopyGetRequest.attributeTypeMap = [
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
        "name": "audit_copy_token",
        "baseName": "audit_copy_token",
        "type": "string"
    }
];
exports.AssetReportAuditCopyGetRequest = AssetReportAuditCopyGetRequest;
//# sourceMappingURL=assetReportAuditCopyGetRequest.js.map