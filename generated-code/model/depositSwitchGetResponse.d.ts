export declare class DepositSwitchGetResponse {
    'deposit_switch_id'?: string;
    'target_account_id'?: string;
    'target_item_id'?: string;
    'state'?: string;
    'account_has_multiple_allocations'?: boolean | null;
    'is_allocated_remainder'?: boolean | null;
    'percent_allocated'?: boolean | null;
    'amount_allocated'?: boolean;
    'date_created'?: string;
    'date_completed'?: string | null;
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
