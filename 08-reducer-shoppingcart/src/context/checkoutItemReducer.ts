import { ICheckoutItem } from '../interface/ICheckoutItem';
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

export const checkoutItemReducer = (state: IState, action: IAction) => {
    const targetItem = retrieveInformation(
        action.payload.id,
        action.payload.selectedAmount
    );

    let updatedItems: ICheckoutItem[];

    // Skip everything if the selectedAmount is somehow not a number
    if (isNaN(action.payload.selectedAmount)) {
        return state;
    }

    switch (action.type) {
        case ACTIONS.ADD_CART:
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            console.log(existingItemIndex);

            // If there's a match in the array, find the target and update the selectedAmount
            if (existingItemIndex !== -1) {
                updatedItems = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            selectedAmount:
                                item.selectedAmount +
                                action.payload.selectedAmount,
                        };
                    }
                    return item;
                });
            } else {
                updatedItems = [...state.items, targetItem];
            }

            const oldSelectedAmount =
                existingItemIndex !== -1
                    ? state.items[existingItemIndex].selectedAmount
                    : 0;
            const newSelectedAmount =
                oldSelectedAmount + action.payload.selectedAmount;
            const itemPrice =
                typeof targetItem.price === 'number' && targetItem.price > 0
                    ? targetItem.price
                    : 0;

            // Calculates totalAmount based on how many items are added during the process
            const updatedTotalAmount =
                state.totalAmount +
                (newSelectedAmount - oldSelectedAmount) * itemPrice;

            console.log(updatedItems);

            return { items: updatedItems, totalAmount: updatedTotalAmount };

        case ACTIONS.DELETE_CART:
            const filteredItems = state.items.filter(
                (item) => item.id !== action.payload.id
            );

            const updatedTotalAmountAfterDeletion =
                state.totalAmount -
                (typeof targetItem.price === 'number' && targetItem.price > 0
                    ? targetItem.price
                    : 0) *
                    targetItem.selectedAmount;

            return {
                items: filteredItems,
                totalAmount: updatedTotalAmountAfterDeletion,
            };
        default:
            return state;
    }
};
