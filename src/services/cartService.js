import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/cart';
//  Dung id test cua cart 2 = user co id = 2

const addToCart = async (idCart, data) => {
    try {
        const response = await axios.post(`${API_URL}/${idCart}`, data);
        return response.data;
    } catch (error) {
        console.error('Error adding item to cart:', error);
        throw error;
    }
};
const updateCart = async (idCart, data) => {
    try {
        const response = await axios.post(`${API_URL}/${idCart}`, data);
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

const cartService = {
    addToCart,
    getCart,
    updateCart,
};

export default cartService;
