import React, { useState } from 'react';
import '../style/brand-admin.css';

const BrandAdmin = () => {
    const [newBrand, setNewBrand] = useState({ name: '' });
    const handleChangeInput = (e) => {
        setNewBrand({ name: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newBrand);
    };
    return (
        <div className="brand-admin-container">
            <div className="brand-admin-content row gx-2">
                <div className="col col-4 brand-admin-form">
                    <form onSubmit={handleSubmit}>
                        <h2>Form thêm thương hiệu</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label ">
                                Nhập tên thương hiệu
                            </label>
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                id="name"
                                name="name-brand"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-success">
                            <i className="me-1 fa-solid fa-plus"></i>
                            Thêm mới
                        </button>
                    </form>
                </div>
                <div className="col col-8 brand-admin-list">
                    <h2>Danh sách thương hiệu</h2>
                    <table className="table table-hover table-striped">
                        <thead className="table-info">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tên thương hiệu</th>
                                <th scope="col">Xử lý</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Asus</td>
                                <td>
                                    <button type="button" className="btn btn-warning me-3">
                                        <i className="fa-regular fa-pen-to-square me-1"></i>
                                        Cập nhật
                                    </button>
                                    <button type="button" className="btn btn-outline-danger">
                                        <i className="me-1 fa-regular fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>HP</td>
                                <td>
                                    <button type="button" className="btn btn-warning me-3">
                                        <i className="fa-regular fa-pen-to-square me-1"></i>
                                        Cập nhật
                                    </button>
                                    <button type="button" className="btn btn-outline-danger">
                                        <i className="me-1 fa-regular fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BrandAdmin;
