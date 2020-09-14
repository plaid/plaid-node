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
        "name": "displayMessage",
        "baseName": "display_message",
        "type": "string"
    },
    {
        "name": "httpCode",
        "baseName": "http_code",
        "type": "string"
    },
    {
        "name": "linkUserExperience",
        "baseName": "link_user_experience",
        "type": "string"
    },
    {
        "name": "commonCauses",
        "baseName": "common_causes",
        "type": "string"
    },
    {
        "name": "troubleshootingSteps",
        "baseName": "troubleshooting_steps",
        "type": "string"
    }
];
exports.RecaptchaRequiredError = RecaptchaRequiredError;
//# sourceMappingURL=recaptchaRequiredError.js.map