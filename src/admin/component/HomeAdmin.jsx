import React, { useEffect, useState } from 'react';
import MyChart from '../utils/Chart';
import '../style/home-admin.css';
import DoughnutComponenet from '../utils/Doughnut';
import ChartProduct from '../utils/ChartProduct';
import reportService from '../../services/reportService';
import productService from '../../services/productService';

const HomeAdmin = () => {
    const currentYear = new Date().getFullYear();
    const defaultYear = useState();
    const [yearSelect, setYear] = useState('');
    for (let i = 2000; i <= currentYear; i++) {
        defaultYear.push(i);
    }

    const [sellYear, setSellYear] = useState([]);
    const [importYear, setImportYear] = useState([]);
    const [listProductPopular, setListProductPopular] = useState([]);
    const [listBrandAndTotal, setListBrandAndTotal] = useState([]);

    const handleSelectYear = (e) => {
        setYear(e.target.value);
    };
    const handleImage = (image) => {
        if (image !== undefined) return `data:image/jpeg;base64,${image}`;
    };
    const fetchDataPopularProduct = async () => {
        try {
            const response = await reportService.get3ProductBestSale();
            // if (response !== null || response !== undefined) {
            const tempProduct = [];
            for (const item of response.data) {
                const productItem = await productService.getProductById(parseInt(item.idProduct));
                const obj = {
                    product: productItem.data,
                    quantitySell: item.quantity,
                };
                tempProduct.push(obj);
            }
            setListProductPopular(tempProduct);
            // }
        } catch (error) {
            console.log('Fetching data error at HomeAdmin.jsx: ' + error);
        }
    };
    const fetchDataProductSellByBrands = async () => {
        try {
            const resposne = await reportService.getReportByBrandSell();
            setListBrandAndTotal(resposne.data);
        } catch (error) {
            console.log(`Error fetching data for sell product by brand: ${error.message}`);
        }
    };
    const fetchDataImportByYear = async () => {
        const year = yearSelect !== '' ? yearSelect : new Date().getFullYear();
        try {
            const response = await reportService.getReportImportByYear(year);
            setImportYear(response.data);
        } catch (error) {
            console.log(`Fetching data for sell by year: ${error.message}`);
        }
    };
    const fetchDataSellByYear = async () => {
        const year = yearSelect !== '' ? yearSelect : new Date().getFullYear();
        try {
            const response = await reportService.getReportByYear(year);
            setSellYear(response.data);
        } catch (error) {
            console.log(`Fetching data for sell by year: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchDataPopularProduct();
        fetchDataProductSellByBrands();
        fetchDataSellByYear();
        fetchDataImportByYear();
    }, [yearSelect]);
    return (
        <div className="home-admin-container">
            <div className="home-admin-content-top row gx-4">
                <div className="col col-8 shadow home-admin-revenue">
                    <div className="revenue-top">
                        <h2 className="revenue-title">Thống kê doanh thu</h2>
                        <div className="revenue-control">
                            <select onChange={handleSelectYear} className="form-select " aria-label="Select year">
                                <option defaultValue={0}>-- Theo năm --</option>
                                {defaultYear.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="revenue-data">
                        <MyChart dataB={sellYear} dataI={importYear} />{' '}
                        {/* phai truyen data ban hang && data nhap hang */}
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
                        <DoughnutComponenet dataBE={listBrandAndTotal} />
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
                                {listProductPopular.map((product, index) => (
                                    <tr key={index}>
                                        <td style={{ fontWeight: '600' }}>{product.product.id}</td>
                                        <td className="table-popular">
                                            <img
                                                src={handleImage(product.product.thumbnail)}
                                                alt=""
                                                className="mini-cart-item-img-data"
                                            />
                                            <p>{product.product.name}</p>
                                        </td>

                                        <td>
                                            <p className="table-popular-price">
                                                {product.product.salePrice.toLocaleString()}đ
                                            </p>
                                        </td>
                                        <td>
                                            <span className="table-popular-amount">{product.quantitySell}</span>
                                        </td>
                                    </tr>
                                ))}
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
