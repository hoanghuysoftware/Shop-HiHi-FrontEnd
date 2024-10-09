import React from 'react';

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
                        className="tab-pane fade show active"
                        id="home-product"
                        role="tabpanel"
                        aria-labelledby="home-product-tab"
                        tabindex="0"
                    >
                        <table className="table table-hover">
                            <thead className="table-success">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div
                        className="tab-pane fade "
                        id="home-product-stop"
                        role="tabpanel"
                        aria-labelledby="home-product-stop-tab"
                        tabindex="0"
                    >
                        <table className="table table-hover">
                            <thead className="table-danger">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="add-product"
                        role="tabpanel"
                        aria-labelledby="add-product-tab"
                        tabindex="0"
                    >
                        This is add new product
                    </div>
                    <div
                        className="tab-pane fade"
                        id="update-image"
                        role="tabpanel"
                        aria-labelledby="update-image-tab"
                        tabindex="0"
                    >
                        This is Update images
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductAdmin;
