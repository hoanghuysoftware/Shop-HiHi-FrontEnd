import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../style/cart.css';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import cartService from '../services/cartService';

const Cart = () => {
    const pathname = useParams();
    const userId = parseInt(pathname.userId);
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const fetchDataCart = async (idCart) => {
        try {
            const response = await cartService.getCart(idCart);
            setProducts(response.data.shoppingCartDetails);
            setTotalPrice(response.data.totalPrice);
            setTotalQuantity(response.data.totalQuantity);
        } catch (error) {
            console.log('Error fetch data cart with id: ' + idCart);
        }
    };

    const handleImagesBase64 = (image) => {
        if (image !== undefined) return `data:image/jpeg;base64,${image}`;
    };

    useEffect(() => {
        fetchDataCart(2);
    }, [userId]);

    const handleUpdate = async (idProduct, value) => {
        const data = {
            quantity: value,
            'product-id': idProduct,
        };
        try {
            await cartService.addToCart(2, data); // 2 => id cua cart

            fetchDataCart(2);
        } catch (error) {
            console.log('Error Update cart: ', error);
        }
    };

    return (
        <div>
            <Header />
            <div className="container">
                <Navbar />
                <h2 className="cart-title">Giỏ hàng</h2>
                <div className="row gx-2 cart-row">
                    <div className="col col-8 cart-row-left">
                        <div className="cart-content">
                            <div className="cart-list">
                                {products.map((item, index) => (
                                    <div key={index} className="row gx-1 cart-item">
                                        <div className="col col-4 cart-item-img">
                                            <Link to={`/product/${item.product.id}`}>
                                                <img src={handleImagesBase64(item.product.thumbnail)} alt="" />
                                            </Link>
                                        </div>
                                        <div className="col col-8 cart-item-content">
                                            <h3 className="cart-item-name">
                                                <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                                            </h3>
                                            <div className="cart-item-price">
                                                <p className="cart-item-sale-price">
                                                    {item.product.salePrice.toLocaleString()} đ
                                                </p>
                                                <del className="cart-item-price-origin">
                                                    {item.product.salePrice.toLocaleString()} đ
                                                </del>
                                                <p className="cart-item-discount">-{item.product.discount.amount}%</p>
                                            </div>
                                            <div className="row gx-1 cart-item-quantity">
                                                <p className="col col-3 cart-item-quantity-title">Số lượng: </p>
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-de-quantity"
                                                    onClick={() =>
                                                        handleUpdate(item.product.id, Math.max(1, item.quantity - 1))
                                                    }
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="col form-control cart-item-input"
                                                    min={1}
                                                    name="quantityUpdate"
                                                    value={item.quantity}
                                                    onChange={(e) =>
                                                        handleUpdate(item.product.id, parseInt(e.target.value))
                                                    }
                                                />
                                                <button
                                                    type="button"
                                                    className="col col-1 btn btn-outline-secondary cart-item-in-quantity"
                                                    onClick={() => handleUpdate(item.product.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-control-btn">
                                <Link to={'/'}>
                                    <button type="button" className="btn btn-primary">
                                        <i className="fa-solid fa-arrow-left"></i>
                                        <span>Tiếp tục mua sắm</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col-4 cart-row-right">
                        <h2 className="cart-row-right-title">Cộng giỏ hàng</h2>
                        <div className="cart-row-right-content">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Tổng số lượng sản phẩm</td>
                                        <td>{totalQuantity}</td>
                                    </tr>
                                    <tr>
                                        <td>Tổng giá trị</td>
                                        <td>{totalPrice.toLocaleString()} đ</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="cart-control-btn cart-check-pay">
                                <Link to={`/user/${1}/order`}>
                                    <button type="button" className="btn btn-primary">
                                        <span>Tiến hành thanh toán</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
