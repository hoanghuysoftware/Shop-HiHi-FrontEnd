import React, { useEffect, useState } from 'react';
import '../style/sale-admin.css';
import saleService from '../../services/saleService';
import AlertNotify from '../../components/common/AlertNotify';

const SaleAdmin = () => {
    const [showAlert, setShowAlert] = useState(true);
    const [message, setMessage] = useState();
    const [status, setStatus] = useState();
    const [sales, setSales] = useState([]);
    const [newSale, setNewSales] = useState({ id: null, name: '', amount: '', startDate: '', endDate: '' });

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setNewSales((prevSale) => ({ ...prevSale, [name]: value }));
    };
    const fetchSales = async () => {
        try {
            const response = await saleService.getAllSales();
            setSales(response.data);
        } catch (error) {
            console.error('Error fetching sales:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sale = {
            id: newSale.id,
            name: newSale.name,
            amount: parseInt(newSale.amount),
            'start-date': newSale.startDate,
            'end-date': newSale.endDate,
        };
        // console.log(sale);
        try {
            const response = sale.id
                ? await saleService.updateSale(sale.id, sale)
                : await saleService.createNewSale(sale);

            setStatus(response.status);
            setMessage(response.message);
            await fetchSales();
        } catch (error) {
            console.error('Error create sales:', error);
        }
    };

    const handleClickTable = (e) => {
        setNewSales(e);
    };

    const handClickDelete = async (id) => {
        if (window.confirm('Bạn có chắc chắn xóa khuyến mãi này?')) {
            try {
                await saleService.deleteSale(id);
                await fetchSales();
            } catch (error) {
                console.error('Error delete sale:', error);
            }
        }
    };

    useEffect(() => {
        fetchSales();
    }, []);

    return (
        <div className="sale-admin-container">
            {showAlert && <AlertNotify message={message} duration={5000} status={status} onClose={handleCloseAlert} />}
            <div className="sale-admin-content row gx-2">
                <div className="col col-4 sale-admin-control">
                    <h2>Form thêm khuyến mãi</h2>
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
                        {newSale.id ? (
                            <button
                                onClick={() => setShowAlert(true)}
                                type="submit"
                                className="btn btn-warning btn-update"
                            >
                                Sửa
                            </button>
                        ) : (
                            <button onClick={() => setShowAlert(true)} type="submit" className="btn btn-primary">
                                Thêm mới
                            </button>
                        )}
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
                                <th scope="col" colSpan={2}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.startDate}</td>
                                    <td>{item.endDate}</td>
                                    <td>
                                        <button onClick={() => handleClickTable(item)} className="btn btn-warning ">
                                            Sửa
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handClickDelete(item.id)} className="btn btn-danger">
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

export default SaleAdmin;
