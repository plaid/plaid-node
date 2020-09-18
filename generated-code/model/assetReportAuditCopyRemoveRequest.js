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
exports.AssetReportAuditCopyRemoveRequest = AssetReportAuditCopyRemoveRequest;
//# sourceMappingURL=assetReportAuditCopyRemoveRequest.js.map