import React, { useState } from 'react';
import '../style/supplier-admin.css';

const SupplierAdmin = () => {
    const [formData, setFormData] = useState({ name: '', email: '', address: '', phone: '' });
    const [suppliers, setSuppliers] = useState([]);
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="supplier-admin-container">
            <div className="supplier-admin-content row gx-4">
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
                            <tr>
                                <th scope="row">1</th>
                                <td>CellphoneS</td>
                                <td>cellphoneS@gmail.com</td>
                                <td>350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh</td>
                                <td>028.7108.9666</td>
                                <td>
                                    <button type="button" className="btn btn-success btn-update-table">
                                        Cập nhật
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>CellphoneS</td>
                                <td>cellphoneS@gmail.com</td>
                                <td>350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh</td>
                                <td>028.7108.9666</td>
                                <td>
                                    <button type="button" className="btn btn-success btn-update-table">
                                        Cập nhật
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>CellphoneS</td>
                                <td>cellphoneS@gmail.com</td>
                                <td>350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh</td>
                                <td>028.7108.9666</td>
                                <td>
                                    <button type="button" className="btn btn-success btn-update-table">
                                        Cập nhật
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col col-3 supplier-admin-form">
                    <h2 className="supplier-admin-titile">Thêm mới nhà cung cấp</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name-supplier" className="form-label">
                                Tên nhà cung cấp
                            </label>
                            <input
                                onChange={handleChangeInput}
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
                                name="email"
                                type="email"
                                className="form-control shadow-sm"
                                id="email-supplier"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-supplier-submit">
                            Thêm mới
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SupplierAdmin;
