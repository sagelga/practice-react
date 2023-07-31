import React from 'react';
import classes from './NavigationBar.module.css';
import CheckoutButton from './CheckoutButton/CheckoutButton';

interface INavigationBarProps {
    openModalButton: () => void;
}

const NavigationBar = (props: INavigationBarProps) => {
    return (
        <div className={classes['navbar']}>
            <div className={classes.leftControl}>
                <div className={classes.logo}>
                    <img
                        src='https://img.icons8.com/material-outlined/24/shopping-cart--v1.png'
                        alt='Website icon'
                        height='25px'
                        width='25px'
                    />
                </div>
                <div className={classes.title}>Title</div>
            </div>
            <div>
                <CheckoutButton openModalButton={props.openModalButton} />
            </div>
        </div>
    );
};

export default NavigationBar;
