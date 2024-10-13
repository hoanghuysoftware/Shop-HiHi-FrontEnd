import React, { useEffect, useState } from 'react';
import '../style/supplier-admin.css';
import supplierService from '../../services/supplierService';

const SupplierAdmin = () => {
    const [formData, setFormData] = useState({ id: null, name: '', email: '', address: '', phone: '' });
    const [suppliers, setSuppliers] = useState([]);
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData((prevSupplier) => ({ ...prevSupplier, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.id) {
                const response = await supplierService.updateSupplierById(formData.id, formData);
            } else {
                const response = await supplierService.createNewSupplier(formData);
            }
            await fetchData();
        } catch (error) {
            console.error('Error create:', error);
        }
    };

    const handleClickUpdate = async (item) => {
        setFormData(item);
    };

    const fetchData = async () => {
        try {
            const response = await supplierService.getAllSuppliers();
            setSuppliers(response.data);
        } catch (error) {
            console.error('Error get all:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="supplier-admin-container">
            <div className="supplier-admin-content row gx-4 row-reverse">
                <div className="col col-3 supplier-admin-form">
                    <h2 className="supplier-admin-titile">Thêm mới nhà cung cấp</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name-supplier" className="form-label">
                                Tên nhà cung cấp
                            </label>
                            <input
                                onChange={handleChangeInput}
                                value={formData.name}
                                name="name"
                                type="text"
                                className="form-control shadow-sm"
                                id="name-supplier"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address-supplier" className="form-label">
                                Địa chỉ
                            </label>
                            <input
                                onChange={handleChangeInput}
                                value={formData.address}
                                name="address"
                                type="text"
                                className="form-control shadow-sm"
                                id="address-supplier"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone-supplier" className="form-label">
                                SĐT
                            </label>
                            <input
                                onChange={handleChangeInput}
                                value={formData.phone}
                                name="phone"
                                type="text"
                                className="form-control shadow-sm"
                                id="phone-supplier"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email-supplier" className="form-label">
                                E-mail
                            </label>
                            <input
                                onChange={handleChangeInput}
                                value={formData.email}
                                name="email"
                                type="email"
                                className="form-control shadow-sm"
                                id="email-supplier"
                            />
                        </div>
                        {formData.id ? (
                            <button type="submit" className="btn btn-warning btn-supplier-submit">
                                Cập nhật
                            </button>
                        ) : (
                            <button type="submit" className="btn btn-primary btn-supplier-submit">
                                Thêm mới
                            </button>
                        )}
                    </form>
                </div>
                <div className="col col-9 supplier-admin-data">
                    <h2 className="supplier-admin-titile">Danh sách nhà cung cấp</h2>
                    <table className="table table-hover table-striped supplier-admin-table">
                        <thead className="table-info">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tên</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Địa chỉ</th>
                                <th scope="col">SĐT</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <button
                                            onClick={() => handleClickUpdate(item)}
                                            type="button"
                                            className="btn btn-success btn-update-table"
                                        >
                                            Cập nhật
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SupplierAdmin;
