"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Owner {
    static getAttributeTypeMap() {
        return Owner.attributeTypeMap;
    }
}
Owner.discriminator = undefined;
Owner.attributeTypeMap = [
    {
        "name": "names",
        "baseName": "names",
        "type": "Array<string>"
    },
    {
        "name": "phone_numbers",
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
exports.Owner = Owner;
//# sourceMappingURL=owner.js.map