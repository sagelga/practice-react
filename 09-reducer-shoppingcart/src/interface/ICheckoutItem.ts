export interface ICheckoutItem {
    id: string;
    name?: string;
    description?: string;
    stockAmount?: number;
    price?: number;
    priceCurrency?: string;
    img?: {
        url?: string;
        alt?: string;
    };
    selectedAmount: number;
}
