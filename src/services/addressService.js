import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/address-user';
const token = localStorage.getItem('token');

const getAddressUserByIdUser = async (idUser) => {
    try {
        const response = await axios.get(`${API_URL}/user/${idUser}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching address user:', error);
        throw error;
    }
};

const addNewAddress = async (idUser, data) => {
    try {
        const response = await axios.post(`${API_URL}/${idUser}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating new address:', error);
        throw error;
    }
};

const updateAddress = async (idAddress, data) => {
    try {
        const response = await axios.put(`${API_URL}/${idAddress}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error update address:', error);
        throw error;
    }
};

const addressService = {
    getAddressUserByIdUser,
    addNewAddress,
    updateAddress,
};

export default addressService;
