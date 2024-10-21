import React, { useState } from 'react';
import '../style/header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { setSearch } from '../redux/actions/SearchAction';

const Header = () => {
    const [keyword, setKeyword] = useState('');
    // const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.items); // Lấy danh sách sản phẩm từ Redux store
    const totalQuantity = useSelector((state) => state.cart.totalQuantity); // L
    // const key2 = useSelector((state) => state.search.keyword);

    const navigate = useNavigate();
    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     navigate(`/search?keyword=${keyword}`);
    // };

    const handChangeSearch = (e) => {
        setKeyword(e.target.value);
        navigate(`/search?keyword=${e.target.value}`);
    };

    const handleImagesBase64 = (image) => {
        if (image !== undefined) return `data:image/jpeg;base64,${image}`;
    };

    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col header-top-left">
                            <div className="header-top__item">
                                <i className="header-icon fa-solid fa-phone"></i>
                                <span>0352863062</span>
                            </div>
                            <div className="header-top__item">
                                <i className="header-icon fa-regular fa-envelope"></i>
                                <span>hoanghuy@gmail.com</span>
                            </div>
                            <div className="header-top__item">
                                <i className="header-icon fa-solid fa-location-dot"></i>
                                <span>Phú Hội-Nhơn Trạch-Đồng Nai</span>
                            </div>
                        </div>
                        <div className="col header-top-right">
                            <div className="header-top__item header-top__account">
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-danger dropdown-toggle btn-account-pop"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="header-icon fa-regular fa-user"></i>
                                        <span style={{ fontSize: 12 }}>Tài khoản</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to={`/user/${2}/info`}>
                                                <p className="dropdown-item">Tài khoản của tôi</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={`/user/${2}/info?tab=order-history`}>
                                                <p className="dropdown-item">Đơn mua</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link to={`/login`}>
                                                <p className="dropdown-item">Đăng xuất</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-top__item">
                                <div className="btn-group dropstart">
                                    <button
                                        type="button"
                                        className="btn btn-secondary dropdown-toggle btn-notify"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span className="number-notify">2</span>
                                        <i className="header-icon fa-regular fa-bell"></i>
                                        <span style={{ fontSize: '12px' }}>Thông báo</span>
                                    </button>
                                    <ul className="dropdown-menu notify-wapper">
                                        <h3 className="dropdown-heading">Thông báo mới nhận</h3>
                                        <div className="notify-list">
                                            <li>
                                                <Link to={'/'} className="dropdown-item">
                                                    <div className="row notify-content">
                                                        <div className="col col-3">
                                                            <img
                                                                src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="col col-9">
                                                            <h4 className="notify-title">Đã đặt hàng thành công</h4>
                                                            <div className="notify-item-content">
                                                                Vui lòng theo dõi tình trạng đơn hàng
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    <div className="row notify-content">
                                                        <div className="col col-3">
                                                            <img
                                                                src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="col col-9">
                                                            <h4 className="notify-title">Đã đặt hàng thành công</h4>
                                                            <div className="notify-item-content">
                                                                Vui lòng theo dõi tình trạng đơn hàng
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    <div className="row notify-content">
                                                        <div className="col col-3">
                                                            <img
                                                                src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="col col-9">
                                                            <h4 className="notify-title">Đã đặt hàng thành công</h4>
                                                            <div className="notify-item-content">
                                                                Vui lòng theo dõi tình trạng đơn hàng
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    <div className="row notify-content">
                                                        <div className="col col-3">
                                                            <img
                                                                src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="col col-9">
                                                            <h4 className="notify-title">Đã đặt hàng thành công</h4>
                                                            <div className="notify-item-content">
                                                                Vui lòng theo dõi tình trạng đơn hàng
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    <div className="row notify-content">
                                                        <div className="col col-3">
                                                            <img
                                                                src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="col col-9">
                                                            <h4 className="notify-title">Đã đặt hàng thành công</h4>
                                                            <div className="notify-item-content">
                                                                Vui lòng theo dõi tình trạng đơn hàng
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </div>

                                        <button type="button" className="btn btn-outline-danger">
                                            Xem tất cả
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-main">
                <div className="container">
                    <div className="row">
                        <div className="p-2 col-md-3 header-logo">
                            <a href="/">
                                <img src={`${process.env.PUBLIC_URL}/logo-main.png`} className="img-logo" alt="..." />
                            </a>
                        </div>
                        <div className="p-2 col-md-6 header-search">
                            <div className="search-wapper">
                                <form className="d-flex" role="search">
                                    <input
                                        className="search-form form-control me-2"
                                        type="search"
                                        placeholder="Nhập từ khóa cần tìm"
                                        aria-label="Search"
                                        value={keyword}
                                        onChange={handChangeSearch}
                                    />
                                    <button className="search-btn btn btn-outline-success" type="submit">
                                        Tìm kiếm
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="p-2 col-md-3 header-cart-big">
                            <div className="header-cart ">
                                <div className="cart-wapper">
                                    <i className="cart-icon fa-solid fa-cart-shopping"></i>
                                    <span className="cart-number">{totalQuantity}</span>
                                </div>

                                <div className="mini-cart shadow">
                                    <h3 className="mini-cart-title">Sản phẩm mới thêm</h3>
                                    <ul className="mini-cart-list">
                                        <div className="mini-cart-wapper">
                                            {products.map((item) => (
                                                <Link key={item.id} to={`/product/${item.product.id}`}>
                                                    <li className="row mini-cart-item">
                                                        <div className="col col-3 mini-cart-item-img">
                                                            <img
                                                                src={handleImagesBase64(item.product.thumbnail)}
                                                                alt=""
                                                                className="mini-cart-item-img-data"
                                                            />
                                                        </div>
                                                        <div className="col col-6 mini-cart-item-info">
                                                            <p>{item.product.name}</p>
                                                        </div>
                                                        <div className="col col-3 mini-cart-item-price">
                                                            <p>{item.unitPrice.toLocaleString()} đ</p>
                                                            <p>x{item.quantity}</p>
                                                        </div>
                                                    </li>
                                                </Link>
                                            ))}
                                        </div>
                                        <Link to={'/user/2/cart'}>
                                            <button type="button" className="btn btn-outline-secondary">
                                                Xem tất cả
                                            </button>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="header-bottom">
                <div className="container"></div>
            </div> */}
        </header>
    );
};

export default Header;
