"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Numbers {
    static getAttributeTypeMap() {
        return Numbers.attributeTypeMap;
    }
}
Numbers.discriminator = undefined;
Numbers.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string"
    },
    {
        "name": "ach_routing",
        "baseName": "ach_routing",
        "type": "string"
    },
    {
        "name": "ach_wire_routing",
        "baseName": "ach_wire_routing",
        "type": "string"
    },
    {
        "name": "eft_institution",
        "baseName": "eft_institution",
        "type": "string"
    },
    {
        "name": "eft_branch",
        "baseName": "eft_branch",
        "type": "string"
    },
    {
        "name": "international_bic",
        "baseName": "international_bic",
        "type": "string"
    },
    {
        "name": "international_iban",
        "baseName": "international_iban",
        "type": "string"
    },
    {
        "name": "bacs_sort_code",
        "baseName": "bacs_sort_code",
        "type": "string"
    }
];
exports.Numbers = Numbers;
//# sourceMappingURL=numbers.js.map