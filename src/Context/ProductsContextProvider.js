import React from 'react';
// API
import { getProducts } from '../Services/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

const ProductsContext = createContext()

const ProductsContextProvider = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }
        fetchAPI()

    }, [])
    
    

    return (
        <ProductsContext.Provider value={products}>
            {props.children} 
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;