"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkTokenCreateRequest {
    static getAttributeTypeMap() {
        return LinkTokenCreateRequest.attributeTypeMap;
    }
}
LinkTokenCreateRequest.discriminator = undefined;
LinkTokenCreateRequest.attributeTypeMap = [
    {
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "clientName",
        "baseName": "client_name",
        "type": "string"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "countryCodes",
        "baseName": "country_codes",
        "type": "Array<string>"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "LinkTokenCreateRequestUser"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<string>"
    },
    {
        "name": "webhook",
        "baseName": "webhook",
        "type": "string"
    },
    {
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "linkCustomizationName",
        "baseName": "link_customization_name",
        "type": "string"
    },
    {
        "name": "redirectUri",
        "baseName": "redirect_uri",
        "type": "string"
    },
    {
        "name": "androidPackageName",
        "baseName": "android_package_name",
        "type": "string"
    },
    {
        "name": "accountFilters",
        "baseName": "account_filters",
        "type": "LinkTokenCreateRequestAccountFilters"
    },
    {
        "name": "institutionId",
        "baseName": "institution_id",
        "type": "string"
    },
    {
        "name": "paymentInitiation",
        "baseName": "payment_initiation",
        "type": "LinkTokenCreateRequestPaymentInitiation"
    }
];
exports.LinkTokenCreateRequest = LinkTokenCreateRequest;
//# sourceMappingURL=linkTokenCreateRequest.js.map