import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/review';
const token = localStorage.getItem('token');

const addNewReview = async (data) => {
    try {
        const response = await axios.post(API_URL, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating new review:', error);
        throw error;
    }
};

const getProductExistsReviewByOrder = async (orderid) => {
    try {
        const response = await axios.get(`${API_URL}/${orderid}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching reviews by order:', error);
        throw error;
    }
};

const getAllReviewByProductId = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}?product-id=${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching reviews by product:', error);
        throw error;
    }
};
const reviewService = {
    addNewReview,
    getProductExistsReviewByOrder,
    getAllReviewByProductId,
};

export default reviewService;
