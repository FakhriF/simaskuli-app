'use client';

import { useRouter } from 'next/navigation';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const router = useRouter();
  
    const handlePageClick = (page) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
        // Update URL with new page number
        router.push(`/forum?page=${page}`);
      }
    };
  
    const renderPageNumbers = () => {
      const pageNumbers = [];
      const maxPageButtons = 5; // Maximum number of page buttons to display
      const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
      const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
  
      return pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
            currentPage === pageNumber ? 'cursor-not-allowed text-gray-400 bg-gray-200' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
          } h-8 px-3 py-2`}
          aria-label={`Go to page ${pageNumber}`}
          disabled={currentPage === pageNumber}
        >
          <span>{pageNumber}</span>
        </button>
      ));
    };
  
    return (
      <nav aria-label="pagination" className="mx-auto flex justify-left" role="navigation">
        <ul className="flex items-center gap-1">
          <li>
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
                currentPage === 1 ? 'cursor-not-allowed text-gray-400 bg-gray-200' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              } h-8 px-3 py-2`}
              aria-label="Go to previous page"
              disabled={currentPage === 1}
            >
              <span>Previous</span>
            </button>
          </li>
          {renderPageNumbers()}
          <li>
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
                currentPage === totalPages ? 'cursor-not-allowed text-gray-400 bg-gray-200' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              } h-8 px-3 py-2`}
              aria-label="Go to next page"
              disabled={currentPage === totalPages}
            >
              <span>Next</span>
            </button>
          </li>
        </ul>
      </nav>
    );
  }