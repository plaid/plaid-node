export declare class SandboxItemSetVerificationStatusRequest {
    'client_id': string;
    'secret': string;
    'access_token': string;
    'account_id': string;
    'verification_status': string;
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
