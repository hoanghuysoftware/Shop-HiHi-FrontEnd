import React, { useState } from 'react';

const SaleAdmin = () => {
    const [sales, setSales] = useState([]);
    const [newSale, setNewSales] = useState({ name: '', amount: '', startDate: '', endDate: '' });

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setNewSales((prevSale) => ({ ...prevSale, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newSale);
    };
    return (
        <div className="sale-admin-container" style={{ width: '100%' }}>
            <div className="sale-admin-content row gx-2">
                <div className="col col-4 sale-admin-control">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name-sale" className="form-label">
                                Nhập tên khuyến mãi
                            </label>
                            <input
                                onChange={handleChangeInput}
                                name="name"
                                value={newSale.name}
                                type="text"
                                className="form-control"
                                id="name-sale"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="amount-sale" className="form-label">
                                Nhập % khuyến mãi
                            </label>
                            <input
                                onChange={handleChangeInput}
                                name="amount"
                                value={newSale.amount}
                                type="number"
                                className="form-control"
                                id="amount-sale"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date-start-sale" className="form-label">
                                Ngày bắt đầu
                            </label>
                            <input
                                onChange={handleChangeInput}
                                name="startDate"
                                value={newSale.startDate}
                                type="date"
                                className="form-control"
                                id="date-start-sale"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date-end-sale" className="form-label">
                                Ngày kết thúc
                            </label>
                            <input
                                onChange={handleChangeInput}
                                name="endDate"
                                value={newSale.endDate}
                                type="date"
                                className="form-control"
                                id="date-end-sale"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Thêm mới
                        </button>
                    </form>
                </div>
                <div className="col col-8 sale-admin-data">
                    <table className="table  table-striped table-hover ">
                        <thead className="table-success">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Tên</th>
                                <th scope="col">%</th>
                                <th scope="col">Ngày bắt đầu</th>
                                <th scope="col">Ngày kết thúc</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Khuyến mãi năm mới</td>
                                <td>15</td>
                                <td>09-10-2024</td>
                                <td>09-11-2024</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Sản phẩm mới</td>
                                <td>20</td>
                                <td>01-10-2024</td>
                                <td>01-11-2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SaleAdmin;
