import React, { Component } from 'react';
import '../../style/backtotop.css';

class BackToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }

    // Hàm xử lý sự kiện khi nhấn vào nút "Back to Top"
    handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Cuộn lên mượt mà
        });
    };

    // Hàm theo dõi vị trí scroll để hiển thị hoặc ẩn nút
    handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 300) {
            // Khi cuộn xuống hơn 300px, hiển thị nút
            this.setState({ isVisible: true });
        } else {
            this.setState({ isVisible: false });
        }
    };

    componentDidMount() {
        // Thêm sự kiện cuộn
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // Gỡ bỏ sự kiện cuộn khi component bị tháo bỏ
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            this.state.isVisible && (
                <button className="back-to-top" onClick={this.handleClick}>
                    <i className="fa-regular fa-circle-up"></i>
                </button>
            )
        );
    }
}

export default BackToTop;
