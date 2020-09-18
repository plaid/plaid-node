"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Email {
    static getAttributeTypeMap() {
        return Email.attributeTypeMap;
    }
}
Email.discriminator = undefined;
Email.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "string"
    },
    {
        "name": "primary",
        "baseName": "primary",
        "type": "boolean"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.Email = Email;
//# sourceMappingURL=email.js.map