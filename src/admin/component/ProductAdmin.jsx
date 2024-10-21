import React, { useEffect, useState } from 'react';
import '../style/product-admin.css';
import TableProduct from '../utils/TableProduct';
import FormAddProduct from '../utils/FormAddProduct';
import FormAddImg from '../utils/FormAddImg';
import productService from '../../services/productService';
import supplierService from '../../services/supplierService';
import saleService from '../../services/saleService';
import brandService from '../../services/brandService';

const ProductAdmin = () => {
    const [productListActive, setProductListActive] = useState([]);
    const [productListNotActive, setProductListNotActive] = useState([]);
    const [productNotImage, setProductNotImage] = useState([]);
    const [suppliers, setSupplier] = useState([]);
    const [sales, setSale] = useState([]);
    const [brands, setBands] = useState([]);

    const fetchProductListActive = async () => {
        try {
            const response = await productService.getAllProductActive();
            // Add handle for error at here
            setProductListActive(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log('errors fetch data product active: ' + error);
        }
    };
    const fetchProductListNotActive = async () => {
        try {
            const response = await productService.getAllProductNotActive();
            // Add handle for error at here
            setProductListNotActive(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log('errors fetch data product active: ' + error);
        }
    };
    const fetchProductListNotImage = async () => {
        try {
            const response = await productService.getAllProductNotImage();
            // Add handle for error at here
            setProductNotImage(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log('errors fetch data product active: ' + error);
        }
    };

    const addProductNotImage = (newProduct) => {
        newProduct.forEach((item) => {
            setProductListNotActive((prevProducts) => [...prevProducts, item]);
        });
    };

    const addImageForProduct = () => {
        fetchProductListActive();
    };

    const fetchSuppliers = async () => {
        try {
            const response = await supplierService.getAllSuppliers();
            setSupplier(response.data);
        } catch (error) {
            console.log('errors fetch data supplier: ' + error);
        }
    };

    const fetchSales = async () => {
        try {
            const response = await saleService.getAllSales();
            setSale(response.data);
        } catch (error) {
            console.log('errors fetch data sale at product-admin: ' + error);
        }
    };

    const fetchBrand = async () => {
        try {
            const response = await brandService.getAllBrand();
            setBands(response.data);
        } catch (error) {
            console.log('errors fetch data brand at product-admin: ' + error);
        }
    };

    useEffect(() => {
        fetchProductListActive();
        fetchProductListNotActive();
        fetchProductListNotImage();
        fetchSuppliers();
        fetchSales();
        fetchBrand();
    }, []);

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
                        <TableProduct products={productListActive} status="table-info" />
                    </div>
                    <div
                        className="tab-pane fade product-list-noactive"
                        id="home-product-stop"
                        role="tabpanel"
                        aria-labelledby="home-product-stop-tab"
                        tabIndex="0"
                    >
                        <TableProduct products={productListNotActive} status="table-danger" />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="add-product"
                        role="tabpanel"
                        aria-labelledby="add-product-tab"
                        tabIndex="0"
                    >
                        <div className="form-input-add-product">
                            <FormAddProduct
                                listBrand={brands}
                                listSale={sales}
                                listSupplier={suppliers}
                                handleReRenderTable={addProductNotImage}
                            />
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="update-image"
                        role="tabpanel"
                        aria-labelledby="update-image-tab"
                        tabIndex="0"
                    >
                        <FormAddImg products={productNotImage} handleUpdateTable={addImageForProduct} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductAdmin;
