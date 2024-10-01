import React, { Component } from 'react';
import '../../style/productdetail.css';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: 1,
                name: '[New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX 6550M | 15.6 inch Full HD 144Hz',
                thumbnail: '/images/product-test.jpg',
                cpu: 'R5 - 7535HS',
                ram: '8GB DDR5',
                storage: 'SSD 512GB NVMe',
                card: 'Radeon RX 6550M',
                display: '15.6" FHD 144Hz',
                oldice: 25990000,
                discountrcentage: 25,
                finalice: 14990000,
            },
        };
    }

    render() {
        const { product } = this.state;
        return (
            <div className="container">
                <div className="product-detail">
                    <div className="product-detail-top">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">Trang chủ</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="/">Asus</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {product.name}
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="product-detail-main">
                        <div className="product-detail-name">{product.name}</div>
                        <div className="row g-5 product-detail-main-list">
                            <div className="product-detail-main-item col">
                                <div className="product-detail-main-item-img">
                                    <div id="carouselExampleIndicators" className="carousel slide">
                                        <div className="carousel-indicators">
                                            <div
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to="0"
                                                className="active"
                                                aria-current="true"
                                                aria-label="Slide 1"
                                                style={{
                                                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/product-test.jpg)`,
                                                }}
                                            ></div>
                                            <div
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to="1"
                                                aria-label="Slide 2"
                                            ></div>
                                            <div
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to="2"
                                                aria-label="Slide 3"
                                            ></div>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                                    className="d-block w-100"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/images/product-test2.png`}
                                                    className="d-block w-100"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/images/product-test3.png`}
                                                    className="d-block w-100"
                                                    alt="..."
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide="prev"
                                        >
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide="next"
                                        >
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="product-detail-main-item col"></div>
                            <div className="product-detail-main-item col"></div>
                        </div>
                    </div>
                    <div className="product-detail-info"></div>
                    <div className="product-detail-same"></div>
                    <div className="product-detail-comment"></div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;
