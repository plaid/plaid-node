"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JWTHeader {
    static getAttributeTypeMap() {
        return JWTHeader.attributeTypeMap;
    }
}
JWTHeader.discriminator = undefined;
JWTHeader.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    }
];
exports.JWTHeader = JWTHeader;
//# sourceMappingURL=jWTHeader.js.map