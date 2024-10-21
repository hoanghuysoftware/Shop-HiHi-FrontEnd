import React, { useEffect, useState } from 'react';
import '../style/productdetail.css';
import Product from '../components/common/Product';
import BackToTop from '../components/common/BackToTop';
import { Link, useParams, useNavigate } from 'react-router-dom';
import productService from '../services/productService';
import cartService from '../services/cartService';
import reviewService from '../services/reviewService';
import Loadding from '../components/common/Loadding';

const ProductDetail = () => {
    const navigate = useNavigate();
    const pathname = useParams();
    const idProduct = parseInt(pathname.productId);
    const [product, setProduct] = useState(null);
    const [listImages, setListImages] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [review, setReview] = useState([]);

    const fetchProduct = async (idProduct) => {
        try {
            const response = await productService.getProductById(idProduct);
            setProduct(response.data);
        } catch (error) {
            console.log('Error fetch product from Product Details: ' + error.message);
        }
    };

    const fetchImages = async (idProduct) => {
        try {
            const response = await productService.getImagesByIdProduct(idProduct);
            setListImages(response.data);
        } catch (error) {
            console.log('Error fetch img from Product Details: ' + error.message);
        }
    };

    const fetchDataReview = async (idProduct) => {
        try {
            const response = await reviewService.getAllReviewByProductId(idProduct);
            setReview(response.data.reverse());
        } catch (error) {
            console.log('Error fetch review from Product Details: ' + error.message);
        }
    };

    const handleImagesBase64 = (image) => {
        if (image !== undefined) return `data:image/jpeg;base64,${image}`;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProduct(idProduct);
        fetchImages(idProduct);
        fetchDataReview(idProduct);
    }, [idProduct]);
    console.log(review);

    if (!product) {
        return <Loadding />;
    }
    if (!listImages.length === 0) {
        return <Loadding />;
    }

    const handleChangeInput = (e) => {
        setQuantity(parseInt(e.target.value));
    };
    const handleIncrement = (e) => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };
    const handleDecrement = (e) => {
        if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
    };

    const addToCart = async () => {
        const data = {
            quantity: quantity,
            'product-id': idProduct,
        };

        try {
            await cartService.addToCart(2, data);
            navigate(`/user/${2}/cart`); // chuyen den gio hang cua user co id = 2
        } catch (error) {
            console.log('Error adding to cart: ', error);
        }
    };

    return (
        <div>
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
                                            {listImages.map((item, index) => (
                                                <div
                                                    key={index}
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={index}
                                                    className="active image-mini-item"
                                                    aria-current="true"
                                                    aria-label={`Slide ${index + 1}`}
                                                    style={{
                                                        backgroundImage: `url(${handleImagesBase64(item.dataImage)})`,
                                                    }}
                                                ></div>
                                            ))}
                                        </div>
                                        <div className="carousel-inner">
                                            {listImages.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                                >
                                                    <img
                                                        src={`${handleImagesBase64(item.dataImage)}`}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                            ))}
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
                                <p className="price-sale">{product.salePrice.toLocaleString()} Đ</p>
                                <div className="old-price">
                                    <b>Giá gốc: </b>
                                    <del>{product.salePrice.toLocaleString()}Đ</del>
                                    <span>-{product.discount.amount}%</span>
                                </div>
                                <div className="product-control">
                                    <div className="product-quantity">
                                        <p className="product-quantity-title">Số lượng: </p>
                                        <button
                                            onClick={handleDecrement}
                                            type="button"
                                            className="btn btn-outline-secondary de-quantity"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="form-control product-quantity-input"
                                            min={1}
                                            name="quantity"
                                            value={quantity}
                                            onChange={handleChangeInput}
                                        />
                                        <button
                                            onClick={handleIncrement}
                                            type="button"
                                            className="btn btn-outline-secondary in-quantity"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className="btn-control">
                                        {/* <Link to={`/user/${1}/cart`}> */}
                                        <button
                                            onClick={addToCart}
                                            type="button"
                                            className="btn btn-primary btn-control-item btn-cart"
                                        >
                                            Thêm vào giỏ hàng
                                        </button>
                                        {/* </Link> */}
                                        <button type="button" className="btn btn-secondary btn-control-item btn-order">
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
                                            - Với đơn hàng &lt; 4.000.000 đồng: Miễn phí giao hàng cho đơn hàng &lt; 5km
                                            tính từ cửa hàng Laptop88 gần nhất
                                        </p>
                                        <p className="p1">
                                            - Với đơn hàng &gt; 4.000.000 đồng: Miễn phí giao hàng (khách hàng chịu phí
                                            bảo hiểm hàng hóa nếu có)
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
                                <p style={{ textAlign: 'justify' }}>{product.description}</p>
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
                                            <td>{product.cpu}</td>
                                        </tr>
                                        <tr>
                                            <td>Graphics</td>
                                            <td>{product.card}</td>
                                        </tr>
                                        <tr>
                                            <td>Memory</td>
                                            <td>{product.rom}</td>
                                        </tr>
                                        <tr>
                                            <td>Memory Slots</td>
                                            <td>Memory soldered to systemboard, no slots, dual-channel</td>
                                        </tr>
                                        <tr>
                                            <td>Max Memory</td>
                                            <td>{product.ram}</td>
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
                                            <td>Front-facing stereo speakers, 2W x2, optimized with Dolby® Audio™</td>
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
                            {review.map((item, index) => (
                                <div key={index} className="product-detail-comment-item">
                                    <div className="comment-top">
                                        <h4 className="comment-user-name">{item.nameCustomer}</h4>
                                        <div className="comment-date">{item.dateTime}</div>
                                    </div>
                                    <div className="comment-rating">
                                        {Array.from({ length: item.rating }, (_, index) => (
                                            <i key={index} className="fa-solid fa-star"></i>
                                        ))}
                                        {/* <i className="fa-regular fa-star-half-stroke"></i> */}
                                    </div>
                                    <p className="comment-content">{item.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className="comment-control">
                            <Link to={`/comment/${product.id}`}>
                                <button type="button" className="btn btn-info btn-comment">
                                    Xem tất cả đánh giá
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="product-detail-same">
                        <h3 className="product-detail-same-title">Sản phẩm liên quan</h3>
                        <div className="product-detail-same-item">
                            <Product brandId={product.brand.id} size={10} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
