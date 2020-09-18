"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Warning {
    static getAttributeTypeMap() {
        return Warning.attributeTypeMap;
    }
}
Warning.discriminator = undefined;
Warning.attributeTypeMap = [
    {
        "name": "warning_type",
        "baseName": "warning_type",
        "type": "string"
    },
    {
        "name": "warning_code",
        "baseName": "warning_code",
        "type": "string"
    },
    {
        "name": "cause",
        "baseName": "cause",
        "type": "Cause"
    }
];
exports.Warning = Warning;
//# sourceMappingURL=warning.js.map