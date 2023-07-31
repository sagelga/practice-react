import React from 'react';
import ReactDOM from 'react-dom';
import CheckoutModalContent from './CheckoutModalContent';
import classes from '../UI/Modal.module.css';

interface ICheckoutModalProps {
    onCloseModal: () => void;
}
const modalRootLocation = document.getElementById('checkout-modal');

const CheckoutModal = (props: ICheckoutModalProps) => {
    return (
        <>
            {modalRootLocation &&
                ReactDOM.createPortal(
                    <div
                        className={classes.overlay}
                        onClick={props.onCloseModal}
                    ></div>,
                    modalRootLocation
                )}
            {modalRootLocation &&
                ReactDOM.createPortal(
                    <section className={classes.content}>
                        <button
                            className={classes.close}
                            onClick={props.onCloseModal}
                        >
                            &times;
                        </button>
                        <CheckoutModalContent />
                    </section>,
                    modalRootLocation
                )}
        </>
    );
};

export default CheckoutModal;
