import React, { useState } from 'react';
import '../style/brand-admin.css';

const BrandAdmin = () => {
    const [newBrand, setNewBrand] = useState({name: ''});
    const handleChangeInput = e => {
        setNewBrand({name: e.target.value});
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(newBrand);
    }
    return (
        <div className="brand-admin-container">
            <div className="brand-admin content">
                <div className="brand-admin-list">
                    <table class="table table-hover table-striped">
                        <thead className="table-info">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tên nhà cung cấp</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="brand-admin-form">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label htmlFor="name" class="form-label">
                                Nhập tên thương hiệu
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name='name-brand'
                                onChange={handleChangeInput}
                            />
                        </div>
                        <button className='btn btn-primary' type='submit'>Thêm mới</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BrandAdmin;
