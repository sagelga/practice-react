import { ICheckoutItem } from '../interface/ICheckoutItem';
import { IShoppingItem } from '../interface/IShoppingItem';
import { DUMMY_INVENTORY } from '../data/dummy-data';

interface IAction {
    type: string;
    payload: ICheckoutItem;
}

interface IState {
    items: ICheckoutItem[];
    totalAmount: number;
}

const initialState = {
    items: [],
    totalAmount: 0,
    addItem: (item: ICheckoutItem) => {},
    removeItem: (item: ICheckoutItem) => {},
};

const invalidSearch: ICheckoutItem = {
    id: '',
    name: 'Invalid Search',
    description: 'Invalid Search',
    stockAmount: 0,
    price: 0,
    priceCurrency: '',
    img: {
        url: '',
        alt: '',
    },
    selectedAmount: -1,
};

export const ACTIONS = {
    ADD_CART: 'ADD_CART',
    DELETE_CART: 'DELETE_CART',
};

export const checkoutItemReducer = (state: IState, action: IAction) => {
    const retrieveInformation = (
        id: string,
        selectedAmount: number
    ): ICheckoutItem => {
        let resultValue =
            DUMMY_INVENTORY.find((item) => item.id === id) || invalidSearch;

        return {
            ...resultValue,
            selectedAmount: selectedAmount,
        };
    };

    switch (action.type) {
        case ACTIONS.ADD_CART:
            const targetItem = retrieveInformation(
                action.payload.id,
                action.payload.selectedAmount
            );
            const updatedItems = state.items.concat(targetItem);
            const updatedTotalAmount =
                state.totalAmount +
                (typeof targetItem.price === 'number' && targetItem.price > 0
                    ? targetItem.price
                    : 0) *
                    action.payload.selectedAmount;

            return { items: updatedItems, totalAmount: updatedTotalAmount };

        case ACTIONS.DELETE_CART:
            return initialState;
        default:
            return initialState;
    }
};
