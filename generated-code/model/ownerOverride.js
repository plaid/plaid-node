"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OwnerOverride {
    static getAttributeTypeMap() {
        return OwnerOverride.attributeTypeMap;
    }
}
OwnerOverride.discriminator = undefined;
OwnerOverride.attributeTypeMap = [
    {
        "name": "names",
        "baseName": "names",
        "type": "Array<string>"
    },
    {
        "name": "phoneNumbers",
        "baseName": "phone_numbers",
        "type": "Array<PhoneNumber>"
    },
    {
        "name": "emails",
        "baseName": "emails",
        "type": "Array<Email>"
    },
    {
        "name": "addresses",
        "baseName": "addresses",
        "type": "Array<Address>"
    }
];
exports.OwnerOverride = OwnerOverride;
//# sourceMappingURL=ownerOverride.js.map