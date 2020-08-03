import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/icons/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = ({toggleCartVisibilty}) => {
    return (
        <div className='cart-icon' onClick={toggleCartVisibilty}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'> 0 </span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartVisibilty: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);