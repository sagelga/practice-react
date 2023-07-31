import { ICheckoutItem } from '../interface/ICheckoutItem';

export interface ICheckoutState {
    items: ICheckoutItem[];
    totalAmount: number;
    addItem: (item: ICheckoutItem) => void;
    removeItem: (item: ICheckoutItem) => void;
}

export const initialState: ICheckoutState = {
    items: [],
    totalAmount: 0,
    addItem: (item: ICheckoutItem) => {},
    removeItem: (item: ICheckoutItem) => {},
};
