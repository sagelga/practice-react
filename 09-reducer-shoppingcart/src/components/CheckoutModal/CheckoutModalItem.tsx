import { ICheckoutItem } from '../../interface/ICheckoutItem';
import CheckoutModalControl from './CheckoutModalControl';
import classes from './CheckoutModalItem.module.css';

interface ICheckoutModalProps {
    item: ICheckoutItem;
    onRemove: (item: ICheckoutItem) => void;
    onAdd: (item: ICheckoutItem) => void;
}

const truncateDescription = (description: string | undefined) => {
    if (typeof description === 'string' && description.length > 100) {
        return `${description.substring(0, 100)}...`;
    }
    return description;
};

const CheckoutModalItem = (props: ICheckoutModalProps) => {
    const price =
        typeof props.item.price === 'number' && props.item.price > 0
            ? props.item.price
            : 1;
    const subtotal = (price * props.item.selectedAmount).toFixed(2);

    const onRemoveHandler = () => {
        props.onRemove(props.item);
    };

    const onAddHandler = () => {
        props.onAdd(props.item);
    };

    return (
        <div className={classes.container}>
            <div className={classes.info}>
                <h3>{props.item.name}</h3>
                <p>{truncateDescription(props.item.description)}</p>
                <p>{`${props.item.priceCurrency} ${props.item.price}`}</p>
            </div>
            <div className={classes['selected-amount']}>
                <p>{props.item.selectedAmount}</p>
            </div>
            <div className={classes['checkout-control']}>
                <CheckoutModalControl
                    onRemove={onRemoveHandler}
                    onAdd={onAddHandler}
                />
            </div>
            <div className={classes.subtotal}>
                <p>{`${props.item.priceCurrency} ${subtotal}`}</p>
            </div>
        </div>
    );
};

export default CheckoutModalItem;
