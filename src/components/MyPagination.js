import React from "react";
import {Pagination} from 'react-bootstrap/lib/';
import {Col} from 'react-bootstrap/lib/';

const MyPagination = ({bsSize,activePage,pagesCount,handlePagSelect}) => {
    let paginationItems = [];

    if(activePage === pagesCount) {
        return false;
    }

    for(let currentPage=1; currentPage <= pagesCount; currentPage++) {
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
        <Col sm={10} smOffset={1}>
            <Pagination bsSize={bsSize}>
                {paginationItems}
            </Pagination>
        </Col>
    );
}

export default MyPagination;
