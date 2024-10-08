import React, { useState } from 'react';
import '../style/infoorder.css';
import { Link } from 'react-router-dom';

const InfoOrder = () => {
    const [valueSearch, setValueSearch] = useState('');
    console.log(valueSearch);
    const handleChangeSearch = (e) => {
        setValueSearch(e);
    };

    return (
        <div className="info-order-body">
            <div className="info-order-top">
                <h3 className="info-order-title">Lịch sử mua hàng</h3>
                <form>
                    <div className="form-search-info form-floating mb-3">
                        <input
                            type="text"
                            className="form-control info-order-form-search shadow-sm"
                            id="info-order-search"
                            placeholder="name@example.com"
                            value={valueSearch}
                            onChange={(e) => handleChangeSearch(e.target.value)}
                        />
                        <label htmlFor="info-order-search">Nhập ID đơn hàng cần tìm</label>
                    </div>
                </form>
            </div>
            <div className="info-order-main">
                <div className="info-order-list">
                    <div className="info-order-item">
                        <div className="info-order-item-top">
                            <div className="info-order-item-id">ID đơn hàng: 1234567890</div>
                            <div className="info-order-item-top-right">
                                <div className="info-order-item-date">Ngày đặt: 25-05-2024</div>
                            </div>
                        </div>
                        <div className="info-order-item-content row gx-2">
                            <div className="col col-2 info-order-item-img">
                                <img src={`${process.env.PUBLIC_URL}/images/product-test.jpg`} alt="" />
                            </div>
                            <div className="col col-10 info-order-item-detail">
                                <h4 className="info-order-item-detail-name">
                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX 6550M |
                                    15.6 inch Full HD 144Hz
                                </h4>
                                <div className="info-order-item-detail-price">
                                    <p className="info-order-item-detail-price-quantity">x2</p>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <del className="info-order-item-detail-price-origin">14.990.000 đ</del>
                                        <p className="info-order-item-detail-price-sale">14.990.000 đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info-order-item-bottom">
                            <div className="info-order-item-total">
                                <p>Thành tiền:</p>
                                <span>13.000.000đ</span>
                            </div>
                            <div className="info-order-item-control">
                                <Link to={`/order/${1}`}>
                                    <button type="button" className="btn btn-info info-order-item-btn">
                                        Xem chi tiết
                                    </button>
                                </Link>
                                <button type="button" className="btn btn-success">
                                    Đánh giá đơn hàng
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="info-order-item">
                        <div className="info-order-item-top">
                            <div className="info-order-item-id">ID đơn hàng: 1234567890</div>
                            <div className="info-order-item-top-right">
                                <div className="info-order-item-date">Ngày đặt: 25-05-2024</div>
                            </div>
                        </div>
                        <div className="info-order-item-content row gx-2">
                            <div className="col col-2 info-order-item-img">
                                <img src={`${process.env.PUBLIC_URL}/images/product-test.jpg`} alt="" />
                            </div>
                            <div className="col col-10 info-order-item-detail">
                                <h4 className="info-order-item-detail-name">
                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX 6550M |
                                    15.6 inch Full HD 144Hz
                                </h4>
                                <div className="info-order-item-detail-price">
                                    <p className="info-order-item-detail-price-quantity">x2</p>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <del className="info-order-item-detail-price-origin">14.990.000 đ</del>
                                        <p className="info-order-item-detail-price-sale">14.990.000 đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info-order-item-bottom">
                            <div className="info-order-item-total">
                                <p>Thành tiền:</p>
                                <span>13.000.000đ</span>
                            </div>
                            <div className="info-order-item-control">
                                <Link to={`/order/${1}`}>
                                    <button type="button" className="btn btn-info info-order-item-btn">
                                        Xem chi tiết
                                    </button>
                                </Link>
                                <button type="button" className="btn btn-success">
                                    Đánh giá đơn hàng
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="info-order-item">
                        <div className="info-order-item-top">
                            <div className="info-order-item-id">ID đơn hàng: 1234567890</div>
                            <div className="info-order-item-top-right">
                                <div className="info-order-item-date">Ngày đặt: 25-05-2024</div>
                            </div>
                        </div>
                        <div className="info-order-item-content row gx-2">
                            <div className="col col-2 info-order-item-img">
                                <img src={`${process.env.PUBLIC_URL}/images/product-test.jpg`} alt="" />
                            </div>
                            <div className="col col-10 info-order-item-detail">
                                <h4 className="info-order-item-detail-name">
                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX 6550M |
                                    15.6 inch Full HD 144Hz
                                </h4>
                                <div className="info-order-item-detail-price">
                                    <p className="info-order-item-detail-price-quantity">x2</p>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <del className="info-order-item-detail-price-origin">14.990.000 đ</del>
                                        <p className="info-order-item-detail-price-sale">14.990.000 đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info-order-item-bottom">
                            <div className="info-order-item-total">
                                <p>Thành tiền:</p>
                                <span>13.000.000đ</span>
                            </div>
                            <div className="info-order-item-control">
                                <Link to={`/order/${1}`}>
                                    <button type="button" className="btn btn-info info-order-item-btn">
                                        Xem chi tiết
                                    </button>
                                </Link>
                                <button type="button" className="btn btn-success">
                                    Đánh giá đơn hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoOrder;
