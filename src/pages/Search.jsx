import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../style/search.css';
import Pagination from '../components/common/Pagination';
import Navbar from '../components/common/Navbar';
import productService from '../services/productService';
import ProductCategory from '../components/common/ProductCategory';
import { debounce } from 'lodash';

const Search = () => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    const [productList, setProductList] = useState([]);
    const [totalPage, setTotalPage] = useState('');
    const [page, setPage] = useState(0);
    const [totalResults, setTotalResults] = useState('');

    const handleChangePage = (page) => {
        setPage(page);
    };

    const featchDataSearch = async (keyword) => {
        try {
            const response = await productService.searchProduct(page, keyword);
            // console.log(response.data);
            setTotalResults(response.data.totalElements);
            setTotalPage(response.data.totalPages);
            setProductList(response.data.content);
        } catch (error) {
            console.log('Error fetching data at search page', error);
        }
    };

    const debounceFetchData = debounce(featchDataSearch, 1000);

    useEffect(() => {
        // featchDataSearch(keyword);
        debounceFetchData(keyword);
    }, [keyword, page]);

    return (
        <div>
            <div className="container">
                <Navbar />
                <div className="search-container">
                    <div className="search-top">
                        <h2 className="search-title">
                            Kết quả tìm kiếm cho: <span>{keyword}</span>
                        </h2>
                        <p className="search-total">
                            <span>{totalResults}</span> sản phẩm
                        </p>
                    </div>
                    <div className="search-list">
                        <ProductCategory listProduct={productList} />
                    </div>
                    <div className="search-pagination">
                        <Pagination totalPage={totalPage} change={handleChangePage} currentPage={page} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
