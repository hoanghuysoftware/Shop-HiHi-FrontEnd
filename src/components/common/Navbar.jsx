import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (e) => {
    return (
        <div className="container">
            <div className="row navbar-container">
                <div className="col header-bottom-item">
                    <Link to={'/'} className="header-bottom-item__link">
                        Trang chủ
                    </Link>
                </div>
                <div className="col header-bottom-item">
                    <a href="/" className="header-bottom-item__link">
                        Tính năng gợi ý
                    </a>
                </div>
                <div className="col header-bottom-item">
                    <a href="/" className="header-bottom-item__link">
                        Khuyến mãi
                    </a>
                </div>
                <div className="col header-bottom-item">
                    {/* <a href="/" className="header-bottom-item__link">
                        Khuyến mãi
                    </a> */}
                    <div className="btn-group dropend">
                        <p
                            type="button"
                            className="dropdown-toggle header-bottom-item__link"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Danh mục sản phẩm
                        </p>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to={`/category?category-name=asus`} className="dropdown-item">
                                    Asus
                                </Link>
                            </li>
                            <li>
                                <Link to={`/category?category-name=dell`} className="dropdown-item">
                                    Dell
                                </Link>
                            </li>
                            <li>
                                <Link to={`/category?category-name=hp`} className="dropdown-item">
                                    HP
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col header-bottom-item">
                    <a href="/" className="header-bottom-item__link">
                        Quảng cáo
                    </a>
                </div>
                <div className="col header-bottom-item">
                    <a href="/" className="header-bottom-item__link">
                        Liên hệ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
