import React, { useState } from 'react';
import classes from './ShoppingItemControl.module.css';

interface ShoppingItemControlProps {
    itemMin: number;
    itemMax: number;
    itemSubmit: (value: number) => void;
}

const ShoppingItemControl = (props: ShoppingItemControlProps) => {
    const itemMin: number = props.itemMin || 1;
    const itemMax: number = props.itemMax || 99;

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
    const onInputChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
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
        // let updatedValue = parseInt(selectedAmount);
        let updatedValue = selectedAmount;

        if (updatedValue > itemMax) {
            setSelectedAmount(itemMax);
        } else if (updatedValue < itemMin) {
            setSelectedAmount(itemMin);
        } else {
            // If updatedValue is in acceptable range
            setSelectedAmount(updatedValue);
        }

        props.itemSubmit(selectedAmount);

        // then reset the value to itemMin
        setSelectedAmount(itemMin);
    };

    return (
        <>
            <div>
                <button
                    className={classes.quantity}
                    disabled={selectedAmount <= itemMin}
                    onClick={decreaseButtonClickHandler}
                >
                    -
                </button>
                <input
                    type='number'
                    value={selectedAmount}
                    onChange={onInputChangeHandler}
                    min={itemMin}
                    max={itemMax}
                    className={classes.quantity}
                />
                <button
                    className={classes.quantity}
                    onClick={increaseButtonClickHandler}
                >
                    +
                </button>
            </div>
            <div>
                <button
                    onClick={itemSubmitHandler}
                    disabled={
                        selectedAmount > itemMax || selectedAmount < itemMin
                    }
                >
                    Add
                </button>
            </div>
        </>
    );
};

export default ShoppingItemControl;
