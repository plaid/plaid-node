"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserCustomPassword {
    static getAttributeTypeMap() {
        return UserCustomPassword.attributeTypeMap;
    }
}
UserCustomPassword.discriminator = undefined;
UserCustomPassword.attributeTypeMap = [
    {
        "name": "version",
        "baseName": "version",
        "type": "string"
    },
    {
        "name": "seed",
        "baseName": "seed",
        "type": "string"
    },
    {
        "name": "override_accounts",
        "baseName": "override_accounts",
        "type": "Array<OverrideAccounts>"
    },
    {
        "name": "mfa",
        "baseName": "mfa",
        "type": "MFA"
    },
    {
        "name": "recaptcha",
        "baseName": "recaptcha",
        "type": "string"
    },
    {
        "name": "force_error",
        "baseName": "force_error",
        "type": "string"
    }
];
exports.UserCustomPassword = UserCustomPassword;
//# sourceMappingURL=userCustomPassword.js.map