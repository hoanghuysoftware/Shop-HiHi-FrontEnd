import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/report';

const get3ProductBestSale = async () => {
    try {
        const response = await axios.get(`${API_URL}/popular-product`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getReportByBrandSell = async () => {
    try {
        const response = await axios.get(`${API_URL}/brand-sell`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getReportByYear = async (year) => {
    try {
        const response = await axios.get(`${API_URL}/sell-by-year?year=${year}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
const getReportImportByYear = async (year) => {
    try {
        const response = await axios.get(`${API_URL}/import-by-year?year=${year}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const reportService = {
    get3ProductBestSale,
    getReportByBrandSell,
    getReportByYear,
    getReportImportByYear,
};

export default reportService;
