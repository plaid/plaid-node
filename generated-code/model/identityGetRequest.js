"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IdentityGetRequest {
    static getAttributeTypeMap() {
        return IdentityGetRequest.attributeTypeMap;
    }
}
IdentityGetRequest.discriminator = undefined;
IdentityGetRequest.attributeTypeMap = [
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
    }
];
exports.IdentityGetRequest = IdentityGetRequest;
//# sourceMappingURL=identityGetRequest.js.map