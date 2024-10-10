import React from 'react';

const TableProduct = ({ products, status }) => {
    // console.log(products);
    return (
        <table className="table table-hover">
            <thead className={status}>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Giá bán</th>
                    <th scope="col">Số lượng còn</th>
                    <th scope="col">Trạng thái</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="table-product-id">1</td>
                    <td>
                        <div className="table-product-name">
                            <img
                                className="img-table"
                                src={`${process.env.PUBLIC_URL}/images/product-test.jpg`}
                                alt=""
                            />
                            <p className="table-name-product-active">
                                [New 100%] HP Victus 15 fb2063dx 9Z7L4UA - AMD Ryzen 5-7535HS | Radeon RX 6550M | 15.6
                                inch Full HD 144Hz
                            </p>
                        </div>
                    </td>
                    <td>
                        <p className="table-price">14.000.000đ</p>
                    </td>
                    <td>
                        <p className="table-quantity">20</p>
                    </td>
                    <td>
                        {status === 'table-info' ? (
                            <p className="table-status-active">Active</p>
                        ) : (
                            <p className="table-status-false">Not Active</p>
                        )}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableProduct;
