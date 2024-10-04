import React, { Component } from 'react';
import Header from '../components/Header';
import '../style/cart.css';
import { Link } from 'react-router-dom';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            totalPrice: 0,
        };
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <h2 className="cart-title">Giỏ hàng</h2>
                    <div className="row gx-2 cart-row">
                        <div className="col col-8 cart-row-left">
                            <div className="cart-content">
                                <div className="cart-list">
                                    <div className="row gx-1 cart-item">
                                        <div className="col col-4 cart-item-img">
                                            <Link to={`/product/${1}`}>
                                                <img src={`${process.env.PUBLIC_URL}/images/product-test.jpg`} alt="" />
                                            </Link>
                                        </div>
                                        <div className="col col-8 cart-item-content">
                                            <h3 className="cart-item-name">
                                                <Link to={`/product/${1}`}>
                                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS |
                                                    Radeon RX 6550M | 15.6 inch Full HD 144Hz
                                                </Link>
                                            </h3>
                                            <div className="cart-item-price">
                                                <p className="cart-item-sale-price">14.990.000 đ</p>
                                                <del className="cart-item-price-origin">14.990.000 đ</del>
                                                <p className="cart-item-discount">-10%</p>
                                            </div>
                                            <div className="row gx-1 cart-item-quantity">
                                                <p className="col col-3 cart-item-quantity-title">Số lượng: </p>
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-de-quantity"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="col form-control cart-item-input"
                                                    defaultValue={1}
                                                    min={1}
                                                />
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-in-quantity"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gx-1 cart-item">
                                        <div className="col col-4 cart-item-img">
                                            <Link to={`/product/${1}`}>
                                                <img src={`${process.env.PUBLIC_URL}/images/product-test.jpg`} alt="" />
                                            </Link>
                                        </div>
                                        <div className="col col-8 cart-item-content">
                                            <h3 className="cart-item-name">
                                                <Link to={`/product/${1}`}>
                                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS |
                                                    Radeon RX 6550M | 15.6 inch Full HD 144Hz
                                                </Link>
                                            </h3>
                                            <div className="cart-item-price">
                                                <p className="cart-item-sale-price">14.990.000 đ</p>
                                                <del className="cart-item-price-origin">14.990.000 đ</del>
                                                <p className="cart-item-discount">-10%</p>
                                            </div>
                                            <div className="row gx-1 cart-item-quantity">
                                                <p className="col col-3 cart-item-quantity-title">Số lượng: </p>
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-de-quantity"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="col form-control cart-item-input"
                                                    defaultValue={1}
                                                    min={1}
                                                />
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-in-quantity"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gx-1 cart-item">
                                        <div className="col col-4 cart-item-img">
                                            <Link to={`/product/${1}`}>
                                                <img src={`${process.env.PUBLIC_URL}/images/product-test.jpg`} alt="" />
                                            </Link>
                                        </div>
                                        <div className="col col-8 cart-item-content">
                                            <h3 className="cart-item-name">
                                                <Link to={`/product/${1}`}>
                                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS |
                                                    Radeon RX 6550M | 15.6 inch Full HD 144Hz
                                                </Link>
                                            </h3>
                                            <div className="cart-item-price">
                                                <p className="cart-item-sale-price">14.990.000 đ</p>
                                                <del className="cart-item-price-origin">14.990.000 đ</del>
                                                <p className="cart-item-discount">-10%</p>
                                            </div>
                                            <div className="row gx-1 cart-item-quantity">
                                                <p className="col col-3 cart-item-quantity-title">Số lượng: </p>
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-de-quantity"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="col form-control cart-item-input"
                                                    defaultValue={1}
                                                    min={1}
                                                />
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-in-quantity"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gx-1 cart-item">
                                        <div className="col col-4 cart-item-img">
                                            <Link to={`/product/${1}`}>
                                                <img src={`${process.env.PUBLIC_URL}/images/product-test.jpg`} alt="" />
                                            </Link>
                                        </div>
                                        <div className="col col-8 cart-item-content">
                                            <h3 className="cart-item-name">
                                                <Link to={`/product/${1}`}>
                                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS |
                                                    Radeon RX 6550M | 15.6 inch Full HD 144Hz
                                                </Link>
                                            </h3>
                                            <div className="cart-item-price">
                                                <p className="cart-item-sale-price">14.990.000 đ</p>
                                                <del className="cart-item-price-origin">14.990.000 đ</del>
                                                <p className="cart-item-discount">-10%</p>
                                            </div>
                                            <div className="row gx-1 cart-item-quantity">
                                                <p className="col col-3 cart-item-quantity-title">Số lượng: </p>
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-de-quantity"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="col form-control cart-item-input"
                                                    defaultValue={1}
                                                    min={1}
                                                />
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-in-quantity"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gx-1 cart-item">
                                        <div className="col col-4 cart-item-img">
                                            <Link to={`/product/${1}`}>
                                                <img src={`${process.env.PUBLIC_URL}/images/product-test.jpg`} alt="" />
                                            </Link>
                                        </div>
                                        <div className="col col-8 cart-item-content">
                                            <h3 className="cart-item-name">
                                                <Link to={`/product/${1}`}>
                                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS |
                                                    Radeon RX 6550M | 15.6 inch Full HD 144Hz
                                                </Link>
                                            </h3>
                                            <div className="cart-item-price">
                                                <p className="cart-item-sale-price">14.990.000 đ</p>
                                                <del className="cart-item-price-origin">14.990.000 đ</del>
                                                <p className="cart-item-discount">-10%</p>
                                            </div>
                                            <div className="row gx-1 cart-item-quantity">
                                                <p className="col col-3 cart-item-quantity-title">Số lượng: </p>
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-de-quantity"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="col form-control cart-item-input"
                                                    defaultValue={1}
                                                    min={1}
                                                />
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-in-quantity"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gx-1 cart-item">
                                        <div className="col col-4 cart-item-img">
                                            <Link to={`/product/${1}`}>
                                                <img src={`${process.env.PUBLIC_URL}/images/product-test.jpg`} alt="" />
                                            </Link>
                                        </div>
                                        <div className="col col-8 cart-item-content">
                                            <h3 className="cart-item-name">
                                                <Link to={`/product/${1}`}>
                                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS |
                                                    Radeon RX 6550M | 15.6 inch Full HD 144Hz
                                                </Link>
                                            </h3>
                                            <div className="cart-item-price">
                                                <p className="cart-item-sale-price">14.990.000 đ</p>
                                                <del className="cart-item-price-origin">14.990.000 đ</del>
                                                <p className="cart-item-discount">-10%</p>
                                            </div>
                                            <div className="row gx-1 cart-item-quantity">
                                                <p className="col col-3 cart-item-quantity-title">Số lượng: </p>
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-de-quantity"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="col form-control cart-item-input"
                                                    defaultValue={1}
                                                    min={1}
                                                />
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-in-quantity"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-control-btn">
                                    <Link to={'/'}>
                                        <button type="button" className="btn btn-primary">
                                            <i className="fa-solid fa-arrow-left"></i>
                                            <span>Tiếp tục mua sắm</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col col-4 cart-row-right">
                            <h2 className="cart-row-right-title">Cộng giỏ hàng</h2>
                            <div className="cart-row-right-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Tổng số lượng sản phẩm</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>Tổng giá trị</td>
                                            <td>15.290.000 đ</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="cart-control-btn cart-check-pay">
                                    <Link to={`/user/${1}/order`}>
                                        <button type="button" className="btn btn-primary">
                                            <span>Tiến hành thanh toán</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
