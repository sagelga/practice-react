import React, { useState } from 'react';

const ShoppingCartContext = React.createContext({
    items: [{ id: 1, name: 'Test' }],
});

export const ShoppingCartProvider = (props) => {
    const [items, setItems] = useState([]);
    return (
        <ShoppingCartContext.Provider>
            {props.children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartContext;
