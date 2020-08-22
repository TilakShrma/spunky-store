import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview';

import './collections-overview.scss';

const CollectionOverview = ({ previewCollections }) => {
    console.log(previewCollections);
    return (
        <div className='collection-overview'>
            {
            previewCollections.map(({id, ...collectionProps}) => (
                <CollectionPreview key={id} {...collectionProps}/> 
            ))
        }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    previewCollections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
