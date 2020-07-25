import React from 'react';
import './collection-item.scss';

const CollectionItem = ({name, imageUrl, price}) => {
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
        </div>
    )
};

export default CollectionItem;
