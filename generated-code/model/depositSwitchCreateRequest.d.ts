export declare class DepositSwitchCreateRequest {
    'client_id': string;
    'secret': string;
    'target_access_token': string;
    'target_account_id': string;
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
