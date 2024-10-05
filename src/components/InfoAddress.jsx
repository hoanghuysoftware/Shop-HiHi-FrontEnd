import React from 'react';
import '../style/infoaddress.css';
// import AddressModal from './common/AddressModal';

class InfoAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '123 Main St, Anytown, USA',
        };
    }

    render() {
        return (
            <div className="address-user-body">
                <div className="address-user-top">
                    <h3 className="address-user-top-title">Địa chỉ của tôi</h3>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#new-address"
                    >
                        <i className="fa-solid fa-plus mx-1"></i>
                        <span>Thêm địa chỉ mới</span>
                    </button>
                    {/* Modal for add new adress */}
                    <div
                        className="modal fade"
                        id="new-address"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="new-addressLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="new-addressLabel">
                                        Địa chỉ mới
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div className="address-modal-main">
                                        <div className="address-modal-item">
                                            <label htmlFor="tinh">Tỉnh</label>
                                            <select
                                                id="tinh"
                                                className="form-select form-select-sm"
                                                aria-label="Small select example"
                                            >
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="address-modal-item">
                                            <label htmlFor="quan">Quận/Huyện</label>
                                            <select
                                                id="quan"
                                                className="form-select form-select-sm"
                                                aria-label="Small select example"
                                            >
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="address-modal-item">
                                            <label htmlFor="xa">Xã</label>
                                            <select
                                                id="xa"
                                                className="form-select form-select-sm"
                                                aria-label="Small select example"
                                            >
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="address-modal-item">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control my-2"
                                                    placeholder="Leave a comment here"
                                                    id="detail"
                                                    style={{ height: '100px' }}
                                                ></textarea>
                                                <label htmlFor="detail">Chi tiết</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                        Hủy
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Lưu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="address-user-main">
                    <h3 className="address-user-main-title">Địa chỉ hiện có</h3>
                    <div className="address-user-main-list">
                        <div className="address-user-main-item row">
                            <div className="col col-8 address-user-main-content">
                                <p>{this.state.address}</p>
                            </div>
                            <div className="col col-4 address-user-main-control">
                                <button type="button" className="btn btn-success">
                                    Cập nhật
                                </button>
                                <button type="button" className="btn btn-danger">
                                    Xóa
                                </button>
                            </div>
                        </div>
                        <div className="address-user-main-item row">
                            <div className="col col-8 address-user-main-content">
                                <p>{this.state.address}</p>
                            </div>
                            <div className="col col-4 address-user-main-control">
                                <button type="button" className="btn btn-success">
                                    Cập nhật
                                </button>
                                <button type="button" className="btn btn-danger">
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoAddress;
