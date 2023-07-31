import React from 'react';
import classes from './CheckoutItemSummary.module.css';

interface ICheckoutItemSummary {
    totalAmount: number;
    priceCurrency: string;
}

const CheckoutItemSummary = (props: ICheckoutItemSummary) => {
    const totalAmount = props.totalAmount.toFixed(2);

    return (
        <div className={classes.grandTotal}>
            <div className={classes.label}>Total</div>
            <div className={classes.value}>
                {`${props.priceCurrency} ${totalAmount}`}
            </div>
        </div>
    );
};

export default CheckoutItemSummary;
