import React, { useEffect, useState } from 'react';
import '../style/brand-admin.css';
import brandService from '../../services/brandService';

const BrandAdmin = () => {
    const [brands, setBrands] = useState([]);
    const [newBrand, setNewBrand] = useState({ id: null, name: '', active: '' });

    const resetDataForm = () => {
        setNewBrand({ id: null, name: '', active: '' });
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setNewBrand((prev) => ({ ...prev, [name]: value }));
    };
    const handleClickUpdate = (item) => {
        setNewBrand(item);
        // console.log(item);
    };

    const handleDelete = async (id) => {
        try {
            await brandService.deleteBrand(id);
            await fetchData();
        } catch (error) {
            console.log('Error deleting data', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const brandDTO = { brand_name: newBrand.name };
        try {
            if (newBrand.id) {
                await brandService.updateBrand(parseInt(newBrand.id), brandDTO);
            } else {
                await brandService.createNewBrand(brandDTO);
            }
            resetDataForm();
            await fetchData();
        } catch (error) {
            console.log('Error fetching data', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await brandService.getAllBrand();
            setBrands(response.data);
        } catch (error) {
            console.log('Error fetching data', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
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
                                name="name"
                                onChange={handleChangeInput}
                                value={newBrand.name}
                            />
                        </div>
                        {newBrand.id ? (
                            <button type="submit" className="btn btn-warning">
                                Cập nhật
                            </button>
                        ) : (
                            <button type="submit" className="btn btn-outline-success">
                                <i className="me-1 fa-solid fa-plus"></i>
                                Thêm mới
                            </button>
                        )}
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
                            {brands.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>
                                        <button
                                            onClick={() => handleClickUpdate(item)}
                                            type="button"
                                            className="btn btn-warning me-3"
                                        >
                                            <i className="fa-regular fa-pen-to-square me-1"></i>
                                            Cập nhật
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            type="button"
                                            className="btn btn-outline-danger"
                                        >
                                            <i className="me-1 fa-regular fa-trash-can"></i>
                                            Xóa
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

export default BrandAdmin;
