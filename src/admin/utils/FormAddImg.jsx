import React, { useEffect, useState } from 'react';
import '../style/add-image.css';
import productService from '../../services/productService';
import AlertUtils from './Alert';

const FormAddImg = ({ products, handleUpdateTable }) => {
    const [selectFiles, setSelectFiles] = useState([]);
    const [idProduct, setIDProduct] = useState('');
    const [listProducts, setListProducts] = useState([]);
    const [alert, setAlert] = useState({ message: '', status: 0, visible: false });

    useEffect(() => {
        setListProducts(products);
    }, [products]);

    const handleFileChange = (e) => {
        const files = e.target.files;
        setSelectFiles(Array.from(files));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        selectFiles.forEach((file, index) => {
            formData.append(`files`, file);
        });

        try {
            // Gọi API thêm ảnh cho sản phẩm
            await productService.updateImageForProduct(parseInt(idProduct), formData);

            // Hiện thông báo thêm thành công
            setAlert({ message: 'Thêm ảnh thành công', status: 200, visible: true });
            setTimeout(() => {
                setAlert({ ...alert, visible: false });
            }, 1500);

            // Update thông tin cho table danh sách sản phẩm đang bán
            handleUpdateTable(products.filter((item) => item.id === parseInt(idProduct)));

            // Update table sản phẩm chưa có ảnh
            setListProducts(listProducts.filter((item) => item.id !== parseInt(idProduct)));
        } catch (error) {
            console.log(`error at update img in FormAddImg: ${error}`);
            setAlert({ message: 'Có lỗi xảy ra', status: 500, visible: true });

            setTimeout(() => {
                setAlert({ ...alert, visible: false });
            }, 1500);
        }
    };
    const handleChangeSelection = (e) => {
        setIDProduct(e.target.value);
    };

    return (
        <div className="image-form-container">
            <div className="image-form-content row gx-2">
                <div className="col col-5 form-img">
                    <h2>Thêm ảnh cho sản phẩm</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            {/* <label className="input-text" htmlFor="select-id">
                                Chọn sản phẩm cần thêm ảnh
                            </label> */}
                            <select
                                value={idProduct}
                                onChange={handleChangeSelection}
                                className="form-select"
                                id="select-id"
                                aria-label="Default select example"
                            >
                                <option defaultValue={0}>--- Chọn sản phẩm cần thêm ---</option>
                                {listProducts.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        Sản phẩm có ID: {item.id}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                onChange={handleFileChange}
                                name="files"
                                type="file"
                                multiple
                                className="form-control"
                                id="img-select"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Lưu ảnh
                        </button>
                    </form>
                </div>
                <div className="col col-7 product-list">
                    {alert.visible && <AlertUtils message={alert.message} status={alert.status} />}
                    <table className="table table-hover table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listProducts.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.salePrice.toLocaleString()}đ</td>
                                    <td>{item.availableQuantity}</td>
                                    <td>Not active</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FormAddImg;
