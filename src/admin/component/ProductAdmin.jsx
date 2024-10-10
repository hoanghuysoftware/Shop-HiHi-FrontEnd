import React from 'react';
import '../style/product-admin.css';
import TableProduct from '../utils/TableProduct';
import FormAddProduct from '../utils/FormAddProduct';
const productList = [
    {
        id: 1,
        name: '[New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX 6550M | 15.6 inch Full HD 144Hz',
        image: `${process.env.PUBLIC_URL}/images/product-test.jpg`,
        price: '14.000.000',
        quantity: 20,
        isActive: true,
    },
    // Thêm các sản phẩm khác vào đây
];
const ProductAdmin = () => {
    return (
        <div className="product-admin-container">
            <div className="product-admin-con">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                            className="nav-link active"
                            id="home-product-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home-product"
                            type="button"
                            role="tab"
                            aria-controls="home-product"
                            aria-selected="true"
                        >
                            Danh sách sản phẩm
                        </button>
                        <button
                            className="nav-link"
                            id="home-product-stop-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home-product-stop"
                            type="button"
                            role="tab"
                            aria-controls="home-product-stop"
                            aria-selected="true"
                        >
                            Sản phẩm ngừng bán
                        </button>
                        <button
                            className="nav-link"
                            id="add-product-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#add-product"
                            type="button"
                            role="tab"
                            aria-controls="add-product"
                            aria-selected="false"
                        >
                            Thêm sản phẩm mới
                        </button>
                        <button
                            className="nav-link"
                            id="update-image-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#update-image"
                            type="button"
                            role="tab"
                            aria-controls="update-image-product"
                            aria-selected="false"
                        >
                            Thêm ảnh cho sản phẩm
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active product-list-active"
                        id="home-product"
                        role="tabpanel"
                        aria-labelledby="home-product-tab"
                        tabIndex="0"
                    >
                        <TableProduct products={productList} status="table-info" />
                    </div>
                    <div
                        className="tab-pane fade product-list-noactive"
                        id="home-product-stop"
                        role="tabpanel"
                        aria-labelledby="home-product-stop-tab"
                        tabIndex="0"
                    >
                        <TableProduct products={productList} status="table-danger" />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="add-product"
                        role="tabpanel"
                        aria-labelledby="add-product-tab"
                        tabIndex="0"
                    >
                        <div className="form-input-add-product">
                            <FormAddProduct />
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="update-image"
                        role="tabpanel"
                        aria-labelledby="update-image-tab"
                        tabIndex="0"
                    >
                        This is Update images
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductAdmin;
