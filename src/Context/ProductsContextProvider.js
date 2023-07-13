import React from 'react';
// API
import { getProducts } from '../Services/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const ProductsContext = createContext()

 const ProductsContextProvider = ({children}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }
        fetchAPI()

    }, [])
    
    

    return (
        <ProductsContext.Provider value={products}>
            {children} 
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;