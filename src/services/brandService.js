import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/brand';

const getToken = () => {
    return localStorage.getItem('token');
};

const getAllBrandAdmin = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
const getAllBrand = async () => {
    try {
        const token = getToken();
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const createNewBrand = async (brand) => {
    try {
        const token = getToken();
        const response = await axios.post(API_URL, brand, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateBrand = async (id, brand) => {
    try {
        const token = getToken();
        const response = await axios.put(`${API_URL}/${id}`, brand, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const deleteBrand = async (id) => {
    try {
        const token = getToken();
        const response = await axios.delete(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const brandService = {
    getAllBrand,
    createNewBrand,
    updateBrand,
    deleteBrand,
    getAllBrandAdmin,
};

export default brandService;
