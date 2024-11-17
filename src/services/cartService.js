import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/cart';
//  Dung id test cua cart 2 = user co id = 2

const token = localStorage.getItem('token');

const addToCart = async (idCart, data) => {
    try {
        const response = await axios.post(`${API_URL}/${idCart}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding item to cart:', error);
        throw error;
    }
};
const updateCart = async (idCart, data) => {
    try {
        const response = await axios.put(`${API_URL}/${idCart}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding item to cart:', error);
        throw error;
    }
};

const getCart = async (idCart) => {
    try {
        const response = await axios.get(`${API_URL}/${idCart}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cart:', error);
        throw error;
    }
};

const getCartByIdUser = async (idUser) => {
    try {
        const response = await axios.get(`${API_URL}/user/${idUser}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cart:', error);
        throw error;
    }
};

const deleteCartItem = async (idCart, itemId) => {
    try {
        const response = await axios.delete(`${API_URL}/${idCart}?product=${itemId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log('Error deleting cart:', error);
        throw error;
    }
};

const cartService = {
    addToCart,
    getCart,
    updateCart,
    deleteCartItem,
    getCartByIdUser,
};

export default cartService;
