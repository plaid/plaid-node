"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StandaloneAccountType {
    static getAttributeTypeMap() {
        return StandaloneAccountType.attributeTypeMap;
    }
}
StandaloneAccountType.discriminator = undefined;
StandaloneAccountType.attributeTypeMap = [
    {
        "name": "depository",
        "baseName": "depository",
        "type": "string"
    },
    {
        "name": "credit",
        "baseName": "credit",
        "type": "string"
    },
    {
        "name": "loan",
        "baseName": "loan",
        "type": "string"
    },
    {
        "name": "investment",
        "baseName": "investment",
        "type": "string"
    },
    {
        "name": "other",
        "baseName": "other",
        "type": "string"
    }
];
exports.StandaloneAccountType = StandaloneAccountType;
//# sourceMappingURL=standaloneAccountType.js.map