import React from 'react';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem }) => {
    const {name, price, quantity, imageUrl} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="checkout-item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-item-btn'>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;