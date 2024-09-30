import { Component } from 'react';
import React from 'react';
import '../style/header.css';

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
                                <div className="header-top__item">
                                    <i className="header-icon fa-regular fa-user"></i>
                                    <span>Tài khoản</span>
                                </div>
                                <div className="header-top__item">
                                    <span className="number-notify">2</span>
                                    <i className="header-icon fa-regular fa-bell"></i>
                                    <span>Thông báo</span>
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
