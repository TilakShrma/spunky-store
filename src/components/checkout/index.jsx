import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../checkout-item';
import StripeCheckoutButton from '../stripe-button';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

import './checkout.scss';

const Checkout = ({ cartItems, cartTotal }) => {
    return (
        <div className='checkout'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)
            }
            <div className='cart-total'>
                <span>TOTAL: ${cartTotal}</span>
            </div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </div>
            <StripeCheckoutButton price={cartTotal}/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(Checkout);