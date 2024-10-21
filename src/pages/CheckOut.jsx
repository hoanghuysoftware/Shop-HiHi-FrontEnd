import React, { useEffect, useState } from 'react';
import BackToTop from '../components/common/BackToTop';
import '../style/checkout.css';
import Navbar from '../components/common/Navbar';
import orderService from '../services/orderService';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userService from '../services/userService';

const CheckOut = () => {
    const navigate = useNavigate();
    const [note, setNote] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [deliveryAddressID, setDeliveryAddressID] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const listItems = useSelector((state) => state.cart.itemForOrder);
    const [user, setUser] = useState('');

    const handChangeInputNote = (e) => {
        setNote(e.target.value);
    };

    const handChangeSelect = (e) => {
        setDeliveryAddressID(parseInt(e.target.value));
    };

    const handleChangeSelectPay = (e) => {
        setPaymentMethod(e.target.value);
    };

    const loadDataUser = async (idUser) => {
        try {
            const response = await userService.getUserById(idUser);
            setUser(response.data);
        } catch (error) {
            console.log('Error loading user data:  ' + error);
        }
    };

    useEffect(() => {
        let result = 0;
        listItems.map((item) => {
            return (result += item.price * item.quantity);
        });

        setTotalPrice(result);
        loadDataUser(2); // 2 => user id
    }, [listItems]);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const dataPost = {
            note: note,
            paymentMethod: paymentMethod,
            deliveryAddressID: deliveryAddressID, // => lay tu select dia chi
            statusId: 1,
            userId: 2,
            orderDetails: listItems.map((item) => ({
                'product-id': item.productId,
                quantity: item.quantity,
            })),
        };

        try {
            const response = await orderService.createNewOrder(dataPost);
            alert('Đặt hàng thành công! Mã đơn hàng: #' + response.data.id);

            navigate(`/user/${2}/info?tab=order-history`); // 2 => user id
        } catch (error) {
            console.log('Error while send request to server at Checkout: ', error);
        }
    };

    return (
        <div>
            <div className="container">
                <Navbar />
                <BackToTop />
                <div className="row gx-3 check-out-body">
                    <div className="col col-6 check-out-left">
                        <div className="check-out-container">
                            <h2 className="check-out-title">Thông tin thanh toán</h2>
                            <div className="check-out-left-content">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            Họ tên:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={user.name || ''}
                                            readOnly
                                            disabled
                                            aria-describedby="nameHelp"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">
                                            Địa chỉ giao hàng:{' '}
                                            <span style={{ color: 'red', fontWeight: '500' }}>*</span>
                                        </label>
                                        <select
                                            onChange={handChangeSelect}
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option value={0}>-- Chọn địa chỉ nhận hàng --</option>
                                            {user &&
                                                user.addresses.map((item, index) => (
                                                    <option key={index} value={item.id}>
                                                        {item.nameAddress}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">
                                            Số điện thoại:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={user.phoneNumber || ''}
                                            readOnly
                                            disabled
                                            id="phone"
                                            aria-describedby="phoneHelp"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            E-Mail:
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={user.email || ''}
                                            readOnly
                                            disabled
                                            id="email"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <h2 className="check-out-title">Thông tin bổ sung</h2>
                                    <div className="mb-3">
                                        <label htmlFor="note" className="form-label">
                                            Ghi chú:
                                        </label>
                                        <textarea
                                            onChange={handChangeInputNote}
                                            name="note"
                                            value={note}
                                            className="form-control"
                                            id="note"
                                            rows="4"
                                            placeholder="Ghi chú về đơn hàng này. Ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col col-6 check-out-right">
                        <div className="check-out-container check-out-info-order">
                            <h2 className="check-out-title">Đơn hàng của bạn</h2>
                            <div className="check-out-info-order-content">
                                <table className="table check-out-order">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sản phẩm</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Số lượng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listItems.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.price.toLocaleString()}đ</td>
                                                <td>x{item.quantity}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td className="table-last-col">Tổng</td>
                                            <td className="table-last-col" colSpan={2}>
                                                {totalPrice.toLocaleString()}đ
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h2 className="check-out-title">Phương thức thanh toán</h2>
                            <div className="check-out-payment">
                                <div className="form-check check-method">
                                    <input
                                        className="form-check-input online-check"
                                        type="radio"
                                        name="paymentMethod"
                                        onChange={handleChangeSelectPay}
                                        id="online"
                                        value={'ONLINE'}
                                    />
                                    <label className="form-check-label" htmlFor="online">
                                        <img
                                            style={{ height: '50px' }}
                                            src={`${process.env.PUBLIC_URL}/vnpay.png`}
                                            alt=""
                                        />
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="paymentMethod"
                                        onChange={handleChangeSelectPay}
                                        id="offline"
                                        value={'OFFLINE'}
                                    />
                                    <label className="form-check-label" htmlFor="offline">
                                        Thanh toán khi nhận
                                    </label>
                                </div>
                            </div>
                            <button onClick={handleSubmitForm} type="submit" className="btn btn-primary btn-check-out">
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CheckOut;
