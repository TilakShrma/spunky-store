import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectShopCollection} from '../../redux/shop/shop.selectors';

import CollectionPreview from './../collection-preview';


const Shop = ({ collections }) => {
    return (
        <div className='shop'>
        {
            collections.map(({id, ...collectionProps}) => (
                <CollectionPreview key={id} {...collectionProps}/> 
            ))
        }
        </div>
    ) 
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection,
});

export default connect(mapStateToProps)(Shop);