import React from 'react';
import { initialState } from '../state/checkoutContextState';

const CheckoutItemContext = React.createContext(initialState);

export default CheckoutItemContext;
