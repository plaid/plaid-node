"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkTokenCreateResponse {
    static getAttributeTypeMap() {
        return LinkTokenCreateResponse.attributeTypeMap;
    }
}
LinkTokenCreateResponse.discriminator = undefined;
LinkTokenCreateResponse.attributeTypeMap = [
    {
        "name": "link_token",
        "baseName": "link_token",
        "type": "string"
    },
    {
        "name": "expiration",
        "baseName": "expiration",
        "type": "string"
    }
];
exports.LinkTokenCreateResponse = LinkTokenCreateResponse;
//# sourceMappingURL=linkTokenCreateResponse.js.map