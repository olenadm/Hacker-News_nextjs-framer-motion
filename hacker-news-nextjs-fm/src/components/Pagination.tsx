import React from "react";
import { Pagination } from "@/pages/api/types";

export default function Pagination({
  currentPage,
  totalPages,
  next,
  previous,
}) {


  return (
    <div className="my-3 pagination align-items-center">
      <button
        onClick={()=>previous(currentPage-1)}
        disabled={currentPage === 0}
        className="more d-inline-block mt-3 me-2"
      >
        <span>Previous</span>
      </button>
      <span className="mx-2">
        Page {currentPage + 1} of {totalPages}
      </span>

      <button
        onClick={()=>next(currentPage+1)}
        disabled={currentPage === totalPages - 1}
        className="more d-inline-block ms-2 mt-3"
      >
        <span>Next</span>
      </button>
    </div>
  );
}
