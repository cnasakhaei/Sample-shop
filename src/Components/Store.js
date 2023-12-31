import React from 'react';
import { useContext } from 'react';

//Components
import Product from './Shared/Product';
//Context
import {ProductsContext} from "../Context/ProductsContextProvider"

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div style={{display: "flex", flexWrap : 'wrap', justifyContent:"space-between"}}>
            {
                products.map(product => <Product key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;