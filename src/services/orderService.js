import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/order';

const createNewOrder = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error) {
        console.error('Error creating new order:', error);
        throw error;
    }
};

const getOrderByIdUser = async (idUser) => {
    try {
        const response = await axios.get(`${API_URL}/user/${idUser}`);
        return response.data;
    } catch (error) {
        console.error('Error creating new order:', error);
        throw error;
    }
};

const getOrderByIdOrder = async (idOrder) => {
    try {
        const response = await axios.get(`${API_URL}/${idOrder}`);
        return response.data;
    } catch (error) {
        console.error('Error creating new order:', error);
        throw error;
    }
};

const orderService = {
    createNewOrder,
    getOrderByIdUser,
    getOrderByIdOrder,
};

export default orderService;
