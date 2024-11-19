"use client";

import React, { useEffect, useState } from "react";

interface PageTransitionProps {
  totalPages: number;
}

const PageTransition: React.FC<PageTransitionProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const navigateToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.history.pushState(null, "", `?page=${page}`);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageFromUrl = parseInt(params.get("page") || "1", 10);
    setCurrentPage(pageFromUrl);
  }, []);

  // Helper function to generate the pagination range
  const generatePaginationRange = () => {
    const range: (number | string)[] = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      // Always show the first 3, the last 3, and current page +/- 1
      range.push(1, 2, 3);

      if (currentPage > 4) range.push("...");
      if (currentPage > 3 && currentPage < totalPages - 2) {
        range.push(currentPage - 1, currentPage, currentPage + 1);
      }
      if (currentPage < totalPages - 3) range.push("...");

      range.push(totalPages - 2, totalPages - 1, totalPages);
    }

    return Array.from(new Set(range)); // Ensure no duplicates
  };

  const paginationRange = generatePaginationRange();

  return (
    <div className="flex items-center justify-center  bg-[#C8AD84] border-[1px] border-black hover:shadow-md mt-4  flex-wrap">
      {/* Left Arrow */}
      <button
        onClick={() => navigateToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-4 bg-[#9C7A4D] rounded-md ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"
        }`}
      >
        ◀
      </button>

      {/* Page Numbers */}
      <div className="flex   items-center  ">
        {paginationRange.map((item, index) => (
          <button
            key={index}
            onClick={() => typeof item === "number" && navigateToPage(item)}
            disabled={item === "..."}
            className={`p-2 px-4 py-4 rounded-md border-black border-r-[1px] ${
              item === currentPage
                ? "bg-[#9C7A4D] text-white"
                : "bg-[#C8AD84] hover:bg-gray-300"
            } ${item === "..." ? "cursor-default opacity-50" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => navigateToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-4 bg-[#9C7A4D] rounded-md ${
          currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"
        }`}
      >
        ▶
      </button>
    </div>
  );
};

export default PageTransition;
