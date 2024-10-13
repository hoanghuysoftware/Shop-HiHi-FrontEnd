import React from 'react';
import SaleAdmin from './component/SaleAdmin';
import ProductAdmin from './component/ProductAdmin';
import './style/admin-layout.css';
import BackToTop from '../components/common/BackToTop';
import OrderAdmin from './component/OrderAdmin';
import SupplierAdmin from './component/SupplierAdmin';
import BrandAdmin from './component/BrandAdmin';
import AccountAdmin from './component/AccountAdmin';
import HomeAdmin from './component/HomeAdmin';
import { Link } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className=" admin-container-custom">
            <BackToTop />
            <div className="admin-tab">
                <div className="admin-account-container">
                    <AccountAdmin />
                </div>
                <div className="d-flex align-items-start">
                    <div
                        className="nav flex-column nav-pills me-3 admin-tab-control"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <div className="admin-logo-shop pb-3 pt-2">
                            <Link to={'/'}>
                                <img src={`${process.env.PUBLIC_URL}/logo-main.png`} alt="" />
                            </Link>
                        </div>

                        <button
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#home"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                        >
                            <i className="mx-3 fa-solid fa-house"></i>
                            Trang chủ
                        </button>
                        <button
                            className="nav-link"
                            id="sale-admin-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#sale-admin"
                            type="button"
                            role="tab"
                            aria-controls="sale-admin"
                            aria-selected="false"
                        >
                            <i className="mx-3 fa-solid fa-coins"></i>
                            Khuyến mãi
                        </button>
                        <button
                            className="nav-link"
                            id="product-admin-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#product-admin"
                            type="button"
                            role="tab"
                            aria-controls="product-admin"
                            aria-selected="false"
                        >
                            <i className="mx-3 fa-solid fa-tags"></i>
                            Sản phẩm
                        </button>
                        <button
                            className="nav-link"
                            id="order-admin-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#order-admin"
                            type="button"
                            role="tab"
                            aria-controls="order-admin"
                            aria-selected="false"
                        >
                            <i className="mx-3 fa-solid fa-file-invoice-dollar"></i>
                            Đơn hàng
                        </button>
                        <button
                            className="nav-link"
                            id="supplier-admin-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#supplier-admin"
                            type="button"
                            role="tab"
                            aria-controls="supplier-admin"
                            aria-selected="false"
                        >
                            <i className="mx-3 fa-solid fa-truck-arrow-right"></i>
                            Nhà cung cấp
                        </button>
                        <button
                            className="nav-link"
                            id="brand-admin-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#brand-admin"
                            type="button"
                            role="tab"
                            aria-controls="brand-admin"
                            aria-selected="false"
                        >
                            <i className="mx-3 fa-regular fa-bookmark"></i>
                            Thương hiệu
                        </button>
                    </div>

                    <div className="tab-content admin-tab-content" id="v-pills-tabContent" style={{ width: '100%' }}>
                        <div
                            className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                            tabIndex="0"
                        >
                            <HomeAdmin />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="sale-admin"
                            role="tabpanel"
                            aria-labelledby="sale-admin-tab"
                            tabIndex="0"
                        >
                            <SaleAdmin />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="product-admin"
                            role="tabpanel"
                            aria-labelledby="product-admin-tab"
                            tabIndex="0"
                        >
                            <ProductAdmin />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="order-admin"
                            role="tabpanel"
                            aria-labelledby="order-admin-tab"
                            tabIndex="0"
                        >
                            <OrderAdmin />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="supplier-admin"
                            role="tabpanel"
                            aria-labelledby="supplier-admin-tab"
                            tabIndex="0"
                        >
                            <SupplierAdmin />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="brand-admin"
                            role="tabpanel"
                            aria-labelledby="brand-admin-tab"
                            tabIndex="0"
                        >
                            <BrandAdmin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
