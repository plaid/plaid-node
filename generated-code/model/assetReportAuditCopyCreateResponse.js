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
        "name": "audit_copy_token",
        "baseName": "audit_copy_token",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.AssetReportAuditCopyCreateResponse = AssetReportAuditCopyCreateResponse;
//# sourceMappingURL=assetReportAuditCopyCreateResponse.js.map