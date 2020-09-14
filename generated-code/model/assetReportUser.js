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
        "name": "clientUserId",
        "baseName": "client_user_id",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "first_name",
        "type": "string"
    },
    {
        "name": "middleName",
        "baseName": "middle_name",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "last_name",
        "type": "string"
    },
    {
        "name": "ssn",
        "baseName": "ssn",
        "type": "string"
    },
    {
        "name": "phoneNumber",
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