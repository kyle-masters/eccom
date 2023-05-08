import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import Paginate from '../components/Paginate';
import { 
    ProductListWrap
} from '../style';

import products from '../products';

const ProductList = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(24); 

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = products.slice(indexOfFirstData, indexOfLastData);

    // Change page
    const doPaginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <>
            <ProductListWrap>
                {currentData.map((product) => (
                    <Product product={product}/>
                ))}
            </ProductListWrap>
            <Paginate onPageChange={page => setCurrentPage(page)} dataPerPage={dataPerPage} totalData={products.length} currentPage={currentPage}/>
        </>
    );
}

export default ProductList;