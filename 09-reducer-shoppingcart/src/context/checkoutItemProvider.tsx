import { useReducer } from 'react';
import CheckoutItemContext from './checkoutItemContext';
import { checkoutItemReducer } from './checkoutItemReducer';
import { ACTIONS } from './checkoutItemReducer';
import { ICheckoutItem } from '../interface/ICheckoutItem';
import { initialState } from '../state/checkoutContextState';

const CheckoutItemProvider = (props: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(checkoutItemReducer, initialState);

    const addToCartHandler = (item: ICheckoutItem) => {
        dispatch({
            type: ACTIONS.ADD_CART,
            payload: item,
        });

        console.log(state.items);
    };

    const removeItemFromCartHandler = (item: ICheckoutItem) => {
        dispatch({
            type: ACTIONS.DELETE_CART,
            payload: item,
        });

        console.log(state.items);
    };

    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CheckoutItemContext.Provider value={cartContext}>
            {props.children}
        </CheckoutItemContext.Provider>
    );
};

export default CheckoutItemProvider;
