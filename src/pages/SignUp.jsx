import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/signup.css';
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Log thông tin đã nhập ra console
        console.log({
            name,
            email,
            phone,
            gender,
            date,
            address,
            username,
            password,
        });
        // Chuyển hướng đến trang đăng nhập
        navigate('/login');
    };

    const handleLinkToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="container-fluid">
            <div className="sign-up-container">
                <div className="row gx-2 shadow-sm sign-up-content">
                    <div className="sign-up-left col col-6">
                        <h3 className="sign-up-title">Đăng ký</h3>
                        <div className="sign-up-form">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Họ tên
                                    </label>
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        E-mail
                                    </label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        id="email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">
                                        Số điện thoại
                                    </label>
                                    <input
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        value={phone}
                                        id="phone"
                                    />
                                </div>
                                <div className="mb-3 radio-gender ">
                                    <label className="form-label">Giới tính</label>
                                    <div className="gender-control ">
                                        <div className=" form-check">
                                            <input
                                                onChange={(e) => setGender(e.target.value)}
                                                value="Nam"
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="male"
                                            />
                                            <label className="form-check-label" htmlFor="male">
                                                Nam
                                            </label>
                                        </div>
                                        <div className=" form-check">
                                            <input
                                                onChange={(e) => setGender(e.target.value)}
                                                value={'Nu'}
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="female"
                                            />
                                            <label className="form-check-label" htmlFor="female">
                                                Nữ
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">
                                        Ngày sinh
                                    </label>

                                    <input
                                        onChange={(e) => setDate(e.target.value)}
                                        type="date"
                                        className="form-control"
                                        value={date}
                                        id="date"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">
                                        Địa chỉ
                                    </label>
                                    <input
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="address"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Tài khoản
                                    </label>
                                    <input
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="username"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Mật khẩu
                                    </label>
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        className="form-control"
                                        id="password"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Đăng ký
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="sign-up-right col col-6">
                        <div className="sign-up-right-content">
                            <h3 className="sign-up-right-title">Chào mứng đến đăng ký tài khoản</h3>
                            <p>Bạn đã có tài khoản</p>
                            <i className="sign-up-right-icon fa-solid fa-hand-point-down"></i>
                            <button onClick={handleLinkToLogin} type="button" className="btn btn-outline-secondary">
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
