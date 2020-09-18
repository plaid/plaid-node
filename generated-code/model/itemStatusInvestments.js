"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemStatusInvestments {
    static getAttributeTypeMap() {
        return ItemStatusInvestments.attributeTypeMap;
    }
}
ItemStatusInvestments.discriminator = undefined;
ItemStatusInvestments.attributeTypeMap = [
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
exports.ItemStatusInvestments = ItemStatusInvestments;
//# sourceMappingURL=itemStatusInvestments.js.map