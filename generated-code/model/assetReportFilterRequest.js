"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportFilterRequest {
    static getAttributeTypeMap() {
        return AssetReportFilterRequest.attributeTypeMap;
    }
}
AssetReportFilterRequest.discriminator = undefined;
AssetReportFilterRequest.attributeTypeMap = [
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
        "name": "accountIdsToExclude",
        "baseName": "account_ids_to_exclude",
        "type": "Array<string>"
    }
];
exports.AssetReportFilterRequest = AssetReportFilterRequest;
//# sourceMappingURL=assetReportFilterRequest.js.map