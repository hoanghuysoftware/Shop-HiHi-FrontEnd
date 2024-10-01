import React, { Component } from 'react';
import '../../style/product.css';

class Product extends Component {
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
            <div className="product-list row row-cols-lg-5 gy-3">
                <div className="product-item col" key={product.id}>
                    <div className="product-item__img">
                        <img
                            src={`${process.env.PUBLIC_URL}${product.thumbnail}`}
                            alt=""
                            className="product-item__img-data"
                        />
                    </div>
                    <div className="product-item__info">
                        <div className="product-item-title">{product.name}</div>
                        <div className="product-item-promotion">
                            <table>
                                <tr>
                                    <td>CPU</td>
                                    <td>{product.cpu}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{product.ram}</td>
                                </tr>
                                <tr>
                                    <td>Ổ.cứng</td>
                                    <td>{product.storage}</td>
                                </tr>
                                <tr>
                                    <td>Card</td>
                                    <td>{product.card}</td>
                                </tr>
                                <tr>
                                    <td>M.Hình</td>
                                    <td>{product.display}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="product-item-price">
                            <div className="price-top">
                                <del className="old-price">{product.oldice.toLocaleString()} đ</del>
                                <p className="price-saleoff">-{product.discountrcentage}%</p>
                            </div>
                            <div className="price-bottom">
                                <span className="item-price">{product.finalice.toLocaleString()} đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-item col" key={product.id}>
                    <div className="product-item__img">
                        <img
                            src={`${process.env.PUBLIC_URL}${product.thumbnail}`}
                            alt=""
                            className="product-item__img-data"
                        />
                    </div>
                    <div className="product-item__info">
                        <div className="product-item-title">{product.name}</div>
                        <div className="product-item-promotion">
                            <table>
                                <tr>
                                    <td>CPU</td>
                                    <td>{product.cpu}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{product.ram}</td>
                                </tr>
                                <tr>
                                    <td>Ổ.cứng</td>
                                    <td>{product.storage}</td>
                                </tr>
                                <tr>
                                    <td>Card</td>
                                    <td>{product.card}</td>
                                </tr>
                                <tr>
                                    <td>M.Hình</td>
                                    <td>{product.display}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="product-item-price">
                            <div className="price-top">
                                <del className="old-price">{product.oldice.toLocaleString()} đ</del>
                                <p className="price-saleoff">-{product.discountrcentage}%</p>
                            </div>
                            <div className="price-bottom">
                                <span className="item-price">{product.finalice.toLocaleString()} đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-item col" key={product.id}>
                    <div className="product-item__img">
                        <img
                            src={`${process.env.PUBLIC_URL}${product.thumbnail}`}
                            alt=""
                            className="product-item__img-data"
                        />
                    </div>
                    <div className="product-item__info">
                        <div className="product-item-title">{product.name}</div>
                        <div className="product-item-promotion">
                            <table>
                                <tr>
                                    <td>CPU</td>
                                    <td>{product.cpu}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{product.ram}</td>
                                </tr>
                                <tr>
                                    <td>Ổ.cứng</td>
                                    <td>{product.storage}</td>
                                </tr>
                                <tr>
                                    <td>Card</td>
                                    <td>{product.card}</td>
                                </tr>
                                <tr>
                                    <td>M.Hình</td>
                                    <td>{product.display}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="product-item-price">
                            <div className="price-top">
                                <del className="old-price">{product.oldice.toLocaleString()} đ</del>
                                <p className="price-saleoff">-{product.discountrcentage}%</p>
                            </div>
                            <div className="price-bottom">
                                <span className="item-price">{product.finalice.toLocaleString()} đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-item col" key={product.id}>
                    <div className="product-item__img">
                        <img
                            src={`${process.env.PUBLIC_URL}${product.thumbnail}`}
                            alt=""
                            className="product-item__img-data"
                        />
                    </div>
                    <div className="product-item__info">
                        <div className="product-item-title">{product.name}</div>
                        <div className="product-item-promotion">
                            <table>
                                <tr>
                                    <td>CPU</td>
                                    <td>{product.cpu}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{product.ram}</td>
                                </tr>
                                <tr>
                                    <td>Ổ.cứng</td>
                                    <td>{product.storage}</td>
                                </tr>
                                <tr>
                                    <td>Card</td>
                                    <td>{product.card}</td>
                                </tr>
                                <tr>
                                    <td>M.Hình</td>
                                    <td>{product.display}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="product-item-price">
                            <div className="price-top">
                                <del className="old-price">{product.oldice.toLocaleString()} đ</del>
                                <p className="price-saleoff">-{product.discountrcentage}%</p>
                            </div>
                            <div className="price-bottom">
                                <span className="item-price">{product.finalice.toLocaleString()} đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-item col" key={product.id}>
                    <div className="product-item__img">
                        <img
                            src={`${process.env.PUBLIC_URL}${product.thumbnail}`}
                            alt=""
                            className="product-item__img-data"
                        />
                    </div>
                    <div className="product-item__info">
                        <div className="product-item-title">{product.name}</div>
                        <div className="product-item-promotion">
                            <table>
                                <tr>
                                    <td>CPU</td>
                                    <td>{product.cpu}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{product.ram}</td>
                                </tr>
                                <tr>
                                    <td>Ổ.cứng</td>
                                    <td>{product.storage}</td>
                                </tr>
                                <tr>
                                    <td>Card</td>
                                    <td>{product.card}</td>
                                </tr>
                                <tr>
                                    <td>M.Hình</td>
                                    <td>{product.display}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="product-item-price">
                            <div className="price-top">
                                <del className="old-price">{product.oldice.toLocaleString()} đ</del>
                                <p className="price-saleoff">-{product.discountrcentage}%</p>
                            </div>
                            <div className="price-bottom">
                                <span className="item-price">{product.finalice.toLocaleString()} đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-item col" key={product.id}>
                    <div className="product-item__img">
                        <img
                            src={`${process.env.PUBLIC_URL}${product.thumbnail}`}
                            alt=""
                            className="product-item__img-data"
                        />
                    </div>
                    <div className="product-item__info">
                        <div className="product-item-title">{product.name}</div>
                        <div className="product-item-promotion">
                            <table>
                                <tr>
                                    <td>CPU</td>
                                    <td>{product.cpu}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{product.ram}</td>
                                </tr>
                                <tr>
                                    <td>Ổ.cứng</td>
                                    <td>{product.storage}</td>
                                </tr>
                                <tr>
                                    <td>Card</td>
                                    <td>{product.card}</td>
                                </tr>
                                <tr>
                                    <td>M.Hình</td>
                                    <td>{product.display}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="product-item-price">
                            <div className="price-top">
                                <del className="old-price">{product.oldice.toLocaleString()} đ</del>
                                <p className="price-saleoff">-{product.discountrcentage}%</p>
                            </div>
                            <div className="price-bottom">
                                <span className="item-price">{product.finalice.toLocaleString()} đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-item col" key={product.id}>
                    <div className="product-item__img">
                        <img
                            src={`${process.env.PUBLIC_URL}${product.thumbnail}`}
                            alt=""
                            className="product-item__img-data"
                        />
                    </div>
                    <div className="product-item__info">
                        <div className="product-item-title">{product.name}</div>
                        <div className="product-item-promotion">
                            <table>
                                <tr>
                                    <td>CPU</td>
                                    <td>{product.cpu}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{product.ram}</td>
                                </tr>
                                <tr>
                                    <td>Ổ.cứng</td>
                                    <td>{product.storage}</td>
                                </tr>
                                <tr>
                                    <td>Card</td>
                                    <td>{product.card}</td>
                                </tr>
                                <tr>
                                    <td>M.Hình</td>
                                    <td>{product.display}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="product-item-price">
                            <div className="price-top">
                                <del className="old-price">{product.oldice.toLocaleString()} đ</del>
                                <p className="price-saleoff">-{product.discountrcentage}%</p>
                            </div>
                            <div className="price-bottom">
                                <span className="item-price">{product.finalice.toLocaleString()} đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-item col" key={product.id}>
                    <div className="product-item__img">
                        <img
                            src={`${process.env.PUBLIC_URL}${product.thumbnail}`}
                            alt=""
                            className="product-item__img-data"
                        />
                    </div>
                    <div className="product-item__info">
                        <div className="product-item-title">{product.name}</div>
                        <div className="product-item-promotion">
                            <table>
                                <tr>
                                    <td>CPU</td>
                                    <td>{product.cpu}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{product.ram}</td>
                                </tr>
                                <tr>
                                    <td>Ổ.cứng</td>
                                    <td>{product.storage}</td>
                                </tr>
                                <tr>
                                    <td>Card</td>
                                    <td>{product.card}</td>
                                </tr>
                                <tr>
                                    <td>M.Hình</td>
                                    <td>{product.display}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="product-item-price">
                            <div className="price-top">
                                <del className="old-price">{product.oldice.toLocaleString()} đ</del>
                                <p className="price-saleoff">-{product.discountrcentage}%</p>
                            </div>
                            <div className="price-bottom">
                                <span className="item-price">{product.finalice.toLocaleString()} đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-item col" key={product.id}>
                    <div className="product-item__img">
                        <img
                            src={`${process.env.PUBLIC_URL}${product.thumbnail}`}
                            alt=""
                            className="product-item__img-data"
                        />
                    </div>
                    <div className="product-item__info">
                        <div className="product-item-title">{product.name}</div>
                        <div className="product-item-promotion">
                            <table>
                                <tr>
                                    <td>CPU</td>
                                    <td>{product.cpu}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{product.ram}</td>
                                </tr>
                                <tr>
                                    <td>Ổ.cứng</td>
                                    <td>{product.storage}</td>
                                </tr>
                                <tr>
                                    <td>Card</td>
                                    <td>{product.card}</td>
                                </tr>
                                <tr>
                                    <td>M.Hình</td>
                                    <td>{product.display}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="product-item-price">
                            <div className="price-top">
                                <del className="old-price">{product.oldice.toLocaleString()} đ</del>
                                <p className="price-saleoff">-{product.discountrcentage}%</p>
                            </div>
                            <div className="price-bottom">
                                <span className="item-price">{product.finalice.toLocaleString()} đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-item col" key={product.id}>
                    <div className="product-item__img">
                        <img
                            src={`${process.env.PUBLIC_URL}${product.thumbnail}`}
                            alt=""
                            className="product-item__img-data"
                        />
                    </div>
                    <div className="product-item__info">
                        <div className="product-item-title">{product.name}</div>
                        <div className="product-item-promotion">
                            <table>
                                <tr>
                                    <td>CPU</td>
                                    <td>{product.cpu}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{product.ram}</td>
                                </tr>
                                <tr>
                                    <td>Ổ.cứng</td>
                                    <td>{product.storage}</td>
                                </tr>
                                <tr>
                                    <td>Card</td>
                                    <td>{product.card}</td>
                                </tr>
                                <tr>
                                    <td>M.Hình</td>
                                    <td>{product.display}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="product-item-price">
                            <div className="price-top">
                                <del className="old-price">{product.oldice.toLocaleString()} đ</del>
                                <p className="price-saleoff">-{product.discountrcentage}%</p>
                            </div>
                            <div className="price-bottom">
                                <span className="item-price">{product.finalice.toLocaleString()} đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
