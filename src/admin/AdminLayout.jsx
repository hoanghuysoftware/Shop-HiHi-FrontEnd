import React from 'react';

const AdminLayout = () => {
    return (
        <div className="container-fluid">
            <div className="admin-tab">
                <div className="d-flex align-items-start">
                    <div
                        className="nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <div className="admin-logo-shop">
                            <img src={`${process.env.PUBLIC_URL}/logo-main.png`} alt="" />
                        </div>
                        <button
                            className="nav-link active"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                        >
                            Home
                        </button>
                        <button
                            className="nav-link"
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                        >
                            Profile
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
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                            tabindex="0"
                        >
                            ...
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                            tabindex="0"
                        >
                            ...
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-disabled"
                            role="tabpanel"
                            aria-labelledby="v-pills-disabled-tab"
                            tabindex="0"
                        >
                            ...
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-messages"
                            role="tabpanel"
                            aria-labelledby="v-pills-messages-tab"
                            tabindex="0"
                        >
                            ...
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-settings"
                            role="tabpanel"
                            aria-labelledby="v-pills-settings-tab"
                            tabindex="0"
                        >
                            ...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
