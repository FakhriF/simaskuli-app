'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ForumPagination({ currentPage, totalPages, onPageChange }) {
    const router = useRouter();
  
    const handlePageClick = (page) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
        // Update URL with new page number
        router.push(`/forum?page=${page}`);
      }
    };
  


const renderPageNumbers = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const pageNumbers = [];
  const maxPageButtons = 3;
  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  if (endPage - startPage < maxPageButtons - 1) {
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  // Add ellipsis if there are pages before startPage
  if (startPage > 1) {
    pageNumbers.push(1);
    if (startPage > 2) {
      pageNumbers.push('...');
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Add ellipsis if there are pages after endPage
  if (endPage < totalPages) {
    if (totalPages - endPage > 1) {
      pageNumbers.push('...');
    }
    pageNumbers.push(totalPages);
  }

  return pageNumbers.map((pageNumber) => {
    // if (pageNumber === '...') {
    //   return (
    //     <span key="ellipsis" className="relative">
    //       <button
    //         onClick={toggleForm}
    //         className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring text-gray-700 hover:bg-gray-100 hover:text-gray-900 h-8 px-3 py-2"
    //       >
    //         ...
    //       </button>
    //       {showForm && (
    //         <form
    //           onSubmit={(e) => {
    //             e.preventDefault();
    //             const input = e.target.elements['number-input'].value;
    //             const parsedPage = parseInt(input, 10);
    //             if (!isNaN(parsedPage) && parsedPage >= 1 && parsedPage <= totalPages) {
    //               handlePageClick(parsedPage);
    //             } else {
    //               alert('Invalid page number');
    //             }
    //             closeForm();
    //           }}
    //           className="absolute left-0 mt-8 mx-auto w-max"
    //           style={{ top: '100%', left: '50%', transform: 'translateX(-50%)' }}
    //         >
    //           <label htmlFor="number-input" className="sr-only">Go to page:</label>
    //           <input
    //             type="number"
    //             id="number-input"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //             placeholder="Page number"
    //             min="1"
    //             max={totalPages}
    //             required
    //           />
    //           <button type="submit" className="bg-blue-500 text-white text-sm rounded-lg px-3 py-2 ml-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Go</button>
    //         </form>
    //       )}
    //     </span>
    //   );
    // }
    return (
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
    );
  });
};

      
      
  
    return (
      <nav aria-label="pagination" className="mx-auto" role="navigation">
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
