"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReport {
    static getAttributeTypeMap() {
        return AssetReport.attributeTypeMap;
    }
}
AssetReport.discriminator = undefined;
AssetReport.attributeTypeMap = [
    {
        "name": "asset_report_id",
        "baseName": "asset_report_id",
        "type": "string"
    },
    {
        "name": "client_report_id",
        "baseName": "client_report_id",
        "type": "string"
    },
    {
        "name": "date_generated",
        "baseName": "date_generated",
        "type": "string"
    },
    {
        "name": "days_requested",
        "baseName": "days_requested",
        "type": "number"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "AssetReportUser"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<AssetReportItem>"
    }
];
exports.AssetReport = AssetReport;
//# sourceMappingURL=assetReport.js.map