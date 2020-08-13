import React from 'react';
import {Route} from 'react-router-dom';

import CollectionOverview from './../collections-overview';
import CollectionPage from '../collection';

// Since shop is wrapped with <Route /> 
// Route passes three props namely: history, match, location
const Shop = ({ match }) => {
    return (
        <div className='shop'>
            <Route component={CollectionOverview} path={`${match.path}`} exact/>
            <Route component={CollectionPage} path={`${match.path}/:categoryId`} exact/>
        </div>
    ) 
};

export default Shop;