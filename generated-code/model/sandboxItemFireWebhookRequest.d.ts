export declare class SandboxItemFireWebhookRequest {
    'clientId': string;
    'secret': string;
    'accessToken': string;
    'webhookCode': SandboxItemFireWebhookRequest.WebhookCodeEnum;
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
