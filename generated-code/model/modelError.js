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
        "name": "errorType",
        "baseName": "error_type",
        "type": "string"
    },
    {
        "name": "errorCode",
        "baseName": "error_code",
        "type": "string"
    },
    {
        "name": "errorMessage",
        "baseName": "error_message",
        "type": "string"
    },
    {
        "name": "displayMessage",
        "baseName": "display_message",
        "type": "string"
    },
    {
        "name": "requestId",
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
        "name": "documentationUrl",
        "baseName": "documentation_url",
        "type": "string"
    },
    {
        "name": "suggestedAction",
        "baseName": "suggested_action",
        "type": "string"
    }
];
exports.ModelError = ModelError;
//# sourceMappingURL=modelError.js.map