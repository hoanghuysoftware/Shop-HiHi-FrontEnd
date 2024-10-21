import React, { useEffect, useState } from 'react';
import Product from '../components/common/Product';
import SileShow from '../components/SileShow';
import BackToTop from '../components/common/BackToTop';
import Navbar from '../components/common/Navbar';
import brandService from '../services/brandService';
import { Link } from 'react-router-dom';

const Home = () => {
    const [listBrand, setBrand] = useState([]);
    // const [listProduct, setListProduct] = useState([]);
    const fetchBrand = async () => {
        try {
            const response = await brandService.getAllBrand();
            setBrand(response.data);
        } catch (error) {
            console.log('Error fetching brand at home page', error);
        }
    };

    // const featchDataByBrandId = async (idBrand) => {
    //     try {
    //         const response = await productService.getProductByBrandid(idBrand, 0, size);
    //         setListProduct(response.data);
    //     } catch (error) {
    //         console.log('fetch data brand home error: ' + error);
    //     }
    // }

    useEffect(() => {
        fetchBrand();
    }, []);

    return (
        <div>
            <Navbar />
            <SileShow />
            <div className="container">
                {listBrand.map((item) => (
                    <div key={item.id}>
                        <div className="d-flex justify-content-between align-items-end">
                            <h2 className="fw-bold mt-2 text-uppercase fs-4 text-start home-title">{item.name}</h2>
                            <Link
                                className="fst-italic fs-6 link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                to={`category?category-name=${item.name}`}
                            >
                                Xem thêm
                            </Link>
                        </div>
                        <Product brandId={item.id} size={5} />
                    </div>
                ))}
                <BackToTop />
            </div>
        </div>
    );
};

export default Home;
