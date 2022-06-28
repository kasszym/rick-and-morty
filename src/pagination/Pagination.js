import React, { Component, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./paginaton.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function Pagination({ characters, handlePageClick, count }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(characters.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(characters.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, characters]);

  return (
    <div className="pagination-container">
      <div className="pagination-navigation">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<RiArrowRightSLine />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={count / itemsPerPage}
          previousLabel={<RiArrowLeftSLine />}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num-next"
          nextLinkClassName="page-num-next"
          activeLinkClassName="active"
        />
      </div>
    </div>
  );
}
