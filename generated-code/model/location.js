"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Location {
    static getAttributeTypeMap() {
        return Location.attributeTypeMap;
    }
}
Location.discriminator = undefined;
Location.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "string"
    },
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
        "name": "postalCode",
        "baseName": "postal_code",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "lat",
        "baseName": "lat",
        "type": "number"
    },
    {
        "name": "_long",
        "baseName": "long",
        "type": "number"
    },
    {
        "name": "storeNumber",
        "baseName": "store_number",
        "type": "string"
    }
];
exports.Location = Location;
//# sourceMappingURL=location.js.map