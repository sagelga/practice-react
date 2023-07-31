import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

interface IModalProps {
    children: React.ReactNode;
}

const Modal = (props: IModalProps) => {
    const modalRootLocation = document.getElementById('checkout-modal');

    const ModalContent: React.FC<IModalProps> = (props) => {
        return (
            <div className={classes.content}>
                <button className={classes.close}>x</button>
                {props.children}
            </div>
        );
    };

    return (
        <div className={classes.overlay}>
            {modalRootLocation &&
                ReactDOM.createPortal(
                    <ModalContent>{props.children}</ModalContent>,
                    modalRootLocation
                )}
        </div>
    );
};

export default Modal;
