"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportAuditCopyRemoveRequest {
    static getAttributeTypeMap() {
        return AssetReportAuditCopyRemoveRequest.attributeTypeMap;
    }
}
AssetReportAuditCopyRemoveRequest.discriminator = undefined;
AssetReportAuditCopyRemoveRequest.attributeTypeMap = [
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
        "name": "auditCopyToken",
        "baseName": "audit_copy_token",
        "type": "string"
    }
];
exports.AssetReportAuditCopyRemoveRequest = AssetReportAuditCopyRemoveRequest;
//# sourceMappingURL=assetReportAuditCopyRemoveRequest.js.map