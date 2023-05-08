import React from 'react';
import {
    ProductCard,
    CardImage,
    CardTitle,
    CardPrice
} from '../style'
import { NavLink } from 'react-router-dom';

const Product = ({product}) => {
    return (
        <ProductCard>
            <NavLink to={`/product/${product._id}`} >
                <CardImage src={product.image} />
            </NavLink>

            <CardTitle>{product.name}</CardTitle>

            <CardPrice>${product.price}</CardPrice>

        </ProductCard>
    );
}

export default Product;