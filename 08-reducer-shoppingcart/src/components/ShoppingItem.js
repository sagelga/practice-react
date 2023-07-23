import React from 'react';
import classes from './ShoppingItem.module.css';
import ShoppingItemQuantityControl from './ShoppingItemQuantityControl';

const ShoppingItem = (props) => {

    const { id, name, description, price, priceCurrency, amount, img } = props.productItem;

    return <div className={classes['cart-item']} key={id}>
        <div>
            <img src={img.url} alt={img.alt} height='150px' width='150px' />
        </div>
        <div>
            <p className={classes['item-title']}>{name}</p>
            <p className={classes['item-description']}>{description}</p>
        </div>
        <div>
            <p className={classes['item-price']}>
                {priceCurrency} {price}
            </p>
        </div>
        <div>
            <ShoppingItemQuantityControl className={classes['item-controls']} itemMin={0} itemMax={amount} />
        </div>
    </div>;
};

export default ShoppingItem;