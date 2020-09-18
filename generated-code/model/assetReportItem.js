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
        "name": "item_id",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "institution_name",
        "baseName": "institution_name",
        "type": "string"
    },
    {
        "name": "institution_id",
        "baseName": "institution_id",
        "type": "string"
    },
    {
        "name": "date_last_updated",
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