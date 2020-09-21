export declare class ModelError {
    'error_type'?: string;
    'error_code'?: string;
    'error_message'?: string;
    'display_message'?: string | null;
    'request_id'?: string | null;
    'causes'?: Array<any>;
    'status'?: number | null;
    'documentation_url'?: string | null;
    'suggested_action'?: string | null;
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
