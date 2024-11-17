import React, { useEffect, useState } from 'react';
import '../style/category.css';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Pagination from '../components/common/Pagination';
import BackToTop from '../components/common/BackToTop';
import productService from '../services/productService';
import ProductCategory from '../components/common/ProductCategory';

const Category = (e) => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('category-name');
    const [brandId, setBrandId] = useState('');
    const [active, setActive] = useState('');
    const [productList, setProductList] = useState([]);
    const [totalPage, setTotalPage] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    const handleClickButton = (e) => {
        setActive(e);
        console.log(keyword);
        // setKeyWord(e.target.value);
    };
    const convertKeyword = (keyword) => {
        switch (keyword) {
            case 'Asus':
                return 1;
            case 'Dell':
                return 2;
            case 'Acer':
                return 6;
            case 'Msi':
                return 5;
            case 'Hp':
                return 4;
            case 'Lenovo':
                return 3;
            default:
                return null;
        }
    };

    const handleClickBrand = (brandId) => {
        setBrandId(brandId);
    };

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const loadDataByBrandId = async (brandId) => {
        try {
            const response = await productService.getProductByBrandid(brandId, 0, 10);
            setProductList(response.data);
            setTotalPage(response.totalPage);
        } catch (error) {
            console.error('Error loading data by brand id at category.jsx: ' + brandId);
        }
    };
    useEffect(() => {
        if (brandId !== '') {
            loadDataByBrandId(parseInt(brandId));
        } else {
            loadDataByBrandId(parseInt(convertKeyword(keyword)));
        }
    }, [brandId, keyword]);

    return (
        <div>
            <Navbar />
            <div className="container">
                <BackToTop />
                <div className="category-top">
                    <div className="category-top-link-brand">
                        <h3 className="category-top-link-title">Thương hiệu: </h3>
                        <div className="category-top-link-content">
                            <div className="category-top-link-brand-item">
                                <img
                                    onClick={() => handleClickBrand(1)}
                                    className="shadow-sm"
                                    src={`${process.env.PUBLIC_URL}/asus.png`}
                                    alt=""
                                />
                            </div>
                            <div className="category-top-link-brand-item">
                                <img
                                    onClick={() => handleClickBrand(4)}
                                    className="shadow-sm"
                                    src={`${process.env.PUBLIC_URL}/hp.png`}
                                    alt=""
                                />
                            </div>
                            <div className="category-top-link-brand-item">
                                <img
                                    onClick={() => handleClickBrand(2)}
                                    className="shadow-sm"
                                    src={`${process.env.PUBLIC_URL}/dell.png`}
                                    alt=""
                                />
                            </div>
                            <div className="category-top-link-brand-item">
                                <img
                                    onClick={() => handleClickBrand(6)}
                                    className="shadow-sm"
                                    src={`${process.env.PUBLIC_URL}/acer.png`}
                                    alt=""
                                />
                            </div>
                            <div className="category-top-link-brand-item">
                                <img
                                    onClick={() => handleClickBrand(5)}
                                    className="shadow-sm"
                                    src={`${process.env.PUBLIC_URL}/msi.png`}
                                    alt=""
                                />
                            </div>
                            <div className="category-top-link-brand-item">
                                <img
                                    onClick={() => handleClickBrand(3)}
                                    className="shadow-sm"
                                    src={`${process.env.PUBLIC_URL}/lenovo.png`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="category-top-link-price">
                        <h3 className="category-top-link-title">Chọn khoảng giá: </h3>
                        <div className="category-top-link-content">
                            <button
                                onClick={() => handleClickButton('Dưới 10 triệu')}
                                type="button"
                                className={`btn btn-outline-primary ${active === 'Dưới 10 triệu' ? 'active-filter' : ''}`}
                            >
                                Dưới 10 triệu
                            </button>
                            <button
                                type="button"
                                onClick={() => handleClickButton('10 triệu - 15 triệu')}
                                className={`btn btn-outline-primary ${active === '10 triệu - 15 triệu' ? 'active-filter' : ''}`}
                            >
                                10 triệu - 15 triệu
                            </button>
                            <button
                                type="button"
                                onClick={() => handleClickButton('15 triệu - 20 triệu')}
                                className={`btn btn-outline-primary ${active === '15 triệu - 20 triệu' ? 'active-filter' : ''}`}
                            >
                                15 triệu - 20 triệu
                            </button>
                            <button
                                type="button"
                                onClick={() => handleClickButton('20 triệu - 30 triệu')}
                                className={`btn btn-outline-primary ${active === '20 triệu - 30 triệu' ? 'active-filter' : ''}`}
                            >
                                20 triệu - 30 triệu
                            </button>
                            <button
                                type="button"
                                onClick={() => handleClickButton('30 triệu - 50 triệu')}
                                className={`btn btn-outline-primary ${active === '30 triệu - 50 triệu' ? 'active-filter' : ''}`}
                            >
                                30 triệu - 50 triệu
                            </button>
                            <button
                                type="button"
                                onClick={() => handleClickButton('Trên 50 triệu')}
                                className={`btn btn-outline-primary ${active === 'Trên 50 triệu' ? 'active-filter' : ''}`}
                            >
                                Trên 50 triệu
                            </button>
                        </div>
                    </div>
                    <div className="category-top-link-filter">
                        <h3 className="category-top-link-title">Sắp xếp theo: </h3>
                        <div className="category-top-link-content">
                            <button
                                type="button"
                                onClick={() => handleClickButton('Giá tăng dần')}
                                className={`btn btn-outline-primary ${active === 'Giá tăng dần' ? 'active-filter' : ''}`}
                            >
                                Giá tăng dần
                            </button>
                            <button
                                type="button"
                                onClick={() => handleClickButton('Giá giảm dần')}
                                className={`btn btn-outline-primary ${active === 'Giá giảm dần' ? 'active-filter' : ''}`}
                            >
                                Giá giảm dần
                            </button>
                            <button
                                type="button"
                                onClick={() => handleClickButton('Tên A->Z')}
                                className={`btn btn-outline-primary ${active === 'Tên A->Z' ? 'active-filter' : ''}`}
                            >
                                Tên A-{'>'}Z
                            </button>
                        </div>
                    </div>
                </div>
                <div className="catefory-main">
                    <ProductCategory listProduct={productList} />
                </div>
                <div className="category-pagination">
                    <Pagination totalPage={totalPage} change={handleChangePage} currentPage={currentPage} />
                </div>
            </div>
        </div>
    );
};

export default Category;
