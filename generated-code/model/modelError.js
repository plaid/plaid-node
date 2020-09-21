"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelError {
    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}
ModelError.discriminator = undefined;
ModelError.attributeTypeMap = [
    {
        "name": "error_type",
        "baseName": "error_type",
        "type": "string"
    },
    {
        "name": "error_code",
        "baseName": "error_code",
        "type": "string"
    },
    {
        "name": "error_message",
        "baseName": "error_message",
        "type": "string"
    },
    {
        "name": "display_message",
        "baseName": "display_message",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    },
    {
        "name": "causes",
        "baseName": "causes",
        "type": "Array<any>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "number"
    },
    {
        "name": "documentation_url",
        "baseName": "documentation_url",
        "type": "string"
    },
    {
        "name": "suggested_action",
        "baseName": "suggested_action",
        "type": "string"
    }
];
exports.ModelError = ModelError;
//# sourceMappingURL=modelError.js.map