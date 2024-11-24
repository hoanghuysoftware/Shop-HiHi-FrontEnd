import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import paymentService from '../services/paymentService';

const PendingPay = () => {
    const { orderId } = useParams();
    const [paymentURL, setPaymentURL] = useState('');
    useEffect(() => {
        const initiatePayment = async () => {
            try {
                const response = await paymentService.createNewPay(orderId); // tai day dua service get chuyen den trang thanh toan
                setPaymentURL(response); // url nhan lai tu BE
            } catch (error) {
                console.log('Error initiating payment:', error);
            }
        };
        initiatePayment();
    }, [orderId]);

    useEffect(() => {
        if (paymentURL) {
            window.location.href = paymentURL; // Chuyển hướng người dùng đến trang thanh toán VNPay
        }
    }, [paymentURL]);

    return (
        <div>
            <h1>Đang xử lý đơn hàng có ID: {orderId}</h1>
            <p>Đang chuyển hướng đến trang thanh toán...</p>
        </div>
    );
};

export default PendingPay;
