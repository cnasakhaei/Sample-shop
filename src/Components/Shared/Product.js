import React from 'react';
import { Link } from 'react-router-dom';

//functions
import { shorter } from '../../Helper/function';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt='Products' style={{ width: "200px" }} />
            <h3>{shorter(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to = {`/products/${productData.id}`}>Detail</Link>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;