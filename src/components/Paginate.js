import React, { DOTS } from "react";
import { usePaginate } from "./usePaginate";
import { 
    PageLeft, 
    PageLeftArrow, 
    PageRight,
    PageRightArrow,
    PageDots, 
    PageNumItem, 
    PageNumWrapper } from "../style";

const Paginate = ({ onPageChange, dataPerPage, totalData, currentPage, siblingCount = 1 }) => {

    const paginateRange = usePaginate({
        dataPerPage, totalData, currentPage, siblingCount
    })

    if (currentPage === 0 || paginateRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginateRange[paginateRange.length - 1];

    return (
        <PageNumWrapper>
            <PageLeft hidden={currentPage === 1}>
                <PageLeftArrow onClick={onPrevious} hidden={currentPage === 1}/>
            </PageLeft>

            {paginateRange.map(pageNumber => {

                if (pageNumber === '...') {
                    return <PageDots>&#8230;</PageDots>
                }

                return (
                    <PageNumItem 
                    selected={pageNumber === currentPage}
                    onClick={() => onPageChange(pageNumber)}>
                        {pageNumber}
                    </PageNumItem>
                )
            })}

            <PageRight disabled={currentPage === lastPage}>
                <PageRightArrow onClick={onNext}/>
            </PageRight>
        </PageNumWrapper>
    );
}

export default Paginate;