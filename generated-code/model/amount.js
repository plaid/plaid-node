"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Amount {
    static getAttributeTypeMap() {
        return Amount.attributeTypeMap;
    }
}
Amount.discriminator = undefined;
Amount.attributeTypeMap = [
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    }
];
exports.Amount = Amount;
//# sourceMappingURL=amount.js.map