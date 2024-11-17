import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/user';
const getToken = () => {
    return localStorage.getItem('token');
};

const getUserById = async (idUser) => {
    try {
        const response = await axios.get(`${API_URL}/${idUser}`);
        return response.data;
    } catch (error) {
        console.log('Error getting user by id', error);
        throw error;
    }
};
const getUserByUsername = async (data) => {
    const token = getToken();
    try {
        const response = await axios.get(`${API_URL}/username/${data}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log('Error getting user by username', error);
        throw error;
    }
};

const userService = {
    getUserById,
    getUserByUsername,
};

export default userService;
