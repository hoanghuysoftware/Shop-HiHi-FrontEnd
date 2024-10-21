import React from 'react';

const Pagination = ({ totalPage, change, currentPage }) => {
    const handlePageClick = (page) => {
        if (page >= 0 && page < totalPage) {
            change(page);
        }
    };

    return (
        <div className="page-container">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
                        <a
                            className="page-link"
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageClick(currentPage - 1); // Quay lại trang trước
                            }}
                        >
                            Trang trước
                        </a>
                    </li>
                    {Array.from({ length: totalPage }, (_, index) => index).map((page) => (
                        <li
                            onClick={() => handlePageClick(page)}
                            key={page}
                            className={`page-item ${page === currentPage ? 'active' : ''}`}
                        >
                            <p className="page-link">{page + 1}</p>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPage - 1 ? 'disabled' : ''}`}>
                        <a
                            className="page-link"
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageClick(currentPage + 1); // Chuyển đến trang tiếp theo
                            }}
                        >
                            Trang tiếp theo
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
