import React, { useState } from 'react';
import MyChart from '../utils/Chart';
import '../style/home-admin.css';
import DoughnutComponenet from '../utils/Doughnut';
import ChartProduct from '../utils/ChartProduct';

const HomeAdmin = () => {
    const currentYear = new Date().getFullYear();
    const defaultYear = useState();
    const [year, setYear] = useState('');
    for (let i = 2000; i <= currentYear; i++) {
        defaultYear.push(i);
    }

    const handleSelectYear = (e) => {
        setYear(e.target.value);
        console.log(e.target.value);
    };
    return (
        <div className="home-admin-container">
            <div className="home-admin-content-top row gx-4">
                <div className="col col-8 shadow home-admin-revenue">
                    <div className="revenue-top">
                        <h2 className="revenue-title">Thống kê doanh thu</h2>
                        <div className="revenue-control">
                            <button type="button" className="btn btn-sm btn-primary me-2">
                                Tháng
                            </button>
                            <select onChange={handleSelectYear} className="form-select " aria-label="Select year">
                                <option defaultValue={0}>-- Theo năm --</option>
                                {defaultYear.map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="revenue-data">
                        <MyChart /> {/* phai truyen data ban hang && data nhap hang */}
                    </div>
                </div>
                <div className="col col-4 home-admin-compare">
                    <div className="compare-top shadow">
                        <div className="compare-top-this-month me-3">
                            <p className="compare-month-title">Doanh thu tháng này</p>
                            <p className="compare-month-value">14.000.000đ</p>
                            <div className="compare-month-percent">
                                <span>
                                    <i className="me-1 fa-solid fa-arrow-up"></i>
                                    14.5%
                                </span>
                                <p className="ms-1">Tăng so với tháng trước</p>
                            </div>
                        </div>
                        <div className="compare-top-last-month">
                            <p className="compare-month-title">Doanh thu tháng trước</p>
                            <p className="compare-month-value">14.000.000đ</p>
                            <div className="compare-month-percent">
                                <span>
                                    <i className="me-1 fa-solid fa-arrow-up"></i>
                                    14.5%
                                </span>
                                <p className="ms-1">Tăng so với tháng trước</p>
                            </div>
                        </div>
                    </div>
                    <div className="compare-bottom shadow">
                        <h2 className="m-3 revenue-title">Doanh số theo thương hiệu</h2>
                        <DoughnutComponenet />
                    </div>
                </div>
            </div>

            <div className="mt-4 home-admin-content-product row gx-4">
                <div className="col col-8 shadow home-product-popular">
                    <div className="product-popular-content">
                        <h2 className="m-3 revenue-title">Sản phẩm phổ biến nhất</h2>
                        <table className="table table-hover table-striped">
                            <thead className="table-info">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Sản phẩm</th>
                                    <th scope="col">Giá bán</th>
                                    <th scope="col">S.Lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ fontWeight: '600' }}>1</td>
                                    <td className="table-popular">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                            alt=""
                                            className="mini-cart-item-img-data"
                                        />
                                        <p>
                                            [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX
                                            6550M | 15.6 inch Full HD 144Hz
                                        </p>
                                    </td>

                                    <td>
                                        <p className="table-popular-price">14.000.000đ</p>
                                    </td>
                                    <td>
                                        <span className="table-popular-amount">300</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: '600' }}>1</td>
                                    <td className="table-popular">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                            alt=""
                                            className="mini-cart-item-img-data"
                                        />
                                        <p>
                                            [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX
                                            6550M | 15.6 inch Full HD 144Hz
                                        </p>
                                    </td>

                                    <td>
                                        <p className="table-popular-price">14.000.000đ</p>
                                    </td>
                                    <td>
                                        <span className="table-popular-amount">300</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: '600' }}>1</td>
                                    <td className="table-popular">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                            alt=""
                                            className="mini-cart-item-img-data"
                                        />
                                        <p>
                                            [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX
                                            6550M | 15.6 inch Full HD 144Hz
                                        </p>
                                    </td>

                                    <td>
                                        <p className="table-popular-price">14.000.000đ</p>
                                    </td>
                                    <td>
                                        <span className="table-popular-amount">300</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col col-4">
                    <div className="home-product-chart shadow">
                        <h2 className="m-3 revenue-title">Tổng số đơn hàng Tuần này</h2>
                        <ChartProduct />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAdmin;
