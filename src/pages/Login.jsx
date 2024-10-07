import React, { useState } from 'react';
import '../style/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
    };

    const handleLinkSignUp = (e) => {
        navigate('/sign-up');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username + ' ' + password);
        navigate('/');
    };

    return (
        <div className="container-fluid">
            <div className="login-container">
                <div className="row gx-2 shadow-sm login-content">
                    <div className="col col-6 login-left">
                        <div className="login-top">
                            <h3 className="login-title">Đăng nhập</h3>
                            <div className="login-with">
                                <div className="login-google">
                                    <i className="fa-brands fa-google"></i>
                                </div>
                                <div className="login-facebook">
                                    <i className="fa-brands fa-facebook"></i>
                                </div>
                            </div>
                        </div>
                        <div className="login-main">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="username form-label">
                                        Tài khoản
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name="username"
                                        type="text"
                                        className="form-control"
                                        id="username"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="password form-label">
                                        Mật khẩu
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        id="password"
                                    />
                                </div>
                                <button type="submit" className="btn-login btn btn-primary">
                                    Đăng nhập
                                </button>
                                <div className="login-control-bottom">
                                    <div className=" form-check">
                                        <input type="checkbox" className="form-check-input" id="remember-account" />
                                        <label className="form-check-label" htmlFor="remember-account">
                                            Nhớ tài khoản
                                        </label>
                                    </div>
                                    <p onClick={handleLinkSignUp} className="fogot-pass">
                                        Quên mật khẩu
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col col-6 login-right">
                        <div className="login-right-container">
                            <h2 className="login-desc">Chào mừng bạn đến đăng nhập</h2>
                            <p>Bạn chưa có tài khoản ?</p>
                            <i className="fa-solid fa-hand-point-down"></i>
                            <button onClick={handleLinkSignUp} type="button" className="btn btn-outline-primary">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
