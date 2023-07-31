import React, { useContext } from 'react';
import classes from './ShoppingItem.module.css';
import ShoppingItemControl from './ShoppingItemControl';
import ShoppingItemDisplay from './ShoppingItemDisplay';
import CheckoutItemContext from '../../context/checkoutItemContext';
import { IShoppingItem } from '../../interface/IShoppingItem';
import { ICheckoutItem } from '../../interface/ICheckoutItem';

interface IShoppingItemProps {
    productItem: IShoppingItem;
}

const ShoppingItem = (props: IShoppingItemProps) => {
    const {
        id,
        name,
        description,
        stockAmount,
        price,
        priceCurrency,
        img: { url, alt },
    } = props.productItem;
    const cartCtx = useContext(CheckoutItemContext);

    const addToCartHandler = (amount: number) => {
        const selectedItem: ICheckoutItem = {
            id: id,
            name: name,
            description: description,
            stockAmount: stockAmount,
            price: price,
            priceCurrency: priceCurrency,
            img: {
                url: url,
                alt: alt,
            },
            selectedAmount: amount,
        };
        cartCtx.addItem(selectedItem);
    };

    return (
        <div
            className={`${classes['cart-item']} ${classes['shopping-item-card']}`}
            key={id}
        >
            <ShoppingItemDisplay productItem={props.productItem} />
            <ShoppingItemControl
                itemMin={1}
                itemMax={stockAmount}
                itemSubmit={addToCartHandler}
                className={classes['shopping-item-control']} // Add a className prop to ShoppingItemControl
            />
        </div>
    );
};

export default ShoppingItem;
