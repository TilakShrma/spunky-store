import React, {Component} from 'react';
import CollectionPreview from './../collection-preview';

import SHOP_DATA from './shop.constants';

class Shop extends Component {
    constructor() {
        super();

        // going forward collections can be fetched from backend
        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop'>
            {
                collections.map(({id, ...collectionProps}) => (
                    <CollectionPreview key={id} {...collectionProps}/> 
                ))
            }
            </div>
        ) 
    }
}

export default Shop;