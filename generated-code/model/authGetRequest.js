"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthGetRequest {
    static getAttributeTypeMap() {
        return AuthGetRequest.attributeTypeMap;
    }
}
AuthGetRequest.discriminator = undefined;
AuthGetRequest.attributeTypeMap = [
    {
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "access_token",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "AuthGetRequestOptions"
    }
];
exports.AuthGetRequest = AuthGetRequest;
//# sourceMappingURL=authGetRequest.js.map