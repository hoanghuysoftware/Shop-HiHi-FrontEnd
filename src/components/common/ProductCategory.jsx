import React from 'react';
import '../../style/product.css';
import { Link } from 'react-router-dom';

const ProductCategory = ({ listProduct }) => {
    const handleImage = (image) => {
        if (image !== undefined) return `data:image/jpeg;base64,${image}`;
    };

    if (listProduct.length === 0) {
        return <div className="text-center">Không có sản phẩm nào</div>;
    }

    return (
        <div className="product-list row row-cols-lg-5 g-2">
            {listProduct.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`}>
                    <div className="product-item col shadow rounded">
                        <div className="product-item__img">
                            <img src={handleImage(item.thumbnail)} alt="" className="product-item__img-data" />
                        </div>
                        <div className="product-item__info">
                            <div className="product-item-title">{item.name}</div>
                            <div className="product-item-promotion">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>CPU</td>
                                            <td>{item.cpu}</td>
                                        </tr>
                                        <tr>
                                            <td>RAM</td>
                                            <td>{item.ram}</td>
                                        </tr>
                                        <tr>
                                            <td>Ổ.cứng</td>
                                            <td>{item.rom}</td>
                                        </tr>
                                        <tr>
                                            <td>Card</td>
                                            <td>{item.card}</td>
                                        </tr>
                                        <tr>
                                            <td>M.Hình</td>
                                            <td>{item.screen}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="product-item-price">
                                <div className="price-top">
                                    <del className="old-price">{item.salePrice.toLocaleString()} đ</del>
                                    <p className="price-saleoff">-{item.discount.amount}%</p>
                                </div>
                                <div className="price-bottom">
                                    <span className="item-price">{item.salePrice.toLocaleString()} đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductCategory;
