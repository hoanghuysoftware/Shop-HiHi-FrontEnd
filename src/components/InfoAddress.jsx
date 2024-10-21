import React, { useEffect, useState } from 'react';
import '../style/infoaddress.css';
import addressService from '../services/addressService';
import data from '../data/address.json';
// import AddressModal from './common/AddressModal';

const InfoAddress = () => {
    const [listAddress, setAddress] = useState([]);
    const [dataAddress, setDataAddress] = useState([]);
    const [addressLV1, setAddressLV1] = useState('');
    const [addressLV2, setAddressLV2] = useState('');
    const [addressLV3, setAddressLV3] = useState('');
    const [addressDetails, setAddressDetails] = useState('');
    const [isUpdate, setIsUpdate] = useState(false);
    const [idUpdate, setIdUpdate] = useState('');

    const handleChangeSelectAddressLV1 = (e) => {
        setAddressLV1(e.target.value);
        setAddressLV2('');
        setAddressLV3('');
    };

    const handleChangeSelectAddressLV2 = (e) => {
        setAddressLV2(e.target.value);
        setAddressLV3('');
    };

    const handleChangeSelectAddressLV3 = (e) => {
        setAddressLV3(e.target.value);
    };

    const handChangeAddressDetails = (e) => {
        setAddressDetails(e.target.value);
    };

    const handleSubmitForm = async (e) => {
        const adress1 = dataAddress.find((item) => item.id === addressLV1).name || '';
        const adress2 =
            dataAddress.find((item) => item.id === addressLV1).data2.find((data) => data.id === addressLV2).name || '';
        const address3 =
            dataAddress
                .find((item) => item.id === addressLV1)
                .data2.find((data) => data.id === addressLV2)
                .data3.find((data3) => data3.id === addressLV3).name || '';

        const dataPost = {
            'name-address': `${addressDetails}, ${address3}, ${adress2}, ${adress1}`,
        };

        try {
            if (isUpdate) {
                await addressService.updateAddress(idUpdate, dataPost);
            } else {
                await addressService.addNewAddress(2, dataPost); // 2 => id of User
            }
            fetchDataAddress(2);
        } catch (error) {
            console.log(`Error when creating new address: ${error.message}`);
        }
    };

    const fetchDataAddress = async (idUser) => {
        try {
            const response = await addressService.getAddressUserByIdUser(idUser);
            setAddress(response.data);
        } catch (error) {
            console.log('Error fetching data address: ' + error);
        }
    };

    useEffect(() => {
        fetchDataAddress(2); // 2 =?> id user
        setDataAddress(data.data);
    }, []);

    const handleUpdate = (id) => {
        setIsUpdate(true);
        setIdUpdate(id);
    };

    return (
        <div className="address-user-body">
            <div className="address-user-top">
                <h3 className="address-user-top-title">Địa chỉ của tôi</h3>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#new-address">
                    <i className="fa-solid fa-plus mx-1"></i>
                    <span>Thêm địa chỉ mới</span>
                </button>
                {/* Modal for add new adress */}
                <div
                    className="modal fade"
                    id="new-address"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
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
                                            className="form-select form-select-sm shadow-sm"
                                            aria-label="Small select example"
                                            value={addressLV1}
                                            onChange={handleChangeSelectAddressLV1}
                                        >
                                            <option value={''}>Chọn Tỉnh/Thành phố</option>
                                            {dataAddress.map((item, index) => (
                                                <option key={index} value={item.id}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="address-modal-item">
                                        <label htmlFor="quan">Quận/Huyện</label>
                                        <select
                                            id="quan"
                                            className="form-select form-select-sm shadow-sm"
                                            aria-label="Small select example"
                                            value={addressLV2}
                                            onChange={handleChangeSelectAddressLV2}
                                        >
                                            <option defaultValue>Chọn Quận/Huyện</option>
                                            {dataAddress
                                                .find((province) => province.id === addressLV1)
                                                ?.data2.map((district) => (
                                                    <option key={district.id} value={district.id}>
                                                        {district.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                    <div className="address-modal-item">
                                        <label htmlFor="xa">Phường/Xã</label>
                                        <select
                                            id="xa"
                                            className="form-select form-select-sm shadow-sm"
                                            aria-label="Small select example"
                                            value={addressLV3}
                                            onChange={handleChangeSelectAddressLV3}
                                        >
                                            <option defaultValue>Chọn Phường/Xã</option>
                                            {dataAddress
                                                .find((province) => province.id === addressLV1)
                                                ?.data2.find((district) => district.id === addressLV2)
                                                ?.data3.map((ward) => (
                                                    <option key={ward.id} value={ward.id}>
                                                        {ward.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                    <div className="address-modal-item">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control my-2 shadow-sm"
                                                placeholder="Leave a comment here"
                                                id="detail"
                                                style={{ height: '100px' }}
                                                value={addressDetails}
                                                onChange={handChangeAddressDetails}
                                            ></textarea>
                                            <label htmlFor="detail">Chi tiết</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary shadow-sm" data-bs-dismiss="modal">
                                    Hủy
                                </button>
                                <button onClick={handleSubmitForm} type="button" className="btn btn-primary">
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
                    {listAddress.map((item, index) => (
                        <div key={index} className="address-user-main-item row">
                            <div className="col col-8 address-user-main-content">
                                <p>{item.nameAddress}</p>
                            </div>
                            <div className="col col-4 address-user-main-control">
                                <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#new-address"
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => handleUpdate(item.id)}
                                >
                                    Cập nhật
                                </button>
                                <button type="button" className="btn btn-danger">
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoAddress;
