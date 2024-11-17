"use client"; // Ensure the component only runs on the client side

import React, { useEffect, useState } from "react";

interface PageTransitionProps {
  totalPages: number;
}

const PageTransition: React.FC<PageTransitionProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Handle navigation to a specific page
  const navigateToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.history.pushState(null, "", `?page=${page}`); // Update URL without reloading
    }
  };

  // Get the current page from the URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageFromUrl = parseInt(params.get("page") || "1", 10);
    setCurrentPage(pageFromUrl);
  }, []);

  return (
    <div className="flex items-center bg-[#C8AD84] border-[1px] border-black justify-center  -mt-28 m-4">
      {/* Left Arrow */}
      <button
        onClick={() => navigateToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 bg-[#9C7A4D] rounded-md ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"
        }`}
      >
        ◀
      </button>

      {/* Page Numbers */}
      <div className="flex items-center  ">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => navigateToPage(page)}
            className={`p-2 px-4 border-r-[0.5px]   ${
              page === currentPage
                ? "bg-[#9C7A4D] text-white"
                : "bg-[#C8AD84] hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => navigateToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 bg-[#9C7A4D] rounded-md ${
          currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"
        }`}
      >
        ▶
      </button>
    </div>
  );
};

export default PageTransition;
