"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }
}
Address.discriminator = undefined;
Address.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "AddressData"
    },
    {
        "name": "primary",
        "baseName": "primary",
        "type": "boolean"
    }
];
exports.Address = Address;
//# sourceMappingURL=address.js.map