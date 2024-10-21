import React, { useEffect, useState } from 'react';
import '../style/infouser.css';
import userService from '../services/userService';

const InfoUser = () => {
    const [user, setUser] = useState();

    const fetchDataUser = async (idUser) => {
        try {
            const response = await userService.getUserById(idUser);
            const value = {
                id: response.data.id,
                username: response.data.username,
                name: response.data.name,
                email: response.data.email,
                phoneNumber: response.data.phoneNumber,
                birthDate: response.data.birthDate,
                gender: response.data.gender,
            };
            setUser(value);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    useEffect(() => {
        fetchDataUser(2); // Replace with your user id
    }, []);

    return (
        <div className="info-user-body">
            <div className="info-user-top">
                <h3 className="info-user-title">Hồ sơ của tôi</h3>
                <h5 className="info-user-explain">Quản lý thông tin hồ sơ để bảo mật tài khoản</h5>
            </div>
            <div className="info-user-main">
                <form>
                    <div className="mb-3 form-item">
                        <label htmlFor="username" className="form-label">
                            Tên đăng nhập
                        </label>
                        <input
                            type="text"
                            className="form-control shadow-sm"
                            id="username"
                            value={user?.username || ''}
                            readOnly
                        />
                    </div>
                    <div className="mb-3 form-item">
                        <label htmlFor="name" className="form-label">
                            Họ tên
                        </label>
                        <input
                            value={user?.name || ''}
                            onChange={handleChange}
                            name="name"
                            type="text"
                            className="form-control shadow-sm"
                            id="name"
                        />
                    </div>
                    <div className="mb-3 form-item">
                        <label htmlFor="email" className="form-label">
                            E-mail
                        </label>
                        <input
                            name="email"
                            value={user?.email || ''}
                            onChange={handleChange}
                            type="email"
                            className="form-control shadow-sm"
                            id="email"
                        />
                    </div>
                    <div className="mb-3 form-item">
                        <label htmlFor="phone" className="form-label">
                            Số điện thoại
                        </label>
                        <input
                            name="phoneNumber"
                            onChange={handleChange}
                            value={user?.phoneNumber || ''}
                            type="text"
                            className="form-control shadow-sm"
                            id="phone"
                        />
                    </div>
                    <div className="mb-3 form-item">
                        <label htmlFor="gender" className="form-label">
                            Giới tính
                        </label>
                        <div className="radio-gender">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    value="MALE"
                                    checked={user?.gender === 'MALE'}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="male">
                                    Nam
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    value="FEMALE"
                                    checked={user?.gender === 'FEMALE'}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="female">
                                    Nữ
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 form-item">
                        <label htmlFor="birthDay" className="form-label">
                            Ngày sinh
                        </label>
                        <input
                            name="birthDate"
                            value={user?.birthDate || ''}
                            onChange={handleChange}
                            type="date"
                            id="birthDay"
                            className="form-control shadow-sm"
                        />
                    </div>

                    <div className="btn-control">
                        <button type="button" className="btn btn-primary">
                            Lưu
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InfoUser;
