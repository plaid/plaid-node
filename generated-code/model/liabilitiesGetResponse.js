"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LiabilitiesGetResponse {
    static getAttributeTypeMap() {
        return LiabilitiesGetResponse.attributeTypeMap;
    }
}
LiabilitiesGetResponse.discriminator = undefined;
LiabilitiesGetResponse.attributeTypeMap = [
    {
        "name": "accounts",
        "baseName": "accounts",
        "type": "Array<Account>"
    },
    {
        "name": "item",
        "baseName": "item",
        "type": "Item"
    },
    {
        "name": "liabilities",
        "baseName": "liabilities",
        "type": "LiabilitiesObject"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.LiabilitiesGetResponse = LiabilitiesGetResponse;
//# sourceMappingURL=liabilitiesGetResponse.js.map