import React from 'react';

const CheckoutModalContent = () => {
    return (
        <>
            <h1>Checkout</h1>
            <div className='cart-items'>
                <div className='item'>
                    <div>
                        <h3>Item Title 1</h3>
                        <p>Description of Item 1</p>
                        <p>Price per Item: $10.00</p>
                    </div>
                    <div>
                        <button className='remove-item'>Remove</button>
                        <button className='add-item'>Add</button>
                        <textarea
                            className='item-amount'
                            rows={1}
                            cols={4}
                            placeholder='Amount'
                        ></textarea>
                    </div>
                </div>
                <div className='item'>
                    <div>
                        <h3>Item Title 2</h3>
                        <p>Description of Item 2</p>
                        <p>Price per Item: $15.00</p>
                    </div>
                    <div>
                        <button className='remove-item'>Remove</button>
                        <button className='add-item'>Add</button>
                        <textarea
                            className='item-amount'
                            rows={1}
                            cols={4}
                            placeholder='Amount'
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className='grand-total'>
                <p>
                    Total: $<span id='total-amount'>0.00</span>
                </p>
            </div>

            <button className='checkout-btn'>Checkout</button>
        </>
    );
};

export default CheckoutModalContent;
