import React, { Component } from 'react';
import Product from '../components/common/Product';
import Header from '../components/Header';
import SileShow from '../components/SileShow';
import BackToTop from '../components/common/BackToTop';
import Navbar from '../components/common/Navbar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <SileShow />
                <div className="container">
                    <Product />
                    <BackToTop />
                </div>
            </div>
        );
    }
}

export default Home;
