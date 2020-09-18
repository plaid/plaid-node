"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Meta {
    static getAttributeTypeMap() {
        return Meta.attributeTypeMap;
    }
}
Meta.discriminator = undefined;
Meta.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "official_name",
        "baseName": "official_name",
        "type": "string"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    }
];
exports.Meta = Meta;
//# sourceMappingURL=meta.js.map