"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cause {
    static getAttributeTypeMap() {
        return Cause.attributeTypeMap;
    }
}
Cause.discriminator = undefined;
Cause.attributeTypeMap = [
    {
        "name": "item_id",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "Error"
    }
];
exports.Cause = Cause;
//# sourceMappingURL=cause.js.map