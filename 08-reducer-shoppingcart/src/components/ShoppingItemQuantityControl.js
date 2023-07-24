import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './ShoppingItemQuantityControl.module.css';

const ShoppingItemQuantityControl = ({ itemMin, itemMax }) => {
    const [selectedAmount, setSelectedAmount] = useState(itemMin);

    /* If triggered, increase the selected amount by 1 */
    const increaseButtonClickHandler = () => {
        if (selectedAmount < itemMax) {
            setSelectedAmount((selectedAmount) => selectedAmount + 1);
        }
    };

    /* If triggered, decrease the selected amount by 1 */
    const decreaseButtonClickHandler = () => {
        if (selectedAmount > itemMin) {
            setSelectedAmount((selectedAmount) => selectedAmount - 1);
        }
    };

    const onInputChangeHandler = (event) => {
        let updatedValue = parseInt(event.target.value);
        updatedValue = isNaN(updatedValue) ? itemMin : Math.max(itemMin, Math.min(itemMax, updatedValue));
        setSelectedAmount(updatedValue);
    };

    /* When user clicks the Add button on this item, it will add item to CheckoutContext
    * and also refresh item selected */
    const itemSubmitHandler = () => {
        console.log(selectedAmount);

        // then reset the value
        setSelectedAmount(itemMin);
    };

    return (
        <>
            <div className={classes['item-controls']}>
                <button className={classes.quantity}
                        disabled={selectedAmount <= itemMin}
                        onClick={decreaseButtonClickHandler}>-
                </button>
                <input type='number'
                       defaultValue={itemMin}
                       value={selectedAmount}
                       onChange={onInputChangeHandler}
                       min={itemMin}
                       max={itemMax}
                       className={classes.quantity} />
                <button className={classes.quantity}
                        disabled={selectedAmount >= itemMax}
                        onClick={increaseButtonClickHandler}>+
                </button>
            </div>
            <div>
                <button onClick={itemSubmitHandler}>Add</button>
            </div>
        </>
    );
};

ShoppingItemQuantityControl.defaultProps = {
    itemMin: 0,
    itemMax: 99,
};

ShoppingItemQuantityControl.propTypes = {
    itemMin: PropTypes.number,
    itemMax: PropTypes.number,
};

export default ShoppingItemQuantityControl;