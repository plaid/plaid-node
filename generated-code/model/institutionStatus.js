"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InstitutionStatus {
    static getAttributeTypeMap() {
        return InstitutionStatus.attributeTypeMap;
    }
}
InstitutionStatus.discriminator = undefined;
InstitutionStatus.attributeTypeMap = [
    {
        "name": "item_logins",
        "baseName": "item_logins",
        "type": "ProductStatus"
    },
    {
        "name": "transactions_updates",
        "baseName": "transactions_updates",
        "type": "ProductStatus"
    },
    {
        "name": "auth",
        "baseName": "auth",
        "type": "ProductStatus"
    },
    {
        "name": "balance",
        "baseName": "balance",
        "type": "ProductStatus"
    },
    {
        "name": "identity",
        "baseName": "identity",
        "type": "ProductStatus"
    }
];
exports.InstitutionStatus = InstitutionStatus;
//# sourceMappingURL=institutionStatus.js.map