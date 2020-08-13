import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectShopCollections} from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview';

import './collections-overview.scss';

const CollectionOverview = ({ collections }) => {
    return (
        <div className='collection-overview'>
            {
            collections.map(({id, ...collectionProps}) => (
                <CollectionPreview key={id} {...collectionProps}/> 
            ))
        }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
