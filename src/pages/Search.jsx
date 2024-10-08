import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../style/search.css';
import Header from '../components/Header';
import Product from '../components/common/Product';
import Pagination from '../components/common/Pagination';
import Navbar from '../components/common/Navbar';

const Search = () => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    console.log(keyword === '');

    return (
        <div>
            <Header />
            <div className="container">
                <Navbar />
                <div className="search-container">
                    <div className="search-top">
                        <h2 className="search-title">
                            Kết quả tìm kiếm cho: <span>{keyword}</span>
                        </h2>
                        <p className="search-total">
                            <span>32</span> sản phẩm
                        </p>
                    </div>
                    <div className="search-list">
                        <Product />
                    </div>
                    <div className="search-pagination">
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
