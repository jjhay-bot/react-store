import { Pagination } from 'react-bootstrap';
import React, { useState } from 'react'
import DUMMY_DATA from "../../pages/productpage/database";

function PaginatedItems(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [post, setPost] = useState(DUMMY_DATA);
  
  function goToNextPage() {
    if (currentPage >= 15) {
      setCurrentPage(14);
    }
    setCurrentPage(currentCount => currentCount + 1);
  }

  function goToPreviousPage() {
    if (currentPage <= 1) {
      setCurrentPage(2);
    }
    setCurrentPage(currentCount => currentCount - 1);
  }



  return (
    <>
      <PaginatedItems products={DUMMY_DATA} />
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={goToPreviousPage}>Previous</button>
        </li>
        <li className="page-item active" aria-current="page">
          <button className="page-link" href="#">{currentPage}</button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={goToNextPage}>Next</button>
        </li>
      </ul>
    </>
  );
}

export default PaginatedItems;
