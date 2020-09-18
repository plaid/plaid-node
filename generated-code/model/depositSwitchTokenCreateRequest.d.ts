export declare class DepositSwitchTokenCreateRequest {
    'client_id': string;
    'secret': string;
    'deposit_switch_id': string;
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
