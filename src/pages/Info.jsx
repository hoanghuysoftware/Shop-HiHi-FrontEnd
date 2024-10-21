import React from 'react';
import InfoUser from '../components/InfoUser';
import '../style/info.css';
import InfoAddress from '../components/InfoAddress';
import InfoOrder from '../components/InfoOrder';

class Info extends React.Component {
    constructor(props) {
        super(props);
        const urlParams = new URLSearchParams(window.location.search);
        const activeTab = urlParams.get('tab') || 'user-info';
        this.state = {
            activeTab,
        };
    }
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const activeTab = urlParams.get('tab') || 'user-info';
        this.setState({ activeTab });
    }
    render() {
        const { activeTab } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="d-flex mt-3 p-2 align-items-start info-wapper">
                        <div
                            className="nav col-2 flex-column nav-pills me-3 info-control-tab-list"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                        >
                            <button
                                className={`nav-link ${activeTab === 'user-info' ? 'active' : ''}`}
                                id="user-info-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#user-info"
                                type="button"
                                role="tab"
                                aria-controls="user-info"
                                aria-selected={this.state.activeTab === 'user-info'}
                            >
                                Thông tin
                            </button>
                            <button
                                className={`nav-link ${activeTab === 'user-address' ? 'active' : ''}`}
                                id="user-address-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#user-address"
                                type="button"
                                role="tab"
                                aria-controls="user-address"
                                aria-selected={this.state.activeTab === 'user-address'}
                            >
                                Địa chỉ
                            </button>
                            <button
                                className={`nav-link ${activeTab === 'order-history' ? 'active' : ''}`}
                                id="order-history-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#order-history"
                                type="button"
                                role="tab"
                                aria-controls="order-history"
                                aria-selected={this.state.activeTab === 'order-history'}
                            >
                                Lịch sử mua hàng
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
                                className={`tab-pane fade ${this.state.activeTab === 'user-info' ? 'show active' : ''}`}
                                id="user-info"
                                role="tabpanel"
                                aria-labelledby="user-info-tab"
                                tabIndex="0"
                            >
                                <InfoUser />
                            </div>
                            <div
                                className={`tab-pane fade ${this.state.activeTab === 'user-address' ? 'show active' : ''}`}
                                id="user-address"
                                role="tabpanel"
                                aria-labelledby="user-address-tab"
                                tabIndex="0"
                            >
                                <InfoAddress />
                            </div>
                            <div
                                className={`tab-pane fade ${this.state.activeTab === 'order-history' ? 'show active' : ''}`}
                                id="order-history"
                                role="tabpanel"
                                aria-labelledby="order-history-tab"
                                tabIndex="0"
                            >
                                <InfoOrder />
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
