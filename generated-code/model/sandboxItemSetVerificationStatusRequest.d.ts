export declare class SandboxItemSetVerificationStatusRequest {
    'clientId': string;
    'secret': string;
    'accessToken': string;
    'accountId': string;
    'verificationStatus': string;
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
