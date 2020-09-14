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
        "name": "lastSuccessfulUpdate",
        "baseName": "last_successful_update",
        "type": "string"
    },
    {
        "name": "lastFailedUpdate",
        "baseName": "last_failed_update",
        "type": "string"
    }
];
exports.ItemStatusInvestments = ItemStatusInvestments;
//# sourceMappingURL=itemStatusInvestments.js.map