import React from 'react';
import { connect } from 'react-redux';

import {clearItemFromCart, addItemToCart, removeItem} from '../../redux/cart/cart.actions';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, price, quantity, imageUrl} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="checkout-item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                    <span className='value'> {quantity} </span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-item-btn' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItemToCart(item)),
    removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);