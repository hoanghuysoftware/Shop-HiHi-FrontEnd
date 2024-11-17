import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/order';
const getToken = () => {
    return localStorage.getItem('token');
};
const createNewOrder = async (data) => {
    try {
        const response = await axios.post(API_URL, data, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating new order:', error);
        throw error;
    }
};

const getOrderByIdUser = async (idUser) => {
    try {
        const response = await axios.get(`${API_URL}/user/${idUser}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating new order:', error);
        throw error;
    }
};

const getOrderByIdOrder = async (idOrder) => {
    try {
        const response = await axios.get(`${API_URL}/${idOrder}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating new order:', error);
        throw error;
    }
};

const getAllOrder = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

const updateOrderStatus = async (idOrder, status) => {
    try {
        const response = await axios.patch(`${API_URL}/${idOrder}?status=${status}`, null, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, // Đã sửa dòng này
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to update order status for id order with status ' + idOrder + ': ' + error);
        throw error; // Ném lại lỗi để xử lý bên ngoài nếu cần
    }
};

const orderService = {
    createNewOrder,
    getOrderByIdUser,
    getOrderByIdOrder,
    getAllOrder,
    updateOrderStatus,
};

export default orderService;
