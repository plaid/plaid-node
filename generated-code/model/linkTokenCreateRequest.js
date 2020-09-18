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
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "client_name",
        "baseName": "client_name",
        "type": "string"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "country_codes",
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
        "name": "access_token",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "link_customization_name",
        "baseName": "link_customization_name",
        "type": "string"
    },
    {
        "name": "redirect_uri",
        "baseName": "redirect_uri",
        "type": "string"
    },
    {
        "name": "android_package_name",
        "baseName": "android_package_name",
        "type": "string"
    },
    {
        "name": "account_filters",
        "baseName": "account_filters",
        "type": "LinkTokenCreateRequestAccountFilters"
    },
    {
        "name": "institution_id",
        "baseName": "institution_id",
        "type": "string"
    },
    {
        "name": "payment_initiation",
        "baseName": "payment_initiation",
        "type": "LinkTokenCreateRequestPaymentInitiation"
    }
];
exports.LinkTokenCreateRequest = LinkTokenCreateRequest;
//# sourceMappingURL=linkTokenCreateRequest.js.map