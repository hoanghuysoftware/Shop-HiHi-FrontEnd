import React, { Component } from 'react';
import Product from '../components/common/Product';
import Header from '../components/Header';
import SileShow from '../components/SileShow';

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
                <SileShow />
                <div className="container">
                    <Product />
                </div>
            </div>
        );
    }
}

export default Home;
