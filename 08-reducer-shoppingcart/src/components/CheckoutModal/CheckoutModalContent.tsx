import React, { useContext } from 'react';
import CheckoutItemContext from '../../context/checkoutItemContext';
import CheckoutModalItem from './CheckoutModalItem';
import CheckoutItemSummary from './CheckoutItemSummary';
import { ICheckoutItem } from '../../interface/ICheckoutItem';
import classes from './CheckoutModalContent.module.css';

const CheckoutModalContent = () => {
    const cartCtx = useContext(CheckoutItemContext);

    const onRemoveHandler = (item: ICheckoutItem) => {
        // const selectedItem: ICheckoutItem = {
        //     id: id,
        //     name: name,
        //     description: description,
        //     stockAmount: stockAmount,
        //     price: price,
        //     priceCurrency: priceCurrency,
        //     img: {
        //         url: url,
        //         alt: alt,
        //     },
        //     selectedAmount: amount,
        // };
        cartCtx.removeItem(item);
    };
    const onAddHandler = (item: ICheckoutItem) => {
        console.log('onAddHandler');
        const selectedItem: ICheckoutItem = {
            id: item.id,
            name: item.name,
            description: item.description,
            stockAmount: item.stockAmount,
            price: item.price,
            priceCurrency: item.priceCurrency,
            selectedAmount: 1,
        };
        cartCtx.addItem(selectedItem);
    };

    return (
        <>
            <div className={classes['cart-items']}>
                {cartCtx.items.map((item: ICheckoutItem) => {
                    return (
                        <div className='item'>
                            <CheckoutModalItem
                                key={item.id}
                                item={item}
                                onRemove={onRemoveHandler}
                                onAdd={onAddHandler}
                            />
                        </div>
                    );
                })}
            </div>
            <CheckoutItemSummary
                totalAmount={cartCtx.totalAmount}
                priceCurrency={'THB'}
            />

            <button>Checkout</button>
        </>
    );
};

export default CheckoutModalContent;
