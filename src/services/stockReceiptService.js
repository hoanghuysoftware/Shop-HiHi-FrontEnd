import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/stock-receipt';

const createReceiptForNewProduct = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error) {
        console.log('error at createReceiptForNewProduct: ' + error);
        throw error;
    }
};

const stockService = {
    createReceiptForNewProduct,
};

export default stockService;
