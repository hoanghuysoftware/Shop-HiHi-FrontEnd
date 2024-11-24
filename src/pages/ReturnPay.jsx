import React from 'react';
import '../style/returnPay.css';
import { useNavigate } from 'react-router-dom';
const ReturnPay = () => {
    const navigate = useNavigate();
    const url = new URLSearchParams(window.location.search);
    const vnpAmount = url.get('vnp_Amount');
    const vnpOrderInfo = url.get('vnp_OrderInfo');
    const vnpTransactionStatus = url.get('vnp_TransactionStatus');
    const vnpPayDate = url.get('vnp_PayDate');
    const userId = localStorage.getItem('user');

    const extractDate = (dateString) => {
        const rawDate = dateString.substring(0, 8);
        const formattedDate = rawDate.substring(6, 8) + '-' + rawDate.substring(4, 6) + '-' + rawDate.substring(0, 4);
        return formattedDate;
    };
    const handleClick = () => {
        navigate(`/user/${userId}/info?tab=order-history`);
    };
    return (
        <div>
            <div className="container-fluid">
                <div className="thank-wapper">
                    <div className="thank-content shadow">
                        <div className="thank-top">
                            <i className="fa-solid fa-check"></i>
                            <h2 className="thank-title">Đặt hàng thành công</h2>
                        </div>
                        <div className="thank-body">
                            <p
                                onClick={handleClick}
                                className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            >
                                Xem lịch sử đơn hàng
                            </p>
                            <table className="table table-bordered border-primary ">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>Ngày thanh toán:</td>
                                        <td>{extractDate(vnpPayDate)}</td>
                                    </tr>
                                    <tr>
                                        <td>Trạng thái thanh toán:</td>
                                        <td>
                                            {vnpTransactionStatus === '00'
                                                ? 'Thanh toán thành công'
                                                : 'Thanh toán thất bại'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tiền đã thanh toán:</td>
                                        <td>{parseInt(vnpAmount / 100).toLocaleString()} đ</td>
                                    </tr>
                                    <tr>
                                        <td>Nội dung thanh toán:</td>
                                        <td>{vnpOrderInfo}</td>
                                    </tr>
                                    <tr>
                                        <td>Trạng thái đơn hàng:</td>
                                        <td>{vnpTransactionStatus === '00' ? 'Đang chờ xử lý' : ''}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="thank-footer">
                            <p>Chúng tôi đã tiếp nhận thanh toán thành công, đơn hàng đang chớ được xử lý.</p>
                            <p>
                                Quý khách hàng vui lòng giữ lại thông tin đã thanh toán để có thể đối chiếu khi nhận
                                hàng.
                            </p>
                            <p>Bất kỳ khiếu nại nào vui lòng gửi đến email tại trang chủ chúng tôi đã cung cấp.</p>
                            <br />
                            <p className="text-uppercase fw-bolder">Rất hân hạnh được phục vụ quý khách !</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnPay;
