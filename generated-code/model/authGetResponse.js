"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthGetResponse {
    static getAttributeTypeMap() {
        return AuthGetResponse.attributeTypeMap;
    }
}
AuthGetResponse.discriminator = undefined;
AuthGetResponse.attributeTypeMap = [
    {
        "name": "accounts",
        "baseName": "accounts",
        "type": "Array<Account>"
    },
    {
        "name": "numbers",
        "baseName": "numbers",
        "type": "AuthGetResponseNumbers"
    },
    {
        "name": "item",
        "baseName": "item",
        "type": "Item"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.AuthGetResponse = AuthGetResponse;
//# sourceMappingURL=authGetResponse.js.map