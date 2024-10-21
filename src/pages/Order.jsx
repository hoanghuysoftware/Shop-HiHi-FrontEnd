import React, { useEffect, useState } from 'react';
import '../style/order.css';
import { Link, useParams } from 'react-router-dom';
import orderService from '../services/orderService';
import reviewService from '../services/reviewService';

const Order = () => {
    const pathname = useParams();
    const idOrder = parseInt(pathname.orderId);
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [order, setOrder] = useState();
    const [ratedProducts, setRatedProducts] = useState([]);

    const loadDataOrder = async (idOrder) => {
        try {
            const response = await orderService.getOrderByIdOrder(idOrder);
            setOrder(response.data);
        } catch (error) {
            console.log('Error loading data order at Order.jsx: ', error);
        }
    };

    const handleImage = (image) => {
        if (image !== undefined) return `data:image/jpeg;base64,${image}`;
    };

    const handleChangeContent = (e) => {
        setContent(e.target.value);
    };

    const handleSubmitReview = async (idProduct) => {
        const dataPost = {
            content: content,
            rating: rating,
            'order-id': idOrder,
            'product-id': idProduct,
        };

        try {
            await reviewService.addNewReview(dataPost);
            alert('Added review successfully !');
            loadProductExistsReview(idOrder);
        } catch (error) {
            console.log('Error while adding review for product: ', error);
        }
    };

    const loadProductExistsReview = async (orderId) => {
        try {
            const response = await reviewService.getProductExistsReviewByOrder(orderId);
            setRatedProducts(response.data);
        } catch (error) {
            console.log('Error while loading product exists review for product: ', error);
        }
    };

    useEffect(
        () => {
            loadDataOrder(idOrder);
            loadProductExistsReview(idOrder);
        },
        [idOrder],
        loadProductExistsReview,
    );

    if (!order) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="container">
                <div className="order-body">
                    <div className="order-top">
                        <button type="button" className="btn btn-outline-secondary">
                            <Link
                                to={`/user/${2}/info?tab=order-history`}
                                style={{ color: 'unset', textDecoration: 'none' }}
                            >
                                <i className="me-1 fa-solid fa-angle-left"></i>
                                Trở về
                            </Link>
                        </button>
                        <div className="order-top-id-status">
                            <div className="order-top-id">
                                MÃ ĐƠN HÀNG: <span>{order.id}</span>
                            </div>
                            <div className="order-top-status">{order.status.name}</div>
                        </div>
                    </div>
                    <div className="order-info-user">
                        <h3 className="order-title">Địa chỉ nhận hàng</h3>
                        <div className="order-info-user-content">
                            <h4 className="order-info-user-name">{order.user.name}</h4>
                            <p className="order-info-user-phone">{order.user.phoneNumber}</p>
                            <p className="order-info-user-address">{order.deliveryAddress}</p>
                        </div>
                    </div>
                    <div className="order-info-product">
                        <h3 className="order-title">Sản phẩm trong đơn hàng</h3>

                        {order.orderDetails.map((item, index) => (
                            <div key={index} className="order-product-item row gx-2">
                                <div className="col col-2 order-product-item-img">
                                    <img src={handleImage(item.product.thumbnail)} alt="" />
                                </div>
                                <div className="col col-10 order-product-item-content">
                                    <h5 className="order-product-item-name">{item.product.name}</h5>
                                    <div className="order-product-item-quantity-price">
                                        <div className="order-product-item-quantity">x{item.quantity}</div>
                                        <div className="order-product-item-price">
                                            <del className="order-product-item-price-origin">
                                                {item.unitPrice.toLocaleString()}đ
                                            </del>
                                            <p className="order-product-item-price-sale">
                                                {item.unitPrice.toLocaleString()}đ
                                            </p>
                                        </div>
                                    </div>
                                    {!ratedProducts.includes(item.product.id) && (
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target={`#comment-${index}`}
                                        >
                                            Đánh giá
                                        </button>
                                    )}

                                    <div
                                        className="modal fade"
                                        id={`comment-${index}`}
                                        tabIndex="-1"
                                        aria-labelledby={`commentLabel-${index}`}
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id={`commentLabel-${index}`}>
                                                        Nhập bình luận
                                                    </h1>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="comment-product-list">
                                                        <div key={index} className="comment-product-item row">
                                                            <div className="col col-3 comment-product-item-img">
                                                                <img src={handleImage(item.product.thumbnail)} alt="" />
                                                            </div>
                                                            <div className="col col-9 comment-product-item-name">
                                                                {item.product.name}
                                                                <div className="order-product-item-price">
                                                                    <del className="order-product-item-price-origin">
                                                                        {item.unitPrice.toLocaleString()}đ
                                                                    </del>
                                                                    <p className="order-product-item-price-sale">
                                                                        {item.unitPrice.toLocaleString()}đ
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col col-12 comment-product-item-input">
                                                                <h4 className="comment-product-item-rating-title">
                                                                    Chất lượng sản phẩm
                                                                </h4>
                                                                <div className="comment-product-item-rating">
                                                                    {[...Array(5)].map((star, index) => {
                                                                        const ratingValue = index + 1;
                                                                        return (
                                                                            <i
                                                                                key={index}
                                                                                className={
                                                                                    ratingValue <= (hover || rating)
                                                                                        ? 'fa-solid fa-star star'
                                                                                        : 'fa-regular fa-star star'
                                                                                }
                                                                                style={{
                                                                                    color:
                                                                                        ratingValue <= (hover || rating)
                                                                                            ? '#ffc107'
                                                                                            : '#e4e5e9',
                                                                                    cursor: 'pointer',
                                                                                }}
                                                                                onClick={() => setRating(ratingValue)}
                                                                                onMouseEnter={() =>
                                                                                    setHover(ratingValue)
                                                                                }
                                                                                onMouseLeave={() => setHover(0)}
                                                                            ></i>
                                                                        );
                                                                    })}
                                                                </div>
                                                                <div className="form-floating">
                                                                    <textarea
                                                                        className="form-control"
                                                                        placeholder="Leave a comment here"
                                                                        id="comment-input"
                                                                        onChange={handleChangeContent}
                                                                        value={content}
                                                                        style={{ height: '100px' }}
                                                                    ></textarea>
                                                                    <label
                                                                        className="label-comment-input"
                                                                        htmlFor="comment-input"
                                                                    >
                                                                        Nhập đánh giá tại đây
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Đóng
                                                    </button>
                                                    <button
                                                        onClick={() => handleSubmitReview(item.product.id)}
                                                        type="button"
                                                        className="btn btn-primary"
                                                    >
                                                        Lưu đánh giá
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="order-info-bottom">
                        <div className="order-bottom-item">
                            <h4 className="order-bottom-total-price-title">Tổng tiền hàng</h4>
                            <p className="order-bottom-total-price-value">{order.totalPrice.toLocaleString()}đ</p>
                        </div>
                        <div className="order-bottom-item">
                            <h4 className="order-bottom-total-price-title">Phương thức thanh toán</h4>
                            <p className="order-bottom-pay-method">
                                {order.paymentMethod === 'OFFLINE' ? 'Thanh toán khi nhận' : 'Thanh toán trực tuyến'}
                            </p>
                        </div>
                        <div className="order-bottom-item text-left">
                            <h4 className="order-bottom-note">Ghi chú:</h4>
                            <p className="order-bottom-note-content">{order.note}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
