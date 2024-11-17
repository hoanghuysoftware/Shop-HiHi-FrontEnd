import React, { useEffect, useState } from 'react';
import '../style/order-admin.css';
import orderService from '../../services/orderService';
import { debounce } from 'lodash';

const OrderAdmin = () => {
    const [orders, setOrders] = useState([]);
    const [select, setSelect] = useState(null);
    const [search, setSearch] = useState('');
    const handleSelectOrder = (order) => {
        setSelect(order);
    };
    const handChangeInput = (e) => {
        setSearch(e.target.value);
        debounceDataOrder(e.target.value);
    };
    const loadDataByOrderId = async (orderId) => {
        try {
            if (orderId === '') {
                loadDataOrder();
            } else {
                const response = await orderService.getOrderByIdOrder(orderId);
                setOrders([response.data]);
            }
        } catch (error) {
            console.log('Error loading data order by id' + orderId + 'at OrderAdmin: ', error);
        }
    };

    const debounceDataOrder = debounce(loadDataByOrderId, 500);

    // Hàm xử lý thay đổi trạng thái
    const handleStatusChange = async (id, value) => {
        try {
            await orderService.updateOrderStatus(id, value);
            loadDataOrder();
        } catch (error) {
            console.log('Error update status for order: ', error);
        }
    };

    const loadDataOrder = async () => {
        try {
            const response = await orderService.getAllOrder();
            setOrders(response.data);
        } catch (error) {
            console.error(`Error loading order data in OrderAdmin.jsx ${error.message}`);
        }
    };

    useEffect(() => {
        loadDataOrder();
    }, []);

    return (
        <div className="order-admin-container">
            <div className="order-admin-content">
                <div className="order-admin-top">
                    <h2 className="order-admin-title">Danh sách đơn hàng</h2>
                    <form>
                        <div className="mb-3 form-search-order-admin">
                            <input
                                type="text"
                                className="form-control"
                                value={search}
                                onChange={handChangeInput}
                                id="search-order"
                                placeholder="Nhập ID đơn hàng"
                            />
                        </div>
                    </form>
                </div>
                <div className="order-admin-table">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Người đặt</th>
                                <th scope="col">Ngày đặt hàng</th>
                                <th scope="col">Giá trị</th>
                                <th scope="col">PT thanh toán</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <th scope="row">{order.id}</th>
                                    <td>{order.user.name}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.totalPrice.toLocaleString()}đ</td>
                                    <td>{order.paymentMethod}</td>
                                    <td>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            value={order.status.id}
                                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                        >
                                            <option value={0}>-- Trạng thái --</option>
                                            <option value={1}>Đang chờ xử lý</option>
                                            <option value={2}>Đang xử lý</option>
                                            <option value={3}>Đang giao</option>
                                            <option value={5}>Đã giao hàng</option>
                                            <option value={6}>Hoàn thành</option>
                                            <option value={7}>Đã hủy</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button
                                            data-bs-toggle="modal"
                                            data-bs-target="#modal-details"
                                            type="button"
                                            className="btn btn-info btn-admin-detail-order"
                                            onClick={(e) => handleSelectOrder(order)}
                                        >
                                            <i className="me-1 fa-solid fa-pen-to-square"></i>
                                            Xem chi tiết
                                        </button>
                                        <button type="button" className="ms-1 btn btn-warning">
                                            <i className="me-1 fa-solid fa-print"></i>
                                            In đơn hàng
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div
                    className="modal fade"
                    id="modal-details"
                    tabIndex="-1"
                    aria-labelledby="modal-detailsLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="modal-detailsLabel">
                                    Chi tiết đơn hàng
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                {select && (
                                    <div>
                                        <p>
                                            <strong>ID:</strong> {select.id}
                                        </p>
                                        <p>
                                            <strong>Người đặt:</strong> {select.user.name}
                                        </p>
                                        <p>
                                            <strong>Ngày đặt hàng:</strong> {select.orderDate}
                                        </p>
                                        <p>
                                            <strong>Giá trị:</strong> {select.totalPrice.toLocaleString()}đ
                                        </p>
                                        <p>
                                            <strong>Phương thức thanh toán:</strong> {select.paymentMethod}
                                        </p>
                                        <p>
                                            <strong>Trạng thái:</strong> {select.status.name}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Đóng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderAdmin;
