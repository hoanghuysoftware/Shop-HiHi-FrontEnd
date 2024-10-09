import React from 'react';
import SaleAdmin from './component/SaleAdmin';
import ProductAdmin from './component/ProductAdmin';

const AdminLayout = () => {
    return (
        <div className="container-fluid">
            <div className="admin-tab">
                <div className="d-flex align-items-start">
                    <div
                        className="nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <div className="admin-logo-shop">
                            <img src={`${process.env.PUBLIC_URL}/logo-main.png`} alt="" />
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
                            Sản phẩm
                        </button>
                        <button
                            className="nav-link"
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                        >
                            Settings
                        </button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent" style={{ width: '100%' }}>
                        <div
                            className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                            tabindex="0"
                        >
                            this is home tab
                        </div>
                        <div
                            className="tab-pane fade"
                            id="sale-admin"
                            role="tabpanel"
                            aria-labelledby="sale-admin-tab"
                            tabindex="0"
                        >
                            <SaleAdmin />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="product-admin"
                            role="tabpanel"
                            aria-labelledby="product-admin-tab"
                            tabindex="0"
                        >
                            <ProductAdmin/>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-settings"
                            role="tabpanel"
                            aria-labelledby="v-pills-settings-tab"
                            tabindex="0"
                        >
                            ...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
