import React, { Component } from 'react';
import '../style/productdetail.css';
import Product from '../components/common/Product';
import BackToTop from '../components/common/BackToTop';
import Header from '../components/Header';

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
                description: 'chua co mo ta',
                oldice: 25990000,
                discountrcentage: 25,
                finalice: 14990000,
            },
        };
    }

    render() {
        const { product } = this.state;
        return (
            <div>
                <Header />
                <div className="container">
                    <BackToTop />
                    <div className="product-detail">
                        <div className="product-detail-top">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item link-item">
                                        <a href="/">Trang chủ</a>
                                    </li>
                                    <li className="breadcrumb-item link-item">
                                        <a href="/">Asus</a>
                                    </li>
                                    <li className="breadcrumb-item link-item active" aria-current="page">
                                        {product.name}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="product-detail-main">
                            <div className="product-detail-name">{product.name}</div>
                            <div className="row g-5 product-detail-main-list">
                                {/* Images */}
                                <div className="product-detail-main-item col">
                                    <div className="product-detail-main-item-img">
                                        <div id="carouselExampleIndicators" className="carousel slide">
                                            <div className="carousel-indicators image-mini-list">
                                                <div
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="0"
                                                    className="active image-mini-item"
                                                    aria-current="true"
                                                    aria-label="Slide 1"
                                                    style={{
                                                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/product-test.jpg)`,
                                                    }}
                                                ></div>
                                                <div
                                                    className="image-mini-item"
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="1"
                                                    aria-label="Slide 2"
                                                    style={{
                                                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/product-test2.png)`,
                                                    }}
                                                ></div>
                                                <div
                                                    className="image-mini-item"
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="2"
                                                    aria-label="Slide 3"
                                                    style={{
                                                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/product-test3.png)`,
                                                    }}
                                                ></div>
                                                <div
                                                    className="image-mini-item"
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="2"
                                                    aria-label="Slide 3"
                                                    style={{
                                                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/product-test3.png)`,
                                                    }}
                                                ></div>
                                                <div
                                                    className="image-mini-item"
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="2"
                                                    aria-label="Slide 3"
                                                    style={{
                                                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/product-test3.png)`,
                                                    }}
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
                                {/* Input value quantity, order, add to cart */}
                                <div className="product-detail-main-item col">
                                    <p className="price-sale">{product.finalice.toLocaleString()} Đ</p>
                                    <div className="old-price">
                                        <b>Giá gốc: </b>
                                        <del>{product.oldice.toLocaleString()}Đ</del>
                                        <span>-{product.discountrcentage}%</span>
                                    </div>
                                    <div className="product-control">
                                        <div className="product-quantity">
                                            <p className="product-quantity-title">Số lượng: </p>
                                            <button type="button" className="btn btn-outline-secondary de-quantity">
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                className="form-control product-quantity-input"
                                                defaultValue={1}
                                                min={1}
                                            />
                                            <button type="button" className="btn btn-outline-secondary in-quantity">
                                                +
                                            </button>
                                        </div>

                                        <div className="btn-control">
                                            <button type="button" className="btn btn-primary btn-control-item btn-cart">
                                                Thêm vào giỏ hàng
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-secondary btn-control-item btn-order"
                                            >
                                                Mua ngay
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-detail-main-item col">
                                    <div className="product-warranty">
                                        <h3 className="product-title-2">Thông tin bảo hành</h3>
                                        <div className="product-2-content">
                                            <p>✅Bảo hành 12 tháng Laptop88</p>
                                            <p className="p1">✅ MIỄN PHÍ GIAO HÀNG TẬN NHÀ</p>
                                            <p className="p1">
                                                - Với đơn hàng &lt; 4.000.000 đồng: Miễn phí giao hàng cho đơn hàng &lt;
                                                5km tính từ cửa hàng Laptop88 gần nhất
                                            </p>
                                            <p className="p1">
                                                - Với đơn hàng &gt; 4.000.000 đồng: Miễn phí giao hàng (khách hàng chịu
                                                phí bảo hiểm hàng hóa nếu có)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="product-yentammuahang">
                                        <h3 className="product-title-2">Yên tâm mua hàng</h3>
                                        <div className="product-2-content product-3-content">
                                            <p>Hệ thống cửa hàng toàn quốc</p>
                                            <p>Đại lý phân phối chính hãng</p>
                                            <p>Giá luôn tốt nhất</p>
                                            <p>Hỗ trợ trả góp lãi suất thấp</p>
                                            <p>Bảo hành dài, hậu mãi chu đáo</p>
                                            <p>Miễn phí giao hàng toàn quốc</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-detail-info row gx-5">
                            <div className="product-detail-info-left col col-8">
                                <h3 className="product-detail-info-title">
                                    <span>Đặc điểm nổi bật</span>
                                </h3>
                                <div className="product-detail-info-content">
                                    <h1>{product.name}</h1>
                                    <p>Chua co mo ta</p>
                                </div>
                            </div>
                            <div className="product-detail-info-right col col-4">
                                <h3 className="product-detail-info-title">
                                    <span>Thông số kỹ thuật</span>
                                </h3>
                                <div className="product-detail-info-content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Processor</td>
                                                <td>
                                                    Intel® Core™ i7-1355U, 10C (2P + 8E) / 12T, P-core 1.7 / 4.7GHz,
                                                    E-core 1.2 / 3.5GHz, 12MB
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Graphics</td>
                                                <td>Intel® Iris® Xe Graphics</td>
                                            </tr>
                                            <tr>
                                                <td>Memory</td>
                                                <td>16GB Soldered LPDDR4x-4266</td>
                                            </tr>
                                            <tr>
                                                <td>Memory Slots</td>
                                                <td>Memory soldered to systemboard, no slots, dual-channel</td>
                                            </tr>
                                            <tr>
                                                <td>Max Memory</td>
                                                <td>16GB soldered memory, not upgradable</td>
                                            </tr>
                                            <tr>
                                                <td>Storage</td>
                                                <td>SSD 1TB PCIe® 4.0x4 NVMe®</td>
                                            </tr>
                                            <tr>
                                                <td>Card Reader</td>
                                                <td>4-in-1 Card Reader</td>
                                            </tr>
                                            <tr>
                                                <td>Audio Chip</td>
                                                <td>High Definition (HD) Audio, Realtek® ALC3287 codec</td>
                                            </tr>
                                            <tr>
                                                <td>Microphone</td>
                                                <td>2x, Array</td>
                                            </tr>
                                            <tr>
                                                <td>Camera</td>
                                                <td>FHD 1080p with Privacy Shutter</td>
                                            </tr>
                                            <tr>
                                                <td>Speakers</td>
                                                <td>
                                                    Front-facing stereo speakers, 2W x2, optimized with Dolby® Audio™
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Battery</td>
                                                <td>59Wh</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="product-detail-comment col col-8">
                            <h3 className="product-detail-same-title">Đánh giá của sản phẩm {product.name}</h3>
                            <div className="product-detail-comment-list">
                                <div className="product-detail-comment-item">
                                    <div className="comment-top">
                                        <h4 className="comment-user-name">Hoàng Huy</h4>
                                        <div className="comment-date">25-05-2024</div>
                                    </div>
                                    <div className="comment-rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                    </div>
                                    <p className="comment-content">
                                        Laptop này đ��p và giá cả tốt. Tuy nhiên, có v�� nh�� hơn so với laptop của
                                        mình. Mình ngh�� nên sử dụng cho người đã có laptop c��.
                                    </p>
                                </div>
                                <div className="product-detail-comment-item">
                                    <div className="comment-top">
                                        <h4 className="comment-user-name">Hoàng Huy</h4>
                                        <div className="comment-date">25-05-2024</div>
                                    </div>
                                    <div className="comment-rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                    </div>
                                    <p className="comment-content">
                                        Laptop này đ��p và giá cả tốt. Tuy nhiên, có v�� nh�� hơn so với laptop của
                                        mình. Mình ngh�� nên sử dụng cho người đã có laptop c��.
                                    </p>
                                </div>
                                <div className="product-detail-comment-item">
                                    <div className="comment-top">
                                        <h4 className="comment-user-name">Hoàng Huy</h4>
                                        <div className="comment-date">25-05-2024</div>
                                    </div>
                                    <div className="comment-rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                    </div>
                                    <p className="comment-content">
                                        Laptop này đ��p và giá cả tốt. Tuy nhiên, có v�� nh�� hơn so với laptop của
                                        mình. Mình ngh�� nên sử dụng cho người đã có laptop c��.
                                    </p>
                                </div>
                            </div>
                            <div className="comment-control">
                                <button type="button" className="btn btn-info btn-comment">
                                    Xem tất cả đánh giá
                                </button>
                            </div>
                        </div>
                        <div className="product-detail-same">
                            <h3 className="product-detail-same-title">Sản phẩm liên quan</h3>
                            <div className="product-detail-same-item">
                                <Product />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;
