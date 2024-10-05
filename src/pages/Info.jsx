import React from 'react';
import Header from '../components/Header';
import InfoUser from '../components/InfoUser';
import '../style/info.css';
import InfoAddress from '../components/InfoAddress';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Doe',
            age: 30,
            address: '123 Main St, City, State, ZIP',
        };
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="d-flex mt-3 p-2 align-items-start info-wapper">
                        <div
                            className="nav flex-column nav-pills me-3 info-control-tab-list"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                        >
                            <button
                                className="nav-link active"
                                id="user-info-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#user-info"
                                type="button"
                                role="tab"
                                aria-controls="user-info"
                                aria-selected="true"
                            >
                                Thông tin
                            </button>
                            <button
                                className="nav-link"
                                id="user-address-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#user-address"
                                type="button"
                                role="tab"
                                aria-controls="user-address"
                                aria-selected="false"
                            >
                                Địa chỉ
                            </button>
                            <button
                                className="nav-link"
                                id="v-pills-disabled-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-disabled"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-disabled"
                                aria-selected="false"
                                disabled
                            >
                                Disabled
                            </button>
                            <button
                                className="nav-link"
                                id="v-pills-messages-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-messages"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-messages"
                                aria-selected="false"
                            >
                                Messages
                            </button>
                            <button
                                className="nav-link"
                                id="v-pills-settings-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-settings"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-settings"
                                aria-selected="false"
                            >
                                Settings
                            </button>
                        </div>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="user-info"
                                role="tabpanel"
                                aria-labelledby="user-info-tab"
                                tabIndex="0"
                            >
                                <InfoUser />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="user-address"
                                role="tabpanel"
                                aria-labelledby="user-address-tab"
                                tabIndex="0"
                            >
                                <InfoAddress />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="v-pills-disabled"
                                role="tabpanel"
                                aria-labelledby="v-pills-disabled-tab"
                                tabIndex="0"
                            >
                                ...
                            </div>
                            <div
                                className="tab-pane fade"
                                id="v-pills-messages"
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-tab"
                                tabIndex="0"
                            >
                                ...
                            </div>
                            <div
                                className="tab-pane fade"
                                id="v-pills-settings"
                                role="tabpanel"
                                aria-labelledby="v-pills-settings-tab"
                                tabIndex="0"
                            >
                                ...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;
