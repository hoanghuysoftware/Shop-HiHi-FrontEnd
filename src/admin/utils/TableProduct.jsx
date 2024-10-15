import React from 'react';

const TableProduct = ({ products, status }) => {
    const handleImage = (image) => {
        if (image !== undefined) return `data:image/jpeg;base64,${image}`;
    };

    return (
        <table className="table table-hover">
            <thead className={status}>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">M.Hình</th>
                    <th scope="col">CPU</th>
                    <th scope="col">RAM</th>
                    <th scope="col">Giá bán</th>
                    <th scope="col">Số lượng còn</th>
                    <th scope="col">Trạng thái</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item, index) => (
                    <tr key={item.id}>
                        <td className="table-product-id">{item.id}</td>
                        <td>
                            <div className="table-product-name">
                                <img className="img-table" src={handleImage(item.thumbnail)} alt="" />
                                <p className="table-name-product-active">{item.name}</p>
                            </div>
                        </td>
                        <td>{item.screen}</td>
                        <td>{item.cpu}</td>
                        <td>{item.ram}</td>
                        <td>
                            <p className="table-price">
                                {item.salePrice ? item.salePrice.toLocaleString() + 'đ' : 'N/A'}
                            </p>
                        </td>
                        <td>
                            <p className="table-quantity">{item.availableQuantity}</p>
                        </td>
                        <td>
                            {status === 'table-info' ? (
                                <p className="table-status-active">Active</p>
                            ) : (
                                <p className="table-status-false">Not Active</p>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableProduct;
