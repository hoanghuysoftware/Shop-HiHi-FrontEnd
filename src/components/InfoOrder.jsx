import React, { useEffect, useState } from 'react';
import '../style/infoorder.css';
import { Link } from 'react-router-dom';
import orderService from '../services/orderService';
import { debounce } from 'lodash';

const InfoOrder = () => {
    const [valueSearch, setValueSearch] = useState('');
    const userId = 2;
    const [orders, setOrders] = useState([]);

    const loadDataOrderByIdOrder = async (orderId) => {
        try {
            const response = await orderService.getOrderByIdOrder(orderId);
            setOrders([response.data]);
        } catch (error) {
            loadDataOrderBYUser(userId);
            console.log('Error loading data order by id' + orderId + 'at InfoOrder: ', error);
        }
    };

    const handleChangeSearch = (e) => {
        setValueSearch(e);
        debouncedLoadDataOrder(e);
    };

    const debouncedLoadDataOrder = debounce(loadDataOrderByIdOrder, 500);

    const loadDataOrderBYUser = async (userId) => {
        try {
            const response = await orderService.getOrderByIdUser(userId);
            setOrders(response.data.reverse());
        } catch (error) {
            console.log('Error loading data order by user ' + userId + ' at InfoOrder: ', error);
        }
    };

    useEffect(() => {
        loadDataOrderBYUser(userId);
    }, []);

    const handleImage = (image) => {
        if (image !== undefined) return `data:image/jpeg;base64,${image}`;
    };

    return (
        <div className="info-order-body">
            <div className="info-order-top">
                <h3 className="info-order-title">Lịch sử mua hàng</h3>
                <form>
                    <div className="form-search-info form-floating mb-3">
                        <input
                            type="text"
                            className="form-control info-order-form-search shadow-sm"
                            id="info-order-search"
                            placeholder="name@example.com"
                            value={valueSearch}
                            onChange={(e) => handleChangeSearch(e.target.value)}
                        />
                        <label htmlFor="info-order-search">Nhập ID đơn hàng cần tìm</label>
                    </div>
                </form>
            </div>
            <div className="info-order-main">
                <div className="info-order-list">
                    {orders.map((item, index) => (
                        <div key={index} className="info-order-item">
                            <div className="info-order-item-top">
                                <div className="info-order-item-id">ID đơn hàng: {item.id}</div>
                                <div className="info-order-item-top-right">
                                    <div className="info-order-item-date">Ngày đặt: {item.orderDate}</div>
                                </div>
                            </div>
                            <div className="info-order-item-content row gx-2">
                                <div className="col col-2 info-order-item-img">
                                    <img src={handleImage(item.orderDetails[0].product.thumbnail)} alt="" />
                                </div>
                                <div className="col col-10 info-order-item-detail">
                                    <h4 className="info-order-item-detail-name">{item.orderDetails[0].product.name}</h4>
                                    <div className="info-order-item-detail-price">
                                        <p className="info-order-item-detail-price-quantity">
                                            x{item.orderDetails[0].quantity}
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <del className="info-order-item-detail-price-origin">
                                                {item.orderDetails[0].unitPrice.toLocaleString()} đ
                                            </del>
                                            <p className="info-order-item-detail-price-sale">
                                                {item.orderDetails[0].unitPrice.toLocaleString()} đ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info-order-item-bottom">
                                <div className="info-order-item-total">
                                    <p>Thành tiền:</p>
                                    <span>{item.totalPrice.toLocaleString()}đ</span>
                                </div>
                                <div className="info-order-item-control">
                                    <Link to={`/order/${item.id}`}>
                                        <button type="button" className="btn btn-info info-order-item-btn">
                                            Xem chi tiết
                                        </button>
                                    </Link>
                                    <button type="button" className="btn btn-success">
                                        Đánh giá đơn hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoOrder;
