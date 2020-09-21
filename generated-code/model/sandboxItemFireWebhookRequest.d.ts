export declare class SandboxItemFireWebhookRequest {
    'client_id': string;
    'secret': string;
    'access_token': string;
    'webhook_code': SandboxItemFireWebhookRequest.WebhookCodeEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace SandboxItemFireWebhookRequest {
    enum WebhookCodeEnum {
        DEFAULTUPDATE
    }
}
