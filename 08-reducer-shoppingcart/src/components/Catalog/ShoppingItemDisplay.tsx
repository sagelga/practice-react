import React from 'react';
import classes from './ShoppingItemDisplay.module.css';
import { IShoppingItem } from '../../interface/IShoppingItem';

interface ISShoppingItemDisplayProps {
    productItem: IShoppingItem;
}

const ShoppingItemDisplay = (props: ISShoppingItemDisplayProps) => {
    const { name, description, price, priceCurrency, img } = props.productItem;

    return (
        <div>
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
        </div>
    );
};

export default ShoppingItemDisplay;
