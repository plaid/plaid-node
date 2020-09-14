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
        "name": "achRouting",
        "baseName": "ach_routing",
        "type": "string"
    },
    {
        "name": "achWireRouting",
        "baseName": "ach_wire_routing",
        "type": "string"
    },
    {
        "name": "eftInstitution",
        "baseName": "eft_institution",
        "type": "string"
    },
    {
        "name": "eftBranch",
        "baseName": "eft_branch",
        "type": "string"
    },
    {
        "name": "internationalBic",
        "baseName": "international_bic",
        "type": "string"
    },
    {
        "name": "internationalIban",
        "baseName": "international_iban",
        "type": "string"
    },
    {
        "name": "bacsSortCode",
        "baseName": "bacs_sort_code",
        "type": "string"
    }
];
exports.Numbers = Numbers;
//# sourceMappingURL=numbers.js.map