import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/v1/order';

const createNewPay = async (orderID) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/payment/VNPay/${orderID}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const paymentService = {
    createNewPay,
};

export default paymentService;
