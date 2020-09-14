"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServicerAddressData {
    static getAttributeTypeMap() {
        return ServicerAddressData.attributeTypeMap;
    }
}
ServicerAddressData.discriminator = undefined;
ServicerAddressData.attributeTypeMap = [
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
exports.ServicerAddressData = ServicerAddressData;
//# sourceMappingURL=servicerAddressData.js.map