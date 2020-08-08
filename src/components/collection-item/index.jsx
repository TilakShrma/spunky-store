import React from 'react';
import {connect} from 'react-redux';
import {addItemToCart} from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button';

import './collection-item.scss';

const CollectionItem = ({item, addItem}) => {

    const {name, price, imageUrl} = item;

    return (
        <div className='collection-item'>
            <div 
                className='collection-item-img' 
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton 
                className='custom-button' 
                onClick={() => addItem(item)}
                inverted
            >
               <span>  ADD TO CART </span>
            </CustomButton>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
