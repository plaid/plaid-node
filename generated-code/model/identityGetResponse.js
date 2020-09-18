"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IdentityGetResponse {
    static getAttributeTypeMap() {
        return IdentityGetResponse.attributeTypeMap;
    }
}
IdentityGetResponse.discriminator = undefined;
IdentityGetResponse.attributeTypeMap = [
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
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.IdentityGetResponse = IdentityGetResponse;
//# sourceMappingURL=identityGetResponse.js.map