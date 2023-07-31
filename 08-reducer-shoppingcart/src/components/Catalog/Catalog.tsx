import React from 'react';
import classes from './Catalog.module.css';
import ShoppingItem from './ShoppingItem';
import { IShoppingItem } from '../../interface/IShoppingItem';

interface ICatalogProps {
    inventoryData: IShoppingItem[];
}

const Catalog = (props: ICatalogProps) => {
    return (
        <div className={classes['shopping-catalog']}>
            {props.inventoryData.map((item: IShoppingItem) => {
                return (
                    <div className={classes['item-card']} key={item.id}>
                        <ShoppingItem productItem={item} />
                    </div>
                );
            })}
        </div>
    );
};

export default Catalog;
