import React from 'react';
import classes from './CheckoutModalControl.module.css';

interface ICheckoutModalControlProps {
    onRemove: () => void;
    onAdd: () => void;
}
const CheckoutModalControl = (props: ICheckoutModalControlProps) => {
    return (
        <div>
            <button className={classes.checkout} onClick={props.onRemove}>
                -
            </button>
            <button className={classes.checkout} onClick={props.onAdd}>
                +
            </button>
        </div>
    );
};

export default CheckoutModalControl;
