import React from 'react';

const Pagination = () => {
    const handlePageClick = (e) => {
        e.preventDefault();
        // Thêm logic phân trang của bạn ở đây
    };

    return (
        <div className="page-container">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="/" onClick={(e) => e.preventDefault()}>
                            Previous
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/" onClick={handlePageClick}>
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/" onClick={handlePageClick}>
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/" onClick={handlePageClick}>
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/" onClick={(e) => e.preventDefault()}>
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
