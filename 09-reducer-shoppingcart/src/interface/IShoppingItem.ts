export interface IShoppingItem {
    id: string;
    name: string;
    description?: string;
    stockAmount: number;
    price: number;
    priceCurrency: string;
    img: {
        url: string;
        alt: string;
    };
}
