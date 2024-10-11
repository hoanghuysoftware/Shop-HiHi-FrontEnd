import React, { useState } from 'react';
import '../style/add-image.css';

const FormAddImg = () => {
    const [selectFiles, setSelectFiles] = useState([]);
    const [idProduct, setIDProduct] = useState('');

    const handleFileChange = (e) => {
        const files = e.target.files;
        setSelectFiles(Array.from(files));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        selectFiles.forEach((file, index) => {
            formData.append(`file ${index}`, file);
        });
        console.log(`id: ${idProduct}\ndata: ${formData}`);
    };
    const handleChangeSelection = (e) => {
        setIDProduct(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className="image-form-container">
            <div className="image-form-content row gx-2">
                <div className="col col-7 product-list">
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
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX 6550M |
                                    15.6 inch Full HD 144Hz
                                </td>
                                <td>14.000.000đ</td>
                                <td>20</td>
                                <td>Not active</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX 6550M |
                                    15.6 inch Full HD 144Hz
                                </td>
                                <td>14.000.000đ</td>
                                <td>20</td>
                                <td>Not active</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col col-5 form-img">
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
                                <option value="1">Sản phẩm có 1</option>
                                <option value="2">Sản phẩm có 2</option>
                                <option value="3">Sản phẩm có 3</option>
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
            </div>
        </div>
    );
};

export default FormAddImg;
