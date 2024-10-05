import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';

class AddressModal extends React.Component {
    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
        this.modalInstance = null;
    }

    componentDidMount() {
        this.modalInstance = new window.bootstrap.Modal(this.modalRef.current);
    }

    showModal = () => {
        if (this.modalInstance) {
            this.modalInstance.show();
        }
    };

    hideModal = () => {
        if (this.modalInstance) {
            this.modalInstance.hide(); // Ẩn modal bằng Bootstrap API

            // Xóa thủ công lớp backdrop nếu nó còn sót lại
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.classList.remove('show'); // Xóa lớp 'show' khỏi backdrop
                backdrop.remove(); // Hoặc xóa hoàn toàn backdrop nếu cần
            }
        }
    };

    render() {
        return (
            <div>
                <div
                    className="modal fade"
                    id="new-address"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="new-addressLabel"
                    aria-hidden="true"
                    ref={this.modalRef}
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
                                    onClick={this.hideModal} // Thêm onClick để ẩn modal
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={this.hideModal} // Đảm bảo nút Close cũng ẩn modal
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Understood
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddressModal;
