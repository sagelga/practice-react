import React, { useState } from 'react';
import classes from './ShoppingItemControl.module.css';

interface ShoppingItemControlProps {
    itemMin: number;
    itemMax: number;
    itemSubmit: (value: number) => void;
    className?: string;
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

    const validateAndSubmitSelectedAmount = (amount: number | string) => {
        if (typeof amount === 'string') {
            amount = parseInt(amount);
        }

        if (isNaN(amount)) {
            setSelectedAmount(itemMin);
        } else if (amount >= itemMax) {
            setSelectedAmount(itemMax);
        } else if (amount < itemMin) {
            setSelectedAmount(itemMin);
        } else {
            setSelectedAmount(amount);
        }
    };

    const onInputChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        validateAndSubmitSelectedAmount(event.target.value);
    };

    // When user clicks the Add button on this item, it will add item to CheckoutContext
    // and also refresh item selected
    // TODO: make sure that when user click the button, the value cannot exceed the maximum or lower than the minimum
    const itemSubmitHandler = () => {
        props.itemSubmit(selectedAmount);

        // then reset the value to itemMin
        setSelectedAmount(itemMin);
    };

    return (
        <div className={props.className}>
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
                    disabled={selectedAmount >= itemMax}
                >
                    +
                </button>
            </div>
            <div>
                <button
                    onClick={itemSubmitHandler}
                    disabled={
                        selectedAmount >= itemMax || selectedAmount < itemMin
                    }
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default ShoppingItemControl;
