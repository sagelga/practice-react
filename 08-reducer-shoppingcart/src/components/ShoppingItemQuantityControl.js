import React, { useState } from 'react';
import classes from './ShoppingItemQuantityControl.module.css';


const ShoppingItemQuantityControl = (props) => {
//     Item available for adding depends on current item stock
    const itemMin = props.itemMin || 0;
    const itemMax = props.itemMax || 99;

    const [selectedAmount, setSelectedAmount] = useState(itemMin);

    // If triggered, increase the selected amount by 1
    const increaseButtonClickHandler = () => {
        setSelectedAmount((selectedAmount) => selectedAmount + 1);
    };

    // If triggered, decrease the selected amount by 1
    const decreaseButtonClickHandler = () => {
        setSelectedAmount((selectedAmount) => selectedAmount - 1);
    };

    // TODO: is it possible to update the value in input if user typed in invalid values
    const onInputChangeHandler = (event) => {
        let updatedValue = parseInt(event.target.value);
        // console.log(updatedValue);
        if (updatedValue > itemMax) {
            setSelectedAmount(itemMax);
        } else if (updatedValue < itemMin) {
            setSelectedAmount(itemMin);
        } else {
            setSelectedAmount(updatedValue);
        }
    };

    // When user clicks the Add button on this item, it will add item to CheckoutContext
    // and also refresh item selected
    // TODO: make sure that when user click the button, the value cannot exceed the maximum or lower than the minimum
    const itemSubmitHandler = () => {
        let updatedValue = parseInt(selectedAmount);
        if (updatedValue > itemMax) {
            setSelectedAmount(itemMax);
        }
        if (updatedValue < itemMin) {
            setSelectedAmount(itemMin);
        }

        setSelectedAmount(updatedValue);

        // props.itemSubmit({
        //     selectedAmount: selectedAmount,
        // });
        console.log(selectedAmount);

        //     then reset the value
        setSelectedAmount(itemMin);
    };

    return (
        <>
            <div className={props.className}>
                <button className={classes.quantity}
                        disabled={selectedAmount <= 0}
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

export default ShoppingItemQuantityControl;