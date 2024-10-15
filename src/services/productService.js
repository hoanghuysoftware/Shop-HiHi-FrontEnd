import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/product';

const getAllProductActive = async () => {
    try {
        const response = await axios.get(API_URL + '/active');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
const getAllProductNotActive = async () => {
    try {
        const response = await axios.get(API_URL + '/not-active');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by id:', error);
        throw error;
    }
};

const productService = {
    getAllProductActive,
    getAllProductNotActive,
    getProductById,
};

export default productService;
