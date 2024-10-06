import React from 'react';
import '../style/order.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="order-body">
                    <div className="order-top">
                        <button type="button" className="btn btn-outline-secondary">
                            <Link
                                to={`/user/${1}/info?tab=order-history`}
                                style={{ color: 'unset', textDecoration: 'none' }}
                            >
                                <i className="me-1 fa-solid fa-angle-left"></i>
                                Trở về
                            </Link>
                        </button>
                        <div className="order-top-id-status">
                            <div className="order-top-id">
                                MÃ ĐƠN HÀNG: <span>240901SYSRNYW3</span>
                            </div>
                            <div className="order-top-status">Đơn hàng đã hoàn thành</div>
                        </div>
                    </div>
                    <div className="order-info-user">
                        <h3 className="order-title">Địa chỉ nhận hàng</h3>
                        <div className="order-info-user-content">
                            <h4 className="order-info-user-name">Nguyễn Hoàng Huy</h4>
                            <p className="order-info-user-phone">035.286.3062</p>
                            <p className="order-info-user-address">
                                hẻm kế bên Cafe Ngọc Điệp, Xã Phú Hội, Huyện Nhơn Trạch, Đồng Nai
                            </p>
                        </div>
                    </div>
                    <div className="order-info-product">
                        <h3 className="order-title">Sản phẩm trong đơn hàng</h3>
                        <div className="order-product-item row gx-2">
                            <div className="col col-2 order-product-item-img">
                                <img src={`${process.env.PUBLIC_URL}/images/product-test.jpg`} alt="" />
                            </div>
                            <div className="col col-10 order-product-item-content">
                                <h5 className="order-product-item-name">
                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX 6550M |
                                    15.6 inch Full HD 144Hz
                                </h5>
                                <div className="order-product-item-quantity-price">
                                    <div className="order-product-item-quantity">x2</div>
                                    <div className="order-product-item-price">
                                        <del className="order-product-item-price-origin">14.500.000đ</del>
                                        <p className="order-product-item-price-sale">14.500.000đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-product-item row gx-2">
                            <div className="col col-2 order-product-item-img">
                                <img src={`${process.env.PUBLIC_URL}/images/product-test.jpg`} alt="" />
                            </div>
                            <div className="col col-10 order-product-item-content">
                                <h5 className="order-product-item-name">
                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX 6550M |
                                    15.6 inch Full HD 144Hz
                                </h5>
                                <div className="order-product-item-quantity-price">
                                    <div className="order-product-item-quantity">x2</div>
                                    <div className="order-product-item-price">
                                        <del className="order-product-item-price-origin">14.500.000đ</del>
                                        <p className="order-product-item-price-sale">14.500.000đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-info-bottom">
                        <div className="order-bottom-item">
                            <h4 className="order-bottom-total-price-title">Tổng tiền hàng</h4>
                            <p className="order-bottom-total-price-value">14.500.000đ</p>
                        </div>
                        <div className="order-bottom-item">
                            <h4 className="order-bottom-total-price-title">Phương thức thanh toán</h4>
                            <p className="order-bottom-pay-method">Thanh toán qua VNPay</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
