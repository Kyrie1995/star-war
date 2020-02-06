import React from "react";

function Pagination({ currentPage, dispatch, itemsPerPage, total }) {
  const restNames = total - currentPage * itemsPerPage;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        {currentPage === 1 ? (
          <li className="page-item disabled">
            <button
              className="page-link"
              aria-label="Previous"
              onClick={() => dispatch({ type: "PREV_PAGE" })}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
        ) : (
          <li className="page-item">
            <button
              onClick={() => dispatch({ type: "PREV_PAGE" })}
              className="page-link"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
        )}
        <li className="page-item disabled">
          <button className="page-link" href="#" aria-disabled="true">
            {currentPage}
          </button>
        </li>
        {restNames >= 0 ? (
          <li className="page-item">
            <button
              onClick={() => dispatch({ type: "NEXT_PAGE" })}
              className="page-link"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        ) : (
          <li className="page-item disabled">
            <button
              onClick={() => dispatch({ type: "NEXT_PAGE" })}
              className="page-link"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
