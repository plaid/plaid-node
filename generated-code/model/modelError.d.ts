export declare class ModelError {
    'errorType'?: string;
    'errorCode'?: string;
    'errorMessage'?: string;
    'displayMessage'?: string | null;
    'requestId'?: string | null;
    'causes'?: Array<any>;
    'status'?: number | null;
    'documentationUrl'?: string | null;
    'suggestedAction'?: string | null;
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
