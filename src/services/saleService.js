import axios from 'axios';
const API_URL = 'http://localhost:8080/api/v1/discount';

const getAllSales = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Error fetching sales:', error);
        throw error;
    }
};

const createNewSale = async (sale) => {
    try {
        const response = await axios.post(API_URL, sale);
        return response.data;
    } catch (error) {
        console.log('Error creating', error);
        throw error;
    }
};

const updateSale = async (id, sale) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, sale);
        return response.data;
    } catch (error) {
        console.log('Error updating', error);
        throw error;
    }
};

const deleteSale = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log('Error deleting', error);
        throw error;
    }
};

const saleService = {
    getAllSales,
    createNewSale,
    updateSale,
    deleteSale,
};

export default saleService;
