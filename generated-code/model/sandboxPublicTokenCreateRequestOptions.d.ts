export declare class SandboxPublicTokenCreateRequestOptions {
    'webhook'?: string;
    'overrideUsername'?: string;
    'overridePassword'?: string;
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
