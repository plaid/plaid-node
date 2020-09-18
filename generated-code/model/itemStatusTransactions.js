"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemStatusTransactions {
    static getAttributeTypeMap() {
        return ItemStatusTransactions.attributeTypeMap;
    }
}
ItemStatusTransactions.discriminator = undefined;
ItemStatusTransactions.attributeTypeMap = [
    {
        "name": "last_successful_update",
        "baseName": "last_successful_update",
        "type": "string"
    },
    {
        "name": "last_failed_update",
        "baseName": "last_failed_update",
        "type": "string"
    }
];
exports.ItemStatusTransactions = ItemStatusTransactions;
//# sourceMappingURL=itemStatusTransactions.js.map