"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportUser {
    static getAttributeTypeMap() {
        return AssetReportUser.attributeTypeMap;
    }
}
AssetReportUser.discriminator = undefined;
AssetReportUser.attributeTypeMap = [
    {
        "name": "client_user_id",
        "baseName": "client_user_id",
        "type": "string"
    },
    {
        "name": "first_name",
        "baseName": "first_name",
        "type": "string"
    },
    {
        "name": "middle_name",
        "baseName": "middle_name",
        "type": "string"
    },
    {
        "name": "last_name",
        "baseName": "last_name",
        "type": "string"
    },
    {
        "name": "ssn",
        "baseName": "ssn",
        "type": "string"
    },
    {
        "name": "phone_number",
        "baseName": "phone_number",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    }
];
exports.AssetReportUser = AssetReportUser;
//# sourceMappingURL=assetReportUser.js.map