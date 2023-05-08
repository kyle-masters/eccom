import React from 'react';
import ProductCarousel from '../components/ProductCarousel';

import products from '../products';

const ProductSingle = () => {

    return (
        <ProductCarousel images={products} />
    );
}

export default ProductSingle;