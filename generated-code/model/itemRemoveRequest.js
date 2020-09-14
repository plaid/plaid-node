"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemRemoveRequest {
    static getAttributeTypeMap() {
        return ItemRemoveRequest.attributeTypeMap;
    }
}
ItemRemoveRequest.discriminator = undefined;
ItemRemoveRequest.attributeTypeMap = [
    {
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    }
];
exports.ItemRemoveRequest = ItemRemoveRequest;
//# sourceMappingURL=itemRemoveRequest.js.map