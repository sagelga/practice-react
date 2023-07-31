import React from 'react';
import ReactDOM from 'react-dom';
import CheckoutModalContent from './CheckoutModalContent';
import classes from './CheckoutModal.module.css';

interface ICheckoutModalProps {
    onCloseModal: () => void;
}
const modalRootLocation = document.getElementById('checkout-modal');
const modalOverlayRootLocation = document.getElementById(
    'checkout-modal-overlay'
);

const CheckoutModal = (props: ICheckoutModalProps) => {
    return (
        <>
            {modalRootLocation &&
                ReactDOM.createPortal(
                    <div className={classes.modal}>
                        <button
                            className={classes.close}
                            onClick={props.onCloseModal}
                        >
                            &times;
                        </button>
                        <div className={classes.content}>
                            <h1>Checkout</h1>
                            <CheckoutModalContent />
                        </div>
                    </div>,
                    modalRootLocation
                )}
            {modalOverlayRootLocation &&
                ReactDOM.createPortal(
                    <div
                        className={classes.overlay}
                        onClick={props.onCloseModal}
                    ></div>,
                    modalOverlayRootLocation
                )}
        </>
    );
};

export default CheckoutModal;
