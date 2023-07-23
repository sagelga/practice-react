import ShoppingItem from './ShoppingItem';
import classes from './ShoppingItemList.module.css';

const ShoppingItemList = (props) => {
    return (
        <div className={classes['shopping-catalog']}>

            {props.inventoryData.map((item) => (
                <div className={classes['item-card']}>
                    <ShoppingItem key={item.id} productItem={item} />
                </div>
            ))}
        </div>
    );
};
export default ShoppingItemList;