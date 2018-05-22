import React from "react";
import {Pagination} from 'react-bootstrap/lib/';

const MyPagination = ({bsSize,activePage,pagesCount,handlePagSelect}) => {
    let paginationItems = [];

    for(let currentPage=0; currentPage < pagesCount; currentPage++) {
        paginationItems.push(
            <Pagination.Item
                key={currentPage}
                active={activePage === currentPage}
                onClick={handlePagSelect}
            >
                {currentPage}
            </Pagination.Item>
        )
    }

    return(
        <Pagination bsSize={bsSize}>
            {paginationItems}
        </Pagination>
    );
}

export default MyPagination;
