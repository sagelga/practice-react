import { createContext, useReducer } from 'react';
import { cartReducer, initialState } from './CheckoutReducer';

const CheckoutContext = createContext([]);

const CheckoutProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItemToCartHandler = (item) => {
        dispatch({
            type: 'ADD_ITEM_CART',
            item: item,
        });
    };

    const updateItemCartHandler = (item) => {
        dispatch({
            type: 'UPDATE_ITEM_CART',
            item: item,
        });
    };

    const removeItemFromCartHandler = (id) => {
        dispatch({
            type: 'REMOVE_ITEM_CART',
            id: id,
        });
    };

    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addItemToCartHandler,
        updateItem: updateItemCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return (
        <CheckoutContext.Provider value={cartContext}>
            {props.children}
        </CheckoutContext.Provider>
    );
};

export { CheckoutContext, CheckoutProvider };
