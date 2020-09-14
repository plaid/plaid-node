"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportAuditCopyCreateResponse {
    static getAttributeTypeMap() {
        return AssetReportAuditCopyCreateResponse.attributeTypeMap;
    }
}
AssetReportAuditCopyCreateResponse.discriminator = undefined;
AssetReportAuditCopyCreateResponse.attributeTypeMap = [
    {
        "name": "auditCopyToken",
        "baseName": "audit_copy_token",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.AssetReportAuditCopyCreateResponse = AssetReportAuditCopyCreateResponse;
//# sourceMappingURL=assetReportAuditCopyCreateResponse.js.map