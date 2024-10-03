import React, { Component } from 'react';
import '../style/sileshow.css';

class SileShow extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="carouselExampleIndicators" className="col col-12 carousel slide">
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="3"
                                aria-label="Slide 4"
                            ></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/sile1.webp`}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/sile2.webp`}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/sile3.webp`}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/sile4.webp`}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="row gx-1 sile-list">
                    <div className="col col-4 sile-item">
                        <img src={`${process.env.PUBLIC_URL}/images/img1.jpg`} alt="" className="sile-item-img" />
                    </div>
                    <div className="col col-4 sile-item">
                        <img src={`${process.env.PUBLIC_URL}/images/img2.jpg`} alt="" className="sile-item-img" />
                    </div>
                    <div className="col col-4 sile-item">
                        <img src={`${process.env.PUBLIC_URL}/images/img4.jpg`} alt="" className="sile-item-img" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SileShow;
