"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportItem {
    static getAttributeTypeMap() {
        return AssetReportItem.attributeTypeMap;
    }
}
AssetReportItem.discriminator = undefined;
AssetReportItem.attributeTypeMap = [
    {
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "institutionName",
        "baseName": "institution_name",
        "type": "string"
    },
    {
        "name": "institutionId",
        "baseName": "institution_id",
        "type": "string"
    },
    {
        "name": "dateLastUpdated",
        "baseName": "date_last_updated",
        "type": "string"
    },
    {
        "name": "accounts",
        "baseName": "accounts",
        "type": "Array<Account>"
    }
];
exports.AssetReportItem = AssetReportItem;
//# sourceMappingURL=assetReportItem.js.map