import React, { useState } from 'react';
import '../style/add-product.css';

const FormAddProduct = () => {
    const [formData, setFormData] = useState({
        supplier: '',
        brand: '',
        sale: '',
        nameProduct: '',
        quantity: '',
        price: '',
        screen: '',
        cpu: '',
        ram: '',
        rom: '',
        card: '',
        description: '',
        types: [],
    });

    const [products, setProducts] = useState([]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        const typeValue = e.target.nextSibling.textContent;

        setFormData((prevState) => {
            const newTypes = checked
                ? [...prevState.types, typeValue]
                : prevState.types.filter((type) => type !== typeValue);
            return { ...prevState, types: newTypes };
        });
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        setProducts([...products, formData]);
        setFormData({
            supplier: '',
            brand: '',
            sale: '',
            nameProduct: '',
            quantity: '',
            price: '',
            screen: '',
            cpu: '',
            ram: '',
            rom: '',
            card: '',
            description: '',
            types: [],
        });
        console.log('Product added temporarily:', formData);
    };

    const handleSubmit = () => {
        console.log('Submitting all products:', products);
        // Thực hiện logic gửi dữ liệu lên server tại đây
    };

    return (
        <div className="add-product-container row">
            <form className="col col-4" style={{ background: '#fff' }} onSubmit={handleAddProduct}>
                <div className="mb-3">
                    <label htmlFor="supplier" className="form-label">Nhà cung cấp</label>
                    <select id="supplier" className="form-select shadow-sm" value={formData.supplier} onChange={handleInputChange}>
                        <option value="">-- Chọn nhà cung cấp --</option>
                        <option value="1">Điện máy xanh</option>
                        <option value="2">Phong vũ</option>
                        <option value="3">F88 shop</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="brand" className="form-label">Thương hiệu</label>
                    <select id="brand" className="form-select shadow-sm" value={formData.brand} onChange={handleInputChange}>
                        <option value="">-- Chọn thương hiệu --</option>
                        <option value="1">Asus</option>
                        <option value="2">Dell</option>
                        <option value="3">MSI</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="sale" className="form-label">Khuyến mãi</label>
                    <select id="sale" className="form-select shadow-sm" value={formData.sale} onChange={handleInputChange}>
                        <option value="">-- Chọn khuyến mãi --</option>
                        <option value="1">Khuyến mãi hàng mới</option>
                        <option value="2">Khuyến mãi cuối năm</option>
                        <option value="3">Khuyến mãi đầu năm</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="nameProduct" className="form-label">Tên sản phẩm</label>
                    <input type="text" className="form-control shadow-sm" id="nameProduct" value={formData.nameProduct} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Số lượng nhập</label>
                    <input type="number" className="form-control shadow-sm" id="quantity" value={formData.quantity} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Giá nhập</label>
                    <input type="number" className="form-control shadow-sm" id="price" value={formData.price} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="screen" className="form-label">Màn hình</label>
                    <input type="text" className="form-control shadow-sm" id="screen" value={formData.screen} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpu" className="form-label">CPU</label>
                    <input type="text" className="form-control shadow-sm" id="cpu" value={formData.cpu} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="ram" className="form-label">RAM</label>
                    <input type="text" className="form-control shadow-sm" id="ram" value={formData.ram} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="rom" className="form-label">ROM</label>
                    <input type="text" className="form-control shadow-sm" id="rom" value={formData.rom} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="card" className="form-label">Card</label>
                    <input type="text" className="form-control shadow-sm" id="card" value={formData.card} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Mô tả sản phẩm</label>
                    <textarea className="form-control shadow-sm" id="description" rows="3" value={formData.description} onChange={handleInputChange}></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Loại sản phẩm</label>
                    <div className="type-product-list">
                        {['Văn phòng giá rẻ', 'Văn phòng tầm trung', 'Văn phòng cao cấp', 'Gaming giá rẻ', 'Gaming tầm trung', 'Gaming cao cấp', 'Kỹ thuật giá rẻ', 'Kỹ thuật tầm trung', 'Kỹ thuật cao cấp'].map((type, index) => (
                            <div className="form-check" key={index}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={type}
                                    id={`type-product-check${index}`}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="form-check-label" htmlFor={`type-product-check${index}`}>
                                    {type}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Thêm vào phiếu nhập</button>
            </form>

            <div className="col col-8 data-receipt-list">
                <table className="table table-hover">
                    <thead className="table-info">
                        <tr>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá nhập</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">M.Hình</th>
                            <th scope="col">CPU</th>
                            <th scope="col">RAM</th>
                            <th scope="col">ROM</th>
                            <th scope="col">CARD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td className='add-product-table-name'>{product.nameProduct}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.screen}</td>
                                <td>{product.cpu}</td>
                                <td>{product.ram}</td>
                                <td>{product.rom}</td>
                                <td>{product.card}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" className="btn btn-primary btn-import" onClick={handleSubmit}>Nhập hàng</button>
            </div>
        </div>
    );
};

export default FormAddProduct;
