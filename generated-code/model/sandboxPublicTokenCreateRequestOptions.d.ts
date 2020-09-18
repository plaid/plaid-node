export declare class SandboxPublicTokenCreateRequestOptions {
    'webhook'?: string;
    'override_username'?: string;
    'override_password'?: string;
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
