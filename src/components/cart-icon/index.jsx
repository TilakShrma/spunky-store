import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {getTotalCartItems} from '../../redux/cart/cart.utils';

import {ReactComponent as ShoppingIcon} from '../../assets/icons/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = ({toggleCartVisibilty, cartItemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartVisibilty}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'> {cartItemCount} </span>
        </div>
    );
};

const mapStateToProps = ({cart}) => ({
    cartItemCount: getTotalCartItems(cart.cartItems),
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartVisibilty: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);