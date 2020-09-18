"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportGetResponse {
    static getAttributeTypeMap() {
        return AssetReportGetResponse.attributeTypeMap;
    }
}
AssetReportGetResponse.discriminator = undefined;
AssetReportGetResponse.attributeTypeMap = [
    {
        "name": "report",
        "baseName": "report",
        "type": "AssetReport"
    },
    {
        "name": "warnings",
        "baseName": "warnings",
        "type": "Array<Warning>"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.AssetReportGetResponse = AssetReportGetResponse;
//# sourceMappingURL=assetReportGetResponse.js.map