import React from 'react';

//functions
import { shorter } from '../Helper/function';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt='Products' style={{ width: "200px" }} />
            <h3>{shorter(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <a>Details</a>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;