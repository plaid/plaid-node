"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RecaptchaRequiredError {
    static getAttributeTypeMap() {
        return RecaptchaRequiredError.attributeTypeMap;
    }
}
RecaptchaRequiredError.discriminator = undefined;
RecaptchaRequiredError.attributeTypeMap = [
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
        "name": "display_message",
        "baseName": "display_message",
        "type": "string"
    },
    {
        "name": "http_code",
        "baseName": "http_code",
        "type": "string"
    },
    {
        "name": "link_user_experience",
        "baseName": "link_user_experience",
        "type": "string"
    },
    {
        "name": "common_causes",
        "baseName": "common_causes",
        "type": "string"
    },
    {
        "name": "troubleshooting_steps",
        "baseName": "troubleshooting_steps",
        "type": "string"
    }
];
exports.RecaptchaRequiredError = RecaptchaRequiredError;
//# sourceMappingURL=recaptchaRequiredError.js.map