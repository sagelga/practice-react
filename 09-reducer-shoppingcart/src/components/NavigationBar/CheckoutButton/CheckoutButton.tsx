import React, { useContext } from 'react';
import classes from './CheckoutButton.module.css';
import CheckoutItemContext from '../../../context/checkoutItemContext';
import { ICheckoutItem } from '../../../interface/ICheckoutItem';

interface ICheckoutButtonProps {
    openModalButton: () => void;
}

const CheckoutButton = (props: ICheckoutButtonProps) => {
    const cartCtx = useContext(CheckoutItemContext);
    const totalItem = cartCtx.items.reduce((curNumber, item: ICheckoutItem) => {
        return curNumber + item.selectedAmount;
    }, 0);

    return (
        <button
            className={classes['cart-button']}
            onClick={props.openModalButton}
        >
            <span className={classes['cart-icon']}>🛒</span>
            <span className={classes['cart-text']}>Cart</span>
            <span className={classes['cart-badge']}>{totalItem}</span>
        </button>
    );
};

export default CheckoutButton;
