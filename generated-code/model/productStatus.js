"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductStatus {
    static getAttributeTypeMap() {
        return ProductStatus.attributeTypeMap;
    }
}
ProductStatus.discriminator = undefined;
ProductStatus.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "lastStatusChange",
        "baseName": "last_status_change",
        "type": "string"
    },
    {
        "name": "breakdown",
        "baseName": "breakdown",
        "type": "ProductStatusBreakdown"
    }
];
exports.ProductStatus = ProductStatus;
//# sourceMappingURL=productStatus.js.map