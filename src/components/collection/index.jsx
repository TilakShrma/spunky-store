import React from 'react';
import {connect} from 'react-redux';

import {selectCollection} from '../../redux/shop/shop.selectors'

// import CollectionItem from '../collection-item';

import './collection.scss';

const CollectionPage = ({collection}) => {
    
    return (
        <div className='collection-page'>
            <h2>collection Page</h2>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state),
})

export default connect(mapStateToProps)(CollectionPage);