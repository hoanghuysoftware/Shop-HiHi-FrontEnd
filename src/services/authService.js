import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/auth';

const login = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/login`, data);
        return response.data;
    } catch (error) {
        console.error(`Error when login: ${error.message}`);
        throw error;
    }
};
const signUP = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/sign-up`, data);
        return response.data;
    } catch (error) {
        console.error(`Error when login: ${error.message}`);
        throw error;
    }
};

const authService = {
    login,
    signUP,
};

export default authService;
