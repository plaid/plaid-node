"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemGetResponse {
    static getAttributeTypeMap() {
        return ItemGetResponse.attributeTypeMap;
    }
}
ItemGetResponse.discriminator = undefined;
ItemGetResponse.attributeTypeMap = [
    {
        "name": "item",
        "baseName": "item",
        "type": "Item"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "ItemStatus"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ItemGetResponse = ItemGetResponse;
//# sourceMappingURL=itemGetResponse.js.map