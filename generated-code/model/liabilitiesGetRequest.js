"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LiabilitiesGetRequest {
    static getAttributeTypeMap() {
        return LiabilitiesGetRequest.attributeTypeMap;
    }
}
LiabilitiesGetRequest.discriminator = undefined;
LiabilitiesGetRequest.attributeTypeMap = [
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
        "type": "LiabilitiesGetRequestOptions"
    }
];
exports.LiabilitiesGetRequest = LiabilitiesGetRequest;
//# sourceMappingURL=liabilitiesGetRequest.js.map