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
        const response = await axios.get(API_URL + '/not-sale');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
const getAllProductNotImage = async () => {
    try {
        const response = await axios.get(API_URL + '/not-image');
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

const getImagesByIdProduct = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/image/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by id:', error);
        throw error;
    }
};

const updateImageForProduct = async (id, data) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/v1/image/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating image:', error);
        throw error;
    }
};

const getProductByBrandid = async (id, page, size) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/v1/product/public?brand-id=${id}&page=${page}&size=${size}`,
        );
        return response.data;
    } catch (error) {
        console.error('Error getting product by brandid:', error);
        throw error;
    }
};

const searchProduct = async (page, keyword) => {
    try {
        const response = await axios.get(`${API_URL}/search?keyword=${keyword}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error search product by: ', error);
        throw error;
    }
};

const productService = {
    getAllProductActive,
    getAllProductNotActive,
    getProductById,
    getAllProductNotImage,
    updateImageForProduct,
    getProductByBrandid,
    getImagesByIdProduct,
    searchProduct,
};

export default productService;
