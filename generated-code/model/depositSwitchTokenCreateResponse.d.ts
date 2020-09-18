export declare class DepositSwitchTokenCreateResponse {
    'deposit_switch_token'?: string;
    'deposit_switch_token_expiration_time'?: string;
    'request_id'?: string;
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
