import React, { Component } from 'react';
import '../style/comment.css';
import Header from '../components/Header';
import BackToTop from '../components/common/BackToTop';
import { Link } from 'react-router-dom';

class Comment extends Component {
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
                    <div className="comment-body row">
                        <div className="comment-content col-8">
                            <Link to={`/product/${1}`}>
                                <button type="button" class="mb-3 px-5 btn btn-outline-primary">
                                    Trở về
                                </button>
                            </Link>
                            <h3 className="comment-title">
                                <span>7 đánh giá cho sản phẩm</span>
                                [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX 6550M | 15.6
                                inch Full HD 144Hz
                            </h3>
                            <div className="row gx-3 comment-top">
                                <div className="col col-6 comment-top-left">
                                    <div className="comment-img">
                                        <img
                                            className="comment-img-data"
                                            src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                            alt=""
                                            srcset=""
                                        />
                                        <div className="comment-img-name">{product.name}</div>
                                    </div>
                                </div>
                                <div className="col col-6 comment-top-right">
                                    <div className="comment-right-rating">
                                        <span>4.3</span>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                    </div>
                                    <button type="button" className="btn btn-primary">
                                        Viết đánh giá
                                    </button>
                                </div>
                            </div>
                            <div className="comment-list">
                                <div className="comment-item">
                                    <div className="comment-item-top">
                                        <h3 className="comment-item-name">Hoàng Huy</h3>
                                        <div className="comment-item-date">25-05-2024</div>
                                    </div>
                                    <div className="comment-item-rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                    </div>
                                    <div className="comment-item-content">
                                        <p>
                                            Nói chung dùng cũng ok nhưng mới dùng sau ko rõ có gặp lỗi gì hay không thì
                                            chưa biết hàng ổn đẹp
                                        </p>
                                    </div>
                                </div>
                                <div className="comment-item">
                                    <div className="comment-item-top">
                                        <h3 className="comment-item-name">Hoàng Huy</h3>
                                        <div className="comment-item-date">25-05-2024</div>
                                    </div>
                                    <div className="comment-item-rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                    </div>
                                    <div className="comment-item-content">
                                        <p>
                                            Nói chung dùng cũng ok nhưng mới dùng sau ko rõ có gặp lỗi gì hay không thì
                                            chưa biết hàng ổn đẹp
                                        </p>
                                    </div>
                                </div>
                                <div className="comment-item">
                                    <div className="comment-item-top">
                                        <h3 className="comment-item-name">Hoàng Huy</h3>
                                        <div className="comment-item-date">25-05-2024</div>
                                    </div>
                                    <div className="comment-item-rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                    </div>
                                    <div className="comment-item-content">
                                        <p>
                                            Nói chung dùng cũng ok nhưng mới dùng sau ko rõ có gặp lỗi gì hay không thì
                                            chưa biết hàng ổn đẹp
                                        </p>
                                    </div>
                                </div>
                                <div className="comment-item">
                                    <div className="comment-item-top">
                                        <h3 className="comment-item-name">Hoàng Huy</h3>
                                        <div className="comment-item-date">25-05-2024</div>
                                    </div>
                                    <div className="comment-item-rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                    </div>
                                    <div className="comment-item-content">
                                        <p>
                                            Nói chung dùng cũng ok nhưng mới dùng sau ko rõ có gặp lỗi gì hay không thì
                                            chưa biết hàng ổn đẹp
                                        </p>
                                    </div>
                                </div>
                                <div className="comment-item">
                                    <div className="comment-item-top">
                                        <h3 className="comment-item-name">Hoàng Huy</h3>
                                        <div className="comment-item-date">25-05-2024</div>
                                    </div>
                                    <div className="comment-item-rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                    </div>
                                    <div className="comment-item-content">
                                        <p>
                                            Nói chung dùng cũng ok nhưng mới dùng sau ko rõ có gặp lỗi gì hay không thì
                                            chưa biết hàng ổn đẹp
                                        </p>
                                    </div>
                                </div>
                                <div className="comment-item">
                                    <div className="comment-item-top">
                                        <h3 className="comment-item-name">Hoàng Huy</h3>
                                        <div className="comment-item-date">25-05-2024</div>
                                    </div>
                                    <div className="comment-item-rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                    </div>
                                    <div className="comment-item-content">
                                        <p>
                                            Nói chung dùng cũng ok nhưng mới dùng sau ko rõ có gặp lỗi gì hay không thì
                                            chưa biết hàng ổn đẹp
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;
