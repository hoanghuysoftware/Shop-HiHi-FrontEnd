import axios from 'axios';
const API_URL = 'http://localhost:8080/api/v1/supplier';

const getAllSuppliers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const createNewSupplier = async (supplier) => {
    const response = await axios.post(API_URL, supplier);
    return response.data;
};

const updateSupplierById = async (id, supplier) => {
    const response = await axios.put(`${API_URL}/${id}`, supplier);
    return response.data;
};

const deleteSupplierById = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

const supplierService = { getAllSuppliers, createNewSupplier, updateSupplierById, deleteSupplierById };

export default supplierService;
