import { Component } from 'react';
import React from 'react';
import '../style/header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Welcome to My App',
        };
    }

    render() {
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
                                                <Link to={`/user/${1}/info`}>
                                                    <p className="dropdown-item">Tài khoản của tôi</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    Đơn mua
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    Đăng xuất
                                                </a>
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
                                    <img
                                        src={`${process.env.PUBLIC_URL}/logo-main.png`}
                                        className="img-logo"
                                        alt="..."
                                    />
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
                                        />
                                        <button className="search-btn btn btn-outline-success" type="submit">
                                            Tìm kiếm
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="p-2 col-md-3 header-cart">
                                <div className="cart-wapper">
                                    <i className="cart-icon fa-solid fa-cart-shopping"></i>
                                    <span className="cart-number">5</span>
                                </div>

                                <div className="mini-cart">
                                    <h3 className="mini-cart-title">Sản phẩm mới thêm</h3>
                                    <ul className="mini-cart-list">
                                        <div className="mini-cart-wapper">
                                            <Link to={`/product/${1}`}>
                                                <li className="row mini-cart-item">
                                                    <div className="col col-3 mini-cart-item-img">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                                            alt=""
                                                            className="mini-cart-item-img-data"
                                                        />
                                                    </div>
                                                    <div className="col col-6 mini-cart-item-info">
                                                        <p>
                                                            [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen
                                                            5-7535HS | Radeon RX 6550M | 15.6 inch Full HD 144Hz
                                                        </p>
                                                    </div>
                                                    <div className="col col-3 mini-cart-item-price">
                                                        <p>14.990.000 đ</p>
                                                        <p>x2</p>
                                                    </div>
                                                </li>
                                            </Link>
                                            <Link to={`/product/${2}`}>
                                                <li className="row mini-cart-item">
                                                    <div className="col col-3 mini-cart-item-img">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                                            alt=""
                                                            className="mini-cart-item-img-data"
                                                        />
                                                    </div>
                                                    <div className="col col-6 mini-cart-item-info">
                                                        <p>
                                                            [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen
                                                            5-7535HS | Radeon RX 6550M | 15.6 inch Full HD 144Hz
                                                        </p>
                                                    </div>
                                                    <div className="col col-3 mini-cart-item-price">
                                                        <p>14.990.000 đ</p>
                                                        <p>x2</p>
                                                    </div>
                                                </li>
                                            </Link>
                                        </div>
                                        <Link to={'/user/1/cart'}>
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
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col header-bottom-item">
                                <a href="/" className="header-bottom-item__link">
                                    Trang chủ
                                </a>
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
                </div>
            </header>
        );
    }
}

export default Header;
