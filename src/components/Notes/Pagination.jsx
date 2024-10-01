import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const getVisiblePageNumbers = (totalPages, currentPage) => {
    const pagesToShow = 3; // Number of pages you want to show at a time
    const half = Math.floor(pagesToShow / 2);
    let start = Math.max(currentPage - half + 1, 1); // Adjust to 1-based for display
    let end = Math.min(start + pagesToShow - 1, totalPages);

    if (end - start + 1 < pagesToShow) {
        start = Math.max(end - pagesToShow + 1, 1);
    }

    return { start, end };
};

const Pagination = ({ totalPages, pageNumber, setPageNumber }) => {
    const { start, end } = getVisiblePageNumbers(totalPages, pageNumber);

    const handlePrevPage = () => {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
        }
    };

    const handleNextPage = () => {
        if (pageNumber < totalPages - 1) {
            setPageNumber(pageNumber + 1);
        }
    };

    return (
        <div className="pagination flex space-x-1">
            {/* Previous button */}
            <button
                className="px-2 py-1 rounded hover:bg-gray-700"
                disabled={pageNumber === 0}
                onClick={handlePrevPage}
            >
                <FaArrowLeft />
            </button>

            {/* First page */}
            {start > 1 && (
                <button
                    className="px-2 py-1 border border-gray-600 rounded hover:bg-gray-700"
                    onClick={() => setPageNumber(0)} // setPageNumber to 0 since it's 0-based
                >
                    1
                </button>
            )}

            {/* Ellipsis before the current page range */}
            {start > 2 && <span className="px-2">...</span>}

            {/* Show the range of page numbers */}
            {Array.from({ length: end - start + 1 }, (_, idx) => idx + start).map(
                (page) => (
                    <button
                        key={page}
                        className={`px-2 py-1 border border-gray-600 rounded hover:bg-gray-700 ${pageNumber === page - 1 ? "bg-gray-700" : ""
                            }`}
                        onClick={() => setPageNumber(page - 1)} // Adjust back to 0-based index
                    >
                        {page}
                    </button>
                )
            )}

            {/* Ellipsis after current page range */}
            {end < totalPages && <span className="px-2">...</span>}

            {/* Last page */}
            {end < totalPages && (
                <button
                    className="px-2 py-1 border border-gray-600 rounded hover:bg-gray-700"
                    onClick={() => setPageNumber(totalPages - 1)} // Set last page (0-based index)
                >
                    {totalPages}
                </button>
            )}

            {/* Next button */}
            <button
                className="px-2 py-1 rounded hover:bg-gray-700"
                disabled={pageNumber === totalPages - 1}
                onClick={handleNextPage}
            >
                <FaArrowRight />
            </button>
        </div>
    );
};

export default Pagination;
