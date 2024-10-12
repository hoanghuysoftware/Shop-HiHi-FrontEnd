import React from 'react';
import '../style/account-admin.css';
import { Link } from 'react-router-dom';

const AccountAdmin = () => {
    return (
        <div className="account-content">
            <div className="dropstart me-4">
                <button
                    type="button"
                    className="btn btn-outline-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span className="alert-new-notify position-absolute bg-warning top-0 start-100 translate-middle p-2 border border-light rounded-circle">
                        <span className="visually-hidden">New alerts</span>
                    </span>
                    <i className="mx-2 fa-regular fa-bell"></i>
                    Thông báo
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="/login">
                            Đăng xuất
                        </a>
                    </li>
                </ul>
            </div>
            <div className="dropstart me-4">
                <button
                    type="button"
                    className="btn btn-outline-success dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <i className="mx-2 fa-regular fa-envelope"></i>
                    Tin nhắn
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" to={`/login`}>
                            Đăng xuất
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i className="mx-2 fa-solid fa-user-gear"></i>
                    Admin
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="/login">
                            Đăng xuất
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AccountAdmin;
