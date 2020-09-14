"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductStatusBreakdown {
    static getAttributeTypeMap() {
        return ProductStatusBreakdown.attributeTypeMap;
    }
}
ProductStatusBreakdown.discriminator = undefined;
ProductStatusBreakdown.attributeTypeMap = [
    {
        "name": "success",
        "baseName": "success",
        "type": "number"
    },
    {
        "name": "errorPlaid",
        "baseName": "error_plaid",
        "type": "number"
    },
    {
        "name": "errorInstitution",
        "baseName": "error_institution",
        "type": "number"
    },
    {
        "name": "refreshInterval",
        "baseName": "refresh_interval",
        "type": "string"
    }
];
exports.ProductStatusBreakdown = ProductStatusBreakdown;
//# sourceMappingURL=productStatusBreakdown.js.map