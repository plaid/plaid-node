"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddressData {
    static getAttributeTypeMap() {
        return AddressData.attributeTypeMap;
    }
}
AddressData.discriminator = undefined;
AddressData.attributeTypeMap = [
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "street",
        "baseName": "street",
        "type": "string"
    },
    {
        "name": "postalCode",
        "baseName": "postal_code",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    }
];
exports.AddressData = AddressData;
//# sourceMappingURL=addressData.js.map