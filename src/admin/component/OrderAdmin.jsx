import React, { useState } from 'react';
import '../style/order-admin.css';

const OrderAdmin = () => {
    // Danh sách đơn hàng với ID và trạng thái
    const [orders, setOrders] = useState([
        { id: 2, user: 'Nguyễn Văn A', date: '12-10-2024', quantity: 30, value: '15.000.000đ', status: 0 },
        { id: 1, user: 'Nguyễn Hoàng Huy', date: '11-10-2024', quantity: 20, value: '14.000.000đ', status: 0 },
    ]);
    const [select, setSelect] = useState(null);
    const handleSelectOrder = (order) => {
        setSelect(order);
        // console.log(order.id);
    };

    // Hàm xử lý thay đổi trạng thái
    const handleStatusChange = (id, value) => {
        console.log('ID đơn hàng:', id);
        console.log('Trạng thái:', value);

        // Cập nhật trạng thái đơn hàng
        const updatedOrders = orders.map((order) => (order.id === id ? { ...order, status: value } : order));
        setOrders(updatedOrders);
    };

    return (
        <div className="order-admin-container">
            <div className="order-admin-content">
                <div className="order-admin-top">
                    <h2 className="order-admin-title">Danh sách đơn hàng</h2>
                    <div className="form-floating form-search-order-admin">
                        <input type="text" className="form-control" id="search-order" placeholder="name@example.com" />
                        <label htmlFor="search-order">Nhập ID đơn hàng</label>
                    </div>
                </div>
                <div className="order-admin-table">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Người đặt</th>
                                <th scope="col">Ngày đặt hàng</th>
                                <th scope="col">S.lượng SP</th>
                                <th scope="col">Giá trị</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <th scope="row">{order.id}</th>
                                    <td>{order.user}</td>
                                    <td>{order.date}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.value}</td>
                                    <td>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                        >
                                            <option value="0">-- Trạng thái --</option>
                                            <option value="1">Đang chờ xử lý</option>
                                            <option value="2">Đang xử lý</option>
                                            <option value="3">Đang giao</option>
                                            <option value="4">Đã giao hàng</option>
                                            <option value="5">Hoàn thành</option>
                                            <option value="6">Đã hủy</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            type="button"
                                            className="btn btn-info btn-admin-detail-order"
                                            onClick={(e) => handleSelectOrder(order)}
                                        >
                                            Xem chi tiết
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                                            <strong>Người đặt:</strong> {select.user}
                                        </p>
                                        <p>
                                            <strong>Ngày đặt hàng:</strong> {select.date}
                                        </p>
                                        <p>
                                            <strong>Số lượng SP:</strong> {select.quantity}
                                        </p>
                                        <p>
                                            <strong>Giá trị:</strong> {select.value}
                                        </p>
                                        <p>
                                            <strong>Trạng thái:</strong> {select.status}
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
