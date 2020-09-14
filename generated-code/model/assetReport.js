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
        "name": "assetReportId",
        "baseName": "asset_report_id",
        "type": "string"
    },
    {
        "name": "clientReportId",
        "baseName": "client_report_id",
        "type": "string"
    },
    {
        "name": "dateGenerated",
        "baseName": "date_generated",
        "type": "string"
    },
    {
        "name": "daysRequested",
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