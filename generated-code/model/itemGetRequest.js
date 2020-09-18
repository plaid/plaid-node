"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemGetRequest {
    static getAttributeTypeMap() {
        return ItemGetRequest.attributeTypeMap;
    }
}
ItemGetRequest.discriminator = undefined;
ItemGetRequest.attributeTypeMap = [
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
exports.ItemGetRequest = ItemGetRequest;
//# sourceMappingURL=itemGetRequest.js.map