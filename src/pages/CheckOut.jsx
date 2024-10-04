import React, { Component } from 'react';
import Header from '../components/Header';
import BackToTop from '../components/common/BackToTop';
import '../style/checkout.css';

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            totalPrice: 0,
            paymentMethod: 'null',
        };
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
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
                                                aria-describedby="nameHelp"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label">
                                                Địa chỉ giao hàng:
                                            </label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">
                                                Số điện thoại:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
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
                                            <tr>
                                                <td>
                                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS |
                                                    Radeon RX 6550M | 15.6 inch Full HD 144Hz
                                                </td>
                                                <td>14.500.000đ</td>
                                                <td>x2</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS |
                                                    Radeon RX 6550M | 15.6 inch Full HD 144Hz
                                                </td>
                                                <td>14.500.000đ</td>
                                                <td>x2</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS |
                                                    Radeon RX 6550M | 15.6 inch Full HD 144Hz
                                                </td>
                                                <td>14.500.000đ</td>
                                                <td>x2</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS |
                                                    Radeon RX 6550M | 15.6 inch Full HD 144Hz
                                                </td>
                                                <td>14.500.000đ</td>
                                                <td>x2</td>
                                            </tr>
                                            <tr>
                                                <td className="table-last-col">Tổng</td>
                                                <td className="table-last-col" colSpan={2}>
                                                    654.000.000đ
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
                                            id="online"
                                            defaultChecked
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
                                            id="offline"
                                        />
                                        <label className="form-check-label" htmlFor="offline">
                                            Thanh toán khi nhận
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-check-out">
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckOut;
