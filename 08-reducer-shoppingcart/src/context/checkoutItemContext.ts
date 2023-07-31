import React from 'react';
import { IShoppingItem } from '../interface/IShoppingItem';
import { initialState } from '../state/checkoutContextState';

const CheckoutItemContext = React.createContext(initialState);

export default CheckoutItemContext;
