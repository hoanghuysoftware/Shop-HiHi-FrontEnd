import React, { useCallback, useEffect, useState } from 'react';
import '../style/cart.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import cartService from '../services/cartService';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, setQuantity, setItemForOrder } from '../redux/actions/CartAction';

const Cart = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [productOrder, setProductOrder] = useState([]);
    const dispatch = useDispatch();
    const userId = localStorage.getItem('user');
    const [cartId, setCartId] = useState(0);

    const fetchDataCart = useCallback(
        async (userId) => {
            try {
                const response = await cartService.getCartByIdUser(userId);
                setCartId(response.data.user.id);
                setProducts(response.data.shoppingCartDetails);
                setTotalPrice(response.data.totalPrice);
                setTotalQuantity(response.data.totalQuantity);

                dispatch(setCart(response.data.shoppingCartDetails));
                dispatch(setQuantity(response.data.totalQuantity));
            } catch (error) {
                console.log('Error fetch data cart with id: ' + userId);
            }
        },
        [dispatch],
    );

    const handleImagesBase64 = (image) => {
        if (image !== undefined) return `data:image/jpeg;base64,${image}`;
    };

    const handleAddToCart = async (idProduct, value) => {
        const data = {
            quantity: value,
            'product-id': idProduct,
        };
        try {
            await cartService.addToCart(cartId, data); // 2 => id cua cart
            fetchDataCart(userId);
        } catch (error) {
            console.log('Error Update cart: ', error);
        }
    };

    const handleUpdateProductInCart = async (idProduct, value) => {
        const data = {
            quantity: value,
            'product-id': idProduct,
        };
        try {
            await cartService.updateCart(cartId, data); // 2 => id cua cart
            fetchDataCart(userId);
        } catch (error) {
            console.log('Error Update cart: ', error);
        }
    };

    const handleDeleteProduct = async (idProduct) => {
        try {
            await cartService.deleteCartItem(cartId, idProduct); // 2 => id cua cart
            fetchDataCart(userId);
        } catch (error) {
            console.log('Error deleting product: ', error);
        }
    };

    const handleCheckProductForOrder = (e, quantityItem, name, price) => {
        const { checked } = e.target;
        const idProduct = parseInt(e.target.value);
        const newValue = {
            productId: idProduct,
            name: name,
            price: price,
            quantity: quantityItem,
        };
        setProductOrder((prevState) => {
            const newApply = checked
                ? [...prevState, newValue]
                : productOrder.filter((item) => item.idProduct !== idProduct);
            return newApply;
        });
    };

    const handleClickPayment = () => {
        dispatch(setItemForOrder(productOrder));
        console.log(productOrder);
        navigate(`/user/${userId}/order`); // 2 => id cua user
    };
    useEffect(() => {
        fetchDataCart(userId);
    }, [userId, fetchDataCart]);

    return (
        <div>
            <div className="container">
                <Navbar />
                <h2 className="cart-title">Giỏ hàng</h2>
                <div className="row gx-2 cart-row">
                    <div className="col col-8 cart-row-left">
                        <div className="cart-content">
                            {totalQuantity > 0 ? (
                                <div className="cart-list">
                                    {products.map((item, index) => (
                                        <div key={index} className="row gx-1 align-items-center cart-item">
                                            <input
                                                className="col col-1 form-check-input ms-2 border border-3 border-primary rounded-circle"
                                                type="checkbox"
                                                value={item.product.id}
                                                id="select-order"
                                                onChange={(e) =>
                                                    handleCheckProductForOrder(
                                                        e,
                                                        item.quantity,
                                                        item.product.name,
                                                        item.unitPrice,
                                                    )
                                                }
                                            ></input>
                                            <div className="col col-3 cart-item-img">
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
                                                    <p className="cart-item-discount">
                                                        -{item.product.discount.amount}%
                                                    </p>
                                                </div>
                                                <div className="row gx-1 cart-item-quantity">
                                                    <p className="col col-3 cart-item-quantity-title">Số lượng: </p>
                                                    <button
                                                        type="button"
                                                        className="col col-1 btn btn-outline-secondary cart-item-de-quantity"
                                                        onClick={() =>
                                                            handleUpdateProductInCart(
                                                                item.product.id,
                                                                Math.max(1, item.quantity - 1),
                                                            )
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
                                                            handleAddToCart(item.product.id, parseInt(e.target.value))
                                                        }
                                                    />
                                                    <button
                                                        type="button"
                                                        className="col col-1 btn btn-outline-secondary cart-item-in-quantity"
                                                        onClick={() =>
                                                            handleUpdateProductInCart(
                                                                item.product.id,
                                                                item.quantity + 1,
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </button>

                                                    <button
                                                        onClick={() => handleDeleteProduct(item.product.id)}
                                                        type="button"
                                                        className="ms-4 col col-1 btn btn-dark"
                                                    >
                                                        <i className="fa-solid fa-trash "></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <img className="empty-cart" src={`${process.env.PUBLIC_URL}/empty-cart.svg`} alt="" />
                            )}

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
                                <button
                                    onClick={handleClickPayment}
                                    type="button"
                                    className={`btn btn-primary ${totalQuantity > 0 ? '' : 'd-none'}`}
                                >
                                    <span>Tiến hành thanh toán</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
