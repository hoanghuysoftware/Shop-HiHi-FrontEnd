import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/user';

const getUserById = async (idUser) => {
    try {
        const response = await axios.get(`${API_URL}/${idUser}`);
        return response.data;
    } catch (error) {
        console.log('Error getting user by id', error);
        throw error;
    }
};

const userService = {
    getUserById,
};

export default userService;
