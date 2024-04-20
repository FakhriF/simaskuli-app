import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const metadata = {
    title: "Forum Pagination",
    };

export default function ForumPagination() {
    return (
        <>
            <nav aria-label="pagination" className="mx-auto flex justify-center" role="navigation">
                <ul className="flex items-center gap-1">
                    <li>
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-8 px-3 py-2 gap-1 pl-2.5"
                        aria-label="Go to previous page"
                    >
                        <FiChevronLeft className="h-4 w-4" />
                        <span>Previous</span>
                    </button>
                    </li>
\
                    <li>
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-8 px-3 py-2 gap-1 pr-2.5"
                        aria-label="Go to next page"
                    >
                        <span>Next</span>
                        <FiChevronRight className="h-4 w-4" />
                    </button>
                    </li>
                </ul>
            </nav>

            {/* <nav aria-label="Page navigation example">
            <ul className="flex items-center space-x-2">
                <li>
                <div className="flex items-center justify-center px-3 h-8 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100">
                    <AiFillCaretLeft />
                </div>
                </li>
                <li>
                <div className="flex items-center justify-center px-3 h-8 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100">
                    1
                </div>
                </li>
                <li>
                <span className="font-medium">...</span>
                </li>
                <li>
                <div className="flex items-center justify-center px-3 h-8 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100">
                    5
                </div>
                </li>
                <li>
                <div className="flex items-center justify-center px-3 h-8 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100">
                    <AiFillCaretRight />
                </div>
                </li>
            </ul>
        </nav> */}
        </>
    )
}