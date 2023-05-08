import React, { DOTS, useMemo} from "react";

const pageRange = (start, end) => {
    let length = end - start + 1;
    /*
        Create an array of certain length and set the elements within it from
      start value to end value.
    */
    return Array.from({ length }, (_, idx) => idx + start);
  };

export const usePaginate = ({ dataPerPage, totalData, currentPage, siblingCount = 1 }) => {
    const paginateRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalData / dataPerPage);

        const totalPageNumbers = siblingCount + 5;

        // Case 1: total pages is less than what we want to show
        if (totalPageNumbers >= totalPageCount) {
            return pageRange(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
        currentPage + siblingCount,
        totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        // Case 2: no left dots to show
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = pageRange(1, leftItemCount);

            return [...leftRange, DOTS, lastPageIndex];
        }

        // Case 3: no right dots to show
        if (shouldShowLeftDots && !shouldShowRightDots) {
        
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = pageRange(
            totalPageCount - rightItemCount + 1,
            totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        // Case 4: both dots to show
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = pageRange(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [dataPerPage, totalData, currentPage, siblingCount]);

    return paginateRange;
  
};