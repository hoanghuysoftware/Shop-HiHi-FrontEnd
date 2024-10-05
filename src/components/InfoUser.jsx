import React from 'react';
import '../style/infouser.css';

class InfoUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            age: props.age,
        };
    }

    render() {
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
                                value={'hoanghuysoftware'}
                                readOnly
                            />
                        </div>
                        <div className="mb-3 form-item">
                            <label htmlFor="name" className="form-label">
                                Họ tên
                            </label>
                            <input type="text" className="form-control shadow-sm" id="name" />
                        </div>
                        <div className="mb-3 form-item">
                            <label htmlFor="email" className="form-label">
                                E-mail
                            </label>
                            <input type="email" className="form-control shadow-sm" id="email" />
                        </div>
                        <div className="mb-3 form-item">
                            <label htmlFor="phone" className="form-label">
                                Số điện thoại
                            </label>
                            <input type="text" className="form-control shadow-sm" id="phone" />
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
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="male">
                                        Nam
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="female" />
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
                            <input type="date" id="birthDay" className="form-control shadow-sm" name="birthDay" />
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
    }
}

export default InfoUser;
